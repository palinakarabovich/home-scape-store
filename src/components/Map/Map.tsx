import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css"
import { MAPS_URL, CUSTOM_ICON, DEFAULT_POSITION } from "../../utils/constants";
import './Map.css';
import React from "react";
import { TMapProps } from "./types";

const Map: React.FC<TMapProps> = () => {

  return (
    <MapContainer center={DEFAULT_POSITION.coordinates} zoom={13} >
      <TileLayer
        url={MAPS_URL}
      />
      <Marker position={DEFAULT_POSITION.coordinates} icon={CUSTOM_ICON}>
      </Marker>
    </MapContainer>
  )
}

export default Map;