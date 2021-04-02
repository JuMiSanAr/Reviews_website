import React, {useEffect} from 'react';
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';
import star from '../assets/star.svg'
import comment from '../assets/comment.svg'
import restaurant from '../assets/restaurant.svg'
import edit from '../assets/edit.svg'
import { useState } from "react";
import EditProfileForm from '../components/editProfileForm'
import {usersRestaurantsFetch} from "../store/fetches/restaurant_fetches";
import {getLoggedInUserInfoFetch, getLoggedInUserReviewComments, getLoggedInUserReviews} from "../store/fetches/users_fetches";
import {getCommentReview, getUserInfoAction, getUserReviews} from "../store/actions/usersActions";
import { getUserRestaurants } from "../store/actions/usersActions";

import {
    AboutWrapper,
    CommentWrapper,
    ContentWrapper, EditProfileWrapper,
    MainContainer,
    ProfileBanner,
    ProfileInnerWrapper,
    ProfileWrapper, RestaurantWrapper, ReviewsWrapper,
    UserProfileWrapper
} from "../styles/pageStyles/profileStyles";
import { useDispatch, useSelector } from 'react-redux';
import { stars } from '../styles';


const UserProfile = () => {
    const [toggleState, setToggleState] = useState(1);
    const dispatch = useDispatch ();
    const toggleTab = (index) => {
      setToggleState(index);
    // console.log(index)
    };

    const loggedInUser = useSelector(state => state.usersReducer.loggedInUser);
    const reviewsFromUser = useSelector(state => state.usersReducer.userReview.data);
    const commentsFromUser = useSelector(state => state.usersReducer.userReviewComment.data);

    useEffect(() => {
        if (loggedInUser.data) {
            getLoggedInUserReviews(loggedInUser.data.id)
            .then(data => {
                const action = getUserReviews(data.results);
                dispatch(action);
            });
            getLoggedInUserReviewComments(loggedInUser.data.id)
            .then(data => {
                const action = getCommentReview(data.results);
                dispatch(action);
            });
            usersRestaurantsFetch(loggedInUser.data.id)
            .then(data => {
                const action = getUserRestaurants(data.results);
                dispatch(action);
            });

            
        }        
    }, [loggedInUser])

    useEffect( () => {
       // Fetch the user's comments, reviews and restaurants
       
        getLoggedInUserInfoFetch()
            .then(data => {
                const action = getUserInfoAction(data);
                dispatch(action);
        });

        
        
        // getLoggedInUserReviewComments()
        //     .then(data => {
        //         const action = usersActions(data.results[2]);
        //         dispatch(action);
        //     });
        

       //  homeCardFetch()
       //      .then(data => {
       //          const action = homeCardAction(data.results[0].best_four);
       //          dispatch(action);
       //      });
       //
       // allRestaurantsFetch()
       //      .then(data => {
       //          const action = getAllRestaurants(data.results);
       //          dispatch(action);
       //      });
    }, []);

    console.log(reviewsFromUser);
    return(
        <>
        <MainContainer>
        <HeaderNavi />
        <ProfileBanner>
           <div className="userdetails">
               <h2>Laurant H.</h2>
               <span>Zurich</span>
               <p><span>6</span>reviews</p>
               <p><span>210</span>comments</p>
           </div>
        </ProfileBanner>
        <ProfileWrapper>
            <ProfileInnerWrapper>
                <UserProfileWrapper>
                <img src="https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png" alt="" srcSet=""/>
                <h2>Lauren's Profile</h2>
                <div className="clickelement" onClick={() => toggleTab(1)}>
                    <img src={star} alt="" srcSet=""/>
                    <span>Reviews</span>
                </div>
                <div className="clickelement" onClick={() => toggleTab(2)}>
                    <img src={comment} alt="" srcSet=""/>
                    <span>Comments</span>
                </div>
                <div className="clickelement" onClick={() => toggleTab(3)}>
                    <img src={restaurant} alt="" srcSet=""/>
                    <span>Restaurants</span>
                </div>
                <div className="clickelement" onClick={() => toggleTab(4)}>
                    <img src={edit} alt="" srcSet=""/>
                    <span>Edit profile</span>
                </div>
                </UserProfileWrapper>
                <ContentWrapper>
                    <ReviewsWrapper className={toggleState === 1 ? " active-content" : "content"}>
                    <h1>Reviews</h1>
                    { 
                        reviewsFromUser ? reviewsFromUser.map((review, index) => {
                            return (
                            <div key={index} className="userreviews">
                                <span>{review.restaurant.name} </span>
                                <div className="ratingstar">
                                    
                                    {review.rating === 0 ? <p>No ratings</p> : stars(parseInt(review.rating))}
                                                            
                                
                                </div>
                            <p>{review.text_content} </p>
                            </div>)
                        } ) : 
                        <p>this user has no reviews</p>
                    }
                    
                    </ReviewsWrapper>
                
                    <CommentWrapper className={toggleState === 2 ? " active-content" : "content"}>
                        <h1>Comment</h1>
                        {
                            commentsFromUser ? commentsFromUser.map((comment, index) => {
                            return (
                                <div className="usercomment">
                                <span>restaurant</span>
                                <p>{ comment.comment_content }</p>
                                </div>
                            )
                            }
                            ) : 
                        <p>this user has no comments</p>
                        }

                    </CommentWrapper>
                    <RestaurantWrapper className={toggleState === 3 ? " active-content" : "content"}>
                    <h1>Restaurants</h1>



                    <div className="aboutrestaurant">
                        <span>Läderach Chocolatier</span>
                        <div className="ratingstar">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </div>
                        <p>This location at the Bahnhofstrasse is quite friendly
                            and easily located across the street from the train station. 
                            The people there seem to be quite good and helpful in their 
                            service.</p>
                    </div>
                    <div className="editbutton">
                     <button>Create Restaurant</button>
                    </div>
                    </RestaurantWrapper>
                    <EditProfileWrapper className={toggleState === 4 ? " active-content" : "content"}>
                    <h1>Edit UserProfile</h1>
                    <EditProfileForm/>
                    </EditProfileWrapper>
                    </ContentWrapper>
                    <AboutWrapper>
                     <h2>About Laurent</h2>
                     <span className="detailelement">
                        <h3>Location</h3>
                        <p>Zurich, CH</p>
                     </span>
                     <span className="detailelement">
                        <h3>Luna memeber since</h3>
                        <p>April, 2018</p>
                     </span>
                     <span className="detailelement">
                        <h3>Things I love</h3>
                        <p>Everything</p>
                     </span>
                     <span className="detailelement">
                        <h3>Description</h3>
                        <p>m professional photographer with an eye for details in every thing I do in my live. 
                            Every time a pass by a nice restaurant i have to stop and take notes</p>
                     </span>
                    
                </AboutWrapper>
             </ProfileInnerWrapper>
        </ProfileWrapper>

        <Footer />
        </MainContainer>
        </>
    );
};

export default UserProfile;