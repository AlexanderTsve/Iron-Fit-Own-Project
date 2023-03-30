import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ClubsMap.module.scss";
import { sendClubsRequest } from "../../store/clubs-slice";
import { Feature, Map, View } from "ol/index.js";
import { OSM, Vector as VectorSource } from "ol/source.js";
import { Point } from "ol/geom.js";
import TileLayer from "ol/layer/Tile.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { Icon, Style } from "ol/style.js";
import { defaults as defaultControls } from "ol/control.js";
import { CLUBS_URL, UNSUCCESSFUL_REQUEST } from "../../util/config.js";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ClubsMap = () => {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;
  const clubs = useSelector((state) => state.clubsList);
  const dispatch = useDispatch();
  const getClubs = useCallback(() => {
    dispatch(sendClubsRequest(CLUBS_URL, UNSUCCESSFUL_REQUEST));
  }, [dispatch]);
  useEffect(() => {
    if (clubs.isRejected) {
      return;
    }
    if (clubs.list.length === 0) {
      getClubs();
    }
    if (clubs.list.length > 0 && !map) {
      const listOfLocations = clubs.list.map((club) => club.geoLocation);
      const { lat, lon } = listOfLocations[5];
      const centeredLocation = fromLonLat([lon, lat]);
      const features = listOfLocations.map((location) => {
        const { lat, lon } = location;
        const currentClubLocation = fromLonLat([lon, lat]);
        const point = new Point(currentClubLocation);
        const iconStyle = new Style({
          image: new Icon({
            pointer: "cursor",
            anchor: [0.5, 46],
            anchorXUnits: "fraction",
            anchorYUnits: "pixels",
            src: `${require("../../assets/icons/gym.png")}`,
          }),
        });
        const iconFeature = new Feature({
          geometry: point,
        });
        iconFeature.setStyle(iconStyle);
        return iconFeature;
      });
      const initialMap = new Map({
        view: new View({
          center: centeredLocation,
          zoom: 6.6,
        }),
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: new VectorSource({
              features: features,
            }),
          }),
        ],
        target: mapElement.current,
        controls: defaultControls({
          attribution: false,
          rotate: false,
          zoom: false,
        }),
      });
      setMap(initialMap);
    }
  }, [map, clubs.list, getClubs, clubs.isRejected]);
  const pointerMoveHandler = () => {
    let centeredLocation;
    if (mapRef.current) {
      mapRef.current.on("pointermove", (e) => {
        const pixel = map.getEventPixel(e.originalEvent);
        const hit = map.hasFeatureAtPixel(pixel);
        map.getViewport().style.cursor = hit ? "pointer" : "";
      });
      mapRef.current.on("click", (e) => {
        const pixel = map.getEventPixel(e.originalEvent);
        const hit = map.hasFeatureAtPixel(pixel);
        if (hit) {
          const coords = toLonLat(e.coordinate);
          const lat = coords[1];
          const lon = coords[0];
          centeredLocation = fromLonLat([lon, lat]);
          map.getView().setZoom(map.getView().getZoom() + 1);
          map.getView().setCenter(centeredLocation);
        }
      });
    }
  };
  return (
    <div className={styles["map-element"]}>
      {clubs.isLoading && <div className={styles.spinner}></div>}
      {clubs.isRejected && (
        <div className={styles.error}>
          <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
          <h1 className={styles.rejected}>{clubs.errorMsg}</h1>
        </div>
      )}
      {!clubs.isRejected && (
        <div
          ref={mapElement}
          className={styles["map-container"]}
          onMouseEnter={pointerMoveHandler}
        ></div>
      )}
    </div>
  );
};
export default ClubsMap;
