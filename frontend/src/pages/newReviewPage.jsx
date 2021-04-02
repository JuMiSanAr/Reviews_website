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

import {newReviewFetch} from "../store/fetches/review_fetches";
import { useDispatch, useSelector } from 'react-redux';
import { passRestaurantData } from '../store/actions/restaurantActions';

import {Rating} from "@material-ui/lab";
import {useHistory} from "react-router-dom";



const ReviewPage = () => {


    const [reviewInput, setReviewInput] = useState('');
     const [ratingValue, setValue] = React.useState(0);
    const [noInput, setNoInputMessage] = useState(false);

    const history = useHistory();
     const dispatch = useDispatch();
     let restaurant = JSON.parse(localStorage.getItem('restaurant'));

     // const action = passRestaurantData(restaurant);
     // dispatch(action);
     // const restaurant_data = useSelector(state => state.restaurantsReducer.restaurant_data.data);
     // const restaurantID = restaurant_data.id


    const submitReviewAndRating = (e) => {
         e.preventDefault();
        if (reviewInput === ''){
            setNoInputMessage(true);
            return 0;
        }else
            setNoInputMessage(false);

        newReviewFetch(reviewInput, ratingValue, restaurant.id)
            .then(data => {
                history.push('/');
            })
            .catch(() => {
                setNoInputMessage(true)
            })
    };

    const handleText = (e) => {
        setReviewInput(e.target.value);
    }

    return(
        <>
            <HeaderNavi/> 
            <ReviewBanner>
            <RestaurantInfoBanner>
                    {/*<RestaurantTitle restaurant_data={restaurant_data}/>*/}
                </RestaurantInfoBanner>
            </ReviewBanner>
            <MainContainer>

            <RatingField>
                   <div>
                    <Rating size="large"
                    name="five_stars"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                    setValue(newValue);}}/>
                   </div>
                    <h5>Select your rating</h5>
            </RatingField>

            <InputReviewField>
                <p>Your review helps others learn about great local businesses.</p>
                <p style={{color:"white"}}>.</p>
                <p>Please don't review this business if you received a freebie for writing this review, <br />or if you're connected in any way to the owner or employees.</p>

                <input
                    value={ reviewInput }
                    onChange= { handleText }
                    type='text'
                    required/>

            </InputReviewField>

                <BtnReview onClick={submitReviewAndRating}>SUBMIT</BtnReview>
                {noInput ? <P>This field is required</P> : ''}

            </MainContainer>
            <Footer />
        </>
    );
};
export default ReviewPage;

