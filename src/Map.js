import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ locationData }) => {
  const [lat, lng] = [locationData.location.lat, locationData.location.lng];
  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>You're here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
