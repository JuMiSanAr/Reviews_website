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
import {newReviewFetch} from "../store/fetches/review_fetches";
import { useDispatch, useSelector } from 'react-redux';
import { passRestaurantData } from '../store/actions/restaurantActions';



const ReviewPage = () => {


    const [reviewInput, setReviewInput] = useState('');
    // const [noInput, setNoInputMessage] = useState(false);

     const dispatch = useDispatch();
     let restaurant = JSON.parse(localStorage.getItem('restaurant'));
     const action = passRestaurantData(restaurant);
     dispatch(action);
     const restaurant_data = useSelector(state => state.restaurantsReducer.restaurant_data.data);
     const restaurantID = restaurant_data.id


    const submitReviewAndRating = (e) => {
         //e.preventDefault();
        // if (reviewInput === ''){
        //     setNoInputMessage(true);
        //     return 0;
        // }else
        //     setNoInputMessage(false);

        newReviewFetch(reviewInput, restaurantID)
            .then(data => {
                console.log(data);
            });
     };



    return(
        <>
            <HeaderNavi/> 
            <ReviewBanner>
            <RestaurantInfoBanner>
                    <RestaurantTitle restaurant_data={restaurant_data}/>
                </RestaurantInfoBanner>
            </ReviewBanner>
            <MainContainer>
            <RatingField>
                {/*<button onClick={saveRating1}><FaStar /></button>*/}
                                {/*<button onClick={saveRating2}><FaStar /></button>*/}
                {/*<button onClick={saveRating3}><FaStar /></button>*/}
                <button><FaStar /></button>
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
                    onChange= {e => setReviewInput(e.target.value)}
                    type='text'
                    required/>

                </InputReviewField>
                <BtnReview onClick={submitReviewAndRating}>SUBMIT</BtnReview>
                {/*{noInput ? <P>This field is required</P> : ''}*/}
            </MainContainer>
                
            <Footer />
        </>
    );
};
export default ReviewPage;

