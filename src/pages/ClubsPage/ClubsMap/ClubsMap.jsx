import { useEffect, useState, useRef } from "react";
import styles from "./ClubsMap.module.scss";
import { Feature, Map, View } from "ol/index.js";
import { OSM, Vector as VectorSource } from "ol/source.js";
import { Point } from "ol/geom.js";
import TileLayer from "ol/layer/Tile.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { Icon, Style } from "ol/style.js";
import { defaults as defaultControls } from "ol/control.js";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import useGetClubsRequest from "../../../hooks/use-get-clubs-request";
const ClubsMap = () => {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;
  const clubsObj = useGetClubsRequest();
  useEffect(() => {
    if (clubsObj.clubs.isRejected) {
      return;
    }
    if (clubsObj.clubs.list.length === 0) {
      clubsObj.getClubs();
    }
    if (clubsObj.clubs.list.length > 0 && !map) {
      const listOfLocations = clubsObj.clubs.list.map(
        (club) => club.geoLocation
      );
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
            src: `${require("../../../assets/icons/gym.png")}`,
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
  }, [clubsObj, map]);
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
      {clubsObj.clubs.isLoading && <div className={styles.spinner} />}
      {clubsObj.clubs.isRejected && (
        <ErrorMessage errorMsg={clubsObj.clubs.errorMsg} />
      )}
      {!clubsObj.clubs.isRejected && (
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
