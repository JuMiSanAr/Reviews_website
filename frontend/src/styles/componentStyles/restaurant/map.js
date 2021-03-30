import styled from "styled-components";

export const LittleMapContainer = styled.div `
    height: 15em; 
    width: 20em; 
    margin-top: 1.5em;
    margin-right: 5em;
    z-index: 100;
`;

export const MapContainer = styled.div`
    height: 50%;
    width: 100%;
`;

export const DetailsContainer = styled.div`
    height: 50%;
    width: 100%;
    background-color: white;
    padding: 1.5em;
`;

export const DetailsRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const RestaurantDetailsIcon = styled.img`
    margin-right: 1em;
    margin-bottom: 0.5em;
    object-fit: contain;
    height: 1.25em;
    width: 1.25em;  
`;

export const RestaurantDetails = styled.p`
    margin-top: 0.15em;
    font-size: 0.85em;
    font-weight: lighter;
`;