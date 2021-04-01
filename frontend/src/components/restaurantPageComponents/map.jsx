import React, { useState } from 'react';

// ====================== icons ======================
import pin from '../../assets/pin.svg';
import phone from '../../assets/phone.svg';
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

// ===== api key to convert address to lat & lon ===== 
const apiKey = 'pk.90118e3bf831e84aa39b925394cce279&q'
// ===================================================


const LittleMap = (props) => {
    // const { street, streetNumber, city, zipCode, country, phoneNumbner, website, latLan} = props.restaurant
    const { city, country, latitude, longitude, phone, street, website, zip_code} = props.restaurant_data.data;
    let lonLan = !latitude ? '' : [ Number(longitude), Number(latitude) ];
    const tempLonLan = [47.372, 8.539];
    const [ position ] = useState(lonLan.length === 0 ? tempLonLan : lonLan)
    // const [ position ] = useState(latLan);
    let zoom = 15;

    const markerIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        iconSize: [15.5,25],     
    });



    // fetch(`https://us1.locationiq.com/v1/search.php?key=${apiKey}=${street}%20${streetNumber}%2C%20${city}%20${zipCode}%2C%20${country}&format=json`)
    // .then(response => response.json())
    // .then(data => {
    //     // data ? setPosition([data[0].lat, data[0].lon]) : setPosition([47.0269, 8.3023])
    // });

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
            <RestaurantDetailsIcon src={phone}/>
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