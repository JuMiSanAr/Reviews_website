import styled from "styled-components";


export const RestaurantBanner = styled.div `
    height: 351px;
    width: 100vw;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    display: flex;
    align-items: start;
    margin-top:0.5em;
    z-index: 0;
`;

export const RestaurantInfoBanner = styled.div `
    height: 150px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);;
    display: flex;
    align-items: start;
    justify-content: space-between;
    z-index: 10;
`;

export const LowerSection = styled.div `
    display: flex;
    flex-direction:row;
    min-height: 60vh;
    width: 100vw;
    background-color: #F7F7F7;
`


