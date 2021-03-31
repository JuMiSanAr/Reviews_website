//justina

import React, { useState } from 'react';

import styled from 'styled-components';

// ================ components ================
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';

// ================ styled components ================
import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';



// two below to adjust 
export const ReviewBanner = styled.div `
    height: 204px;
    width: 100vw;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    display: flex;
    align-items: start;
    margin-top:0.5em;
    z-index: 0;
`;

// below to import 
export const RestaurantInfoBanner = styled.div `
    height: 150px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);;
    display: flex;
    align-items: start;
    justify-content: space-between;
    z-index: 10;
`;


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
    priceLevel: '$$$',
    openingHours: 'Monday-Friady 9:00 am - 8:00 pm',
    reviews:[
        { 
            reviewerName: 'Laurent H.',
            numberOfReviewsOfReviewer: '6',
            score: '3.5',
            date: '01.01.2018 15:22',
            content: 'this location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.',
            numberOfReviewLikes: '63',
            comment: [
                {
                    commenterName: 'Colin Wirz',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'Actually you have no taste!'
                },
                {
                    commenterName: 'Laurent Meyer',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'Sorry bro!'
                },
                {
                    commenterName: 'Laurent Meyer',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'I cant imagine!'
                },
            ]
    
        },
        { 
            reviewerName: 'Laurent H.',
            numberOfReviewsOfReviewer: '6',
            score: '3.5',
            date: '01.01.2018 15:22',
            content: 'this location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.',
            numberOfReviewLikes: '63',
            comment: [
                {
                    commenterName: 'Colin Wirz',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'Actually you have no taste!'
                },
                {
                    commenterName: 'Laurent Meyer',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'Sorry bro!'
                },
                {
                    commenterName: 'Laurent Meyer',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'I cant imagine!'
                },
            ]
    
        },

    ]

}


const ReviewPage = () => {
    // const writeReviewHandler = (event) => {
    //     console.log(event);
    // }
    // const editDataHandler = (event) => {
    //     console.log(event);
    // }

    return(
        <>
            <HeaderNavi/> 
            <ReviewBanner>
            <RestaurantInfoBanner>
                    <RestaurantTitle restaurant={restaurant}/>

                </RestaurantInfoBanner>
            </ReviewBanner>

            <Footer/>
        </>
    );
};
export default ReviewPage;


