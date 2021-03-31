import React, { useState } from 'react';

import styled from 'styled-components';

// ================ components ================
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';

// ================ styled components ================
import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';
import { RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';



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

export const InputReviewField = styled.div`
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
margin: 60px 10px 20px 250px;
border: 1px solid #E3E3E3;
box-sizing: border-box;
border-radius: 3px;
width: 832px;
height: 264.5px;
background: #FFFFFF;

  
    input {
        font-style: normal;
        letter-spacing: 0px;
        padding: 10px;
        margin-left: 0px;
        width: 431px;
        height: 192px;
        border: none;
        outline: none;
        font-family: Helvetica, sans-serif;
        font-size: 20px;
        line-height: 23px;
        font-weight: 400;
    }

    p {
        margin-top: 8px;
        margin-left: 20px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 23px;

        color: #BBB7B7;
    }
`

export const P = styled.p`
position: absolute;
height: 18px;
left: 0%;
right: 82.69%;
top: calc(50% - 18px/2 + 162.5px);

font-family: Helvetica;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 18px;


color: #B00000;
`

export const BtnReview = styled.button`
        width: 200px;
        height: 57px;
        background: #E47D31;
        border-radius: 28px;
        border-style:none;
        margin-left: 880px;
        font-family: Helvetica; // needs to be changed to Roboto!!
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #000000;
        outline:none;
`
export const RatingField = styled.div `
    position: relative;
    background-color: transparent;
    border: transparent;
    margin: 0 2px;
    padding: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    font-size: 32px;

    h5 {
        height: 23px;
        left: 38.58%;
        right: 42.55%;
        top: calc(50% - 23px/2 - 128.5px);

        font-family: Helvetica;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #7E7E7E;
    }
`


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
            <RatingField>
                <button>☆</button>
                <button>☆</button>
                <button>☆</button>
                <button>☆</button>
                <button>★</button>
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
                    required/>

                </InputReviewField>
                <BtnReview>SUBMIT</BtnReview>
                {/* onClick to do for Submit btn! if condition if inpout fulfiled or not maybe make display this field is required only when submitting empty field  */}
                <P>This field is required *to be displayed when clicking button with empty input field</P>
                
            <Footer/>
        </>
    );
};
export default ReviewPage;


