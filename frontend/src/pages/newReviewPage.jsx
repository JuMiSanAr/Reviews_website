import React, { useState } from 'react';

import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';

import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';
import { RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';
import {
    BtnReview,
    InputReviewField,
    MainContainer,
    P,
    RatingField,
    ReviewBanner
} from "../styles/pageStyles/newReviewStyles";
import {FaStar} from "react-icons/all";
import newReviewFetch from "../store/fetches/review_fetches";
import {newReviewAction} from "../store/actions/newReviewActions";
import {useDispatch} from "react-redux";



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

    // const [rating1, serRating1] = useState('');
    const [reviewInput, setReviewInput] = useState('');


    const changeReviewInput = (e) => {
        console.log(reviewInput);
        setReviewInput(e.target.value)
    };

    const submitReview = () => {

        newReviewFetch(reviewInput)
        .then(data => {
            console.log(data);

    });
    }

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
                {/*<button onClick={saveRating1}><FaStar /></button>*/}
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
            <h5>Select your rating</h5>
            </RatingField>
            <InputReviewField>
                <p>Your review helps others learn about great local businesses.</p>
                <p style={{color:"white"}}>.</p>
                <p>Please don't review this business if you received a freebie for writing this review, <br />or if you're connected in any way to the owner or employees.</p>

                <input
                    value={reviewInput}
                    onChange= {e => changeReviewInput(e)}
                    // onChange= {e => setReviewInput(e.target.value)}
                    type='text'
                    required/>

                </InputReviewField>
                <BtnReview onClick={submitReview}>SUBMIT</BtnReview>
                {/* onClick to do for Submit btn! if condition if input fulfiled or not maybe make display this field is required only when submitting empty field  */}
                <P>This field is required *to be displayed when clicking button with empty input field</P>
                
            <Footer />
            </MainContainer>
        </>
    );
};
export default ReviewPage;


