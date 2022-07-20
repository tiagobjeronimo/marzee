import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

function Map({mapData, mapOrigin, mapZoom}){
    let mapMarkerIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow
    });
    
    L.Marker.prototype.options.icon = mapMarkerIcon;
    
    return(
        <MapContainer center={mapOrigin} zoom={mapZoom} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {Array.isArray(mapData) && mapData.map((user) =>
                <Marker position={[user.address.geo.lat, user.address.geo.lng]} key={user.id}>
                    <Popup closeButton={false}>{user.name}</Popup>
                </Marker>
            )}

            {!Array.isArray(mapData) &&
                <Marker position={[mapData.address.geo.lat, mapData.address.geo.lng]}>
                    <Popup closeButton={false}>{mapData.name}</Popup>
                </Marker>
            }
        </MapContainer>
    );
}

export default Map;
