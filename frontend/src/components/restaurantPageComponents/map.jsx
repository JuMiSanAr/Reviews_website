import React, { useState } from 'react';

// ====================== icons ======================
import pin from '../../assets/pin.svg';
import phoneLogo from '../../assets/phone.svg';
import web from '../../assets/web.svg';
import marker from '../../assets/Marker.png';
// ===================================================
// ================ styled components ================
import { DetailsContainer, DetailsRow, LittleMapContainer, MapContainer, 
    RestaurantDetails, RestaurantDetailsIcon } from '../../styles/componentStyles/restaurant/map';
// ===================================================
// ======================= map =======================
import { MapContainer as Map, Marker, TileLayer} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
let mapUrl = 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z} ';
// ===================================================



const LittleMap = (props) => {
    // const { street, streetNumber, city, zipCode, country, phoneNumbner, website, latLan} = props.restaurant
    const { city, /*country, latitude, longitude, */phone, street, website/*, zip_code*/} = props.restaurant_data;
    // let lonLan = !latitude ? '' : [ Number(longitude), Number(latitude) ];
    const tempLonLat = [47.372, 8.539];
    const [ position ] = useState(tempLonLat)
    // const [ position ] = useState(latLan);
    let zoom = 15;

    const markerIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        iconSize: [15.5,25],     
    });




    return(
        <LittleMapContainer>
        <MapContainer>
            <Map 
                style={{height: '100%', width: '100%'}}
                center={position} 
                zoom={zoom} 
                scrollWheelZoom={false}
                zoomControl={false}
                attributionControl={false}
            >
                <TileLayer
                    url={mapUrl}
                />
                <Marker position={position} icon={markerIcon}/>
            </Map>
        </MapContainer>
        <DetailsContainer>
            <DetailsRow>
            <RestaurantDetailsIcon src={pin}/>
            <RestaurantDetails>{street}, {city}</RestaurantDetails>
            </DetailsRow>
            <DetailsRow>
            <RestaurantDetailsIcon src={phoneLogo}/>
            <RestaurantDetails>{phone}</RestaurantDetails>
            </DetailsRow>
            <DetailsRow>
            <RestaurantDetailsIcon src={web}/>
            <RestaurantDetails>{website ? website : 'goodfood.com'}</RestaurantDetails>
            </DetailsRow>
        </DetailsContainer>
        </LittleMapContainer>
    );
};

export default LittleMap;