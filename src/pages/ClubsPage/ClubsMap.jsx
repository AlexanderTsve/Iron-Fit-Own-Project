import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./ClubsMap.module.scss";
import { getClubs } from "../../util/helpers.js";
import { CLUBS_URL, UNSUCCESSFUL_REQUEST } from "../../util/config.js";
import { Feature, Map, View } from "ol/index.js";
import { OSM, Vector as VectorSource } from "ol/source.js";
import { Point } from "ol/geom.js";
import TileLayer from "ol/layer/Tile.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { Icon, Style } from "ol/style.js";
import { defaults as defaultControls } from "ol/control.js";
const ClubsMap = () => {
  const [requestError, setRequestError] = useState("");
  const [geoLocations, setGeoLocations] = useState([]);
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;
  const sendClubsRequest = useCallback(async () => {
    try {
      const data = await getClubs(CLUBS_URL, UNSUCCESSFUL_REQUEST);
      setGeoLocations(Object.values(data)[0].map((club) => club.geoLocation));
    } catch (err) {
      setRequestError(err.message);
    }
  }, []);
  useEffect(() => {
    if (geoLocations.length === 0) {
      sendClubsRequest();
    }
    if (geoLocations.length > 0 && !map) {
      const { lat, lon } = geoLocations[5];
      const centeredLocation = fromLonLat([lon, lat]);
      const features = geoLocations.map((location) => {
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
        controls: defaultControls({ attribution: false }),
      });
      setMap(initialMap);
    }
  }, [sendClubsRequest, geoLocations, map]);
  const pointerMoveHandler = () => {
    let centeredLocation;
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
        map.getView().setCenter(centeredLocation);
        map.getView().setZoom(map.getView().getZoom() + 1);
      }
    });
  };
  return (
    <div className={styles["map-element"]}>
      {requestError && <p>{requestError}</p>}
      {!requestError && (
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
