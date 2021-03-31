import React, { useState } from 'react';

import styled from 'styled-components';

// ================ components ================
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';

// ================ styled components ================
import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';
import { RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';
import {BtnReview, InputReviewField, MainContainer, P, RatingField} from "../styles/pageStyles/newReviewStyles";
import star from "../assets/star.svg";



// two below to adjust 
export const ReviewBanner = styled.div `
    height: 150px;
    width: 100vw;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    display: flex;
    align-items: start;
    margin-top:0.5em;
    z-index: 0;
`;


// export const InputField = styled.input `
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// height: 40px;
// width: 40px;

// `



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
            <MainContainer>
            <RatingField>
                <button><img src={star} alt=""/></button>
                <button><img src={star} alt=""/></button>
                <button><img src={star} alt=""/></button>
                <button><img src={star} alt=""/></button>
                <button><img src={star} alt=""/></button>
            <h5>Select your rating</h5>
            </RatingField>
            <InputReviewField> 

                <p>Your review helps others learn about great local businesses.</p>
                <p style={{color:"white"}}>.</p>
                <p>Please don't review this business if you received a freebie for writing this review, <br />or if you're connected in any way to the owner or employees.</p>
                    <input
                    type='text'
                    // value = { review }
                    // onChange= {event => setReview(event.target.value)}
                    label='review'
                    minlength='10'
                    maxlength='500'
                    required/>

                </InputReviewField>
                <BtnReview>SUBMIT</BtnReview>
                {/* onClick to do for Submit btn! if condition if inpout fulfiled or not maybe make display this field is required only when submitting empty field  */}
                <P>This field is required *to be displayed when clicking button with empty input field</P>
                
            <Footer />
            </MainContainer>
        </>
    );
};
export default ReviewPage;


