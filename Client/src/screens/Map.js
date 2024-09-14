import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';
import L from 'leaflet';

import trainIcn from '../assets/Train.png'; // Adjust the path according to your project structure


function Map() {
    const location = useLocation()

    const longi = location.state.props.longi;
    const lati = location.state.props.lati;

    console.log(longi)

    const position = [longi, lati];

    const customIcon = new L.Icon({
        iconUrl: trainIcn,
        iconSize: [32, 32], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32] 
    });

    return (
        <div style={{display : 'flex',justifyContent : 'center',flexDirection : 'row'}}>
            <div style={{display : 'flex',flexDirection : 'column',justifyContent : 'center'}}>

            <div style={{fontSize : 20,fontWeight : 'bold',marginBottom : 20}}>
                {location.state.props.name}|
                <label style={{fontSize : 20}}>

                {location.state.props.Route_name}|
                
                Status : {location.state.props.Status} {location.state.props.Status == 'Active' ? <>🟢</> : <>🔴</>}
                </label>
            </div>
        <MapContainer center={position} zoom={7} style={{ height: "600px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            <Marker position={position} icon = {customIcon}>
                <Popup >
                    <div style = {{fontWeight : 'bold'}}>
                        {location.state.props.name} is at :  [{lati}, {longi}]
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
                </div>
    </div>
    );
}

export default Map;
