import React, { useState } from 'react';

import styled from 'styled-components';

// ================ components ================
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';
import LittleMap from '../components/restaurantPageComponents/map';
// ===================================================
// ================ styled components ================
import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';
import { RestaurantBanner, RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';
// ===================================================



const restaurant = {
    name: 'Läderach Chocoloatier Suisee',
    type: 'Chocolatiers & Shops',
    score: '3.5',
    reviewsNumber: '68',
    street: 'Bahnhofstrasse',
    streetNumber: '106',
    city: 'Zurich',
    zipCode: '8000',
    country: 'switzerland',
    phoneNumbner: '+41 44 211 53 72',
    website: 'laederach.com',
    latLan: [47.372, 8.539],
}

const LowerSection = styled.div `
    display: flex;
    flex-direction:row;
    height:600px;
    width:100vw;
`

const LowerRightSection = styled.div `
    border: solid 1px black;
    width: 50vw;
`
const LowerLeftSection = styled.div `
    border: solid 1px black;
    width: 50vw;
`

const OrangeButton = styled.button `
    background-color: #E47D31;
    padding: 10px 20px;
    width: 200px;
    height: 56px;
    align-self: center;
    border-radius: 28px;
    color: #fff;
    border: none;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.05) translateY(-5px);
    }
`

const RestaurantPage = () => {

    return(
        <>
            <HeaderNavi/>
            <RestaurantBanner>
                <RestaurantInfoBanner>
                    <RestaurantTitle restaurant={restaurant}/>
                        <LittleMap restaurant={restaurant}/>
                </RestaurantInfoBanner>
            </RestaurantBanner>
            <LowerSection>
                <LowerLeftSection>

                </LowerLeftSection>

                <LowerRightSection>
                    <p></p>
                    <p></p>
                    <OrangeButton>WRITE A REVIEW</OrangeButton>
                    <OrangeButton>EDIT DATA</OrangeButton>
                </LowerRightSection>

            </LowerSection>
            <Footer/>
        </>
    );
};
export default RestaurantPage;


