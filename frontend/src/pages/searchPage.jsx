import React, {useEffect} from 'react'
import HeaderNavi from '../components/headerNavi/index'
import CardReview from '../components/cards/cardReview';
// import arrow from '../assets/arrow.svg'
import CardRestaurant from '../components/cards/cardRestaurant/index';
import CardUser from '../components/cards/cardUser/index'
import Footer from '../components/footer/index';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterRestaurantData, getAllRestaurants, passRestaurantData} from "../store/actions/restaurantActions";
import {allRestaurantsFetch} from "../store/fetches/restaurant_fetches";
import {
    MainContainer,
    ContentWrapper, ResCardContainer,
    SearchBox,
    SearchSelectContainer,
    SelectCategory,
    TabsContainer
} from "../styles/pageStyles/searchStyle";
import { allUserAction } from '../store/actions/usersActions';
import { allUsersFetch } from '../store/fetches/users_fetches';
import {useHistory} from "react-router-dom";
import loading from "../assets/loading.gif";
import homeCardFetch from "../store/fetches/home_card_fetches";
import {homeCardAction} from "../store/actions/homeCardActions";
import {getAllReviewsFetch} from "../store/fetches/review_fetches";
import {getAllReviewsAction} from "../store/actions/reviewsActions";




const SearchPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // Get list of all restaurants
    const allRestaurants = useSelector(state => state.restaurantsReducer.all_restaurants.data);

    // Get list of all users
    const allUsers = useSelector(state => state.usersReducer.users.data);

    // Get list of all reviews
    const allReviews = useSelector(state => state.reviewsReducer.all_reviews.data);

    // Results fetched from homePage
    const fetchedRestaurants = useSelector(state => state.searchReducer.restaurants.data);
    const fetchedReviews = useSelector(state => state.searchReducer.reviews.data);
    const fetchedUsers = useSelector(state => state.searchReducer.users.data);

    // Local state
    const [toggleState, setToggleState] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    // Content being rendered
    const [showingRestaurants, setShowingRestaurants] = useState(<img src={loading} alt="...loading"/>);
    const [showingReviews, setShowingReviews] = useState(<img src={loading} alt="...loading"/>);
    const [showingUsers, setShowingUsers] = useState(<img src={loading} alt="...loading"/>);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    // Fetch all restaurants, all users, all reviews on page refresh
    useEffect( () => {
       allRestaurantsFetch()
            .then(data => {
                const action = getAllRestaurants(data.results);
                dispatch(action);
            });

       allUsersFetch()
             .then(data => {
                 const action = allUserAction(data);
                 dispatch(action);
             });

       getAllReviewsFetch()
           .then(data => {
               const action = getAllReviewsAction(data);
               dispatch(action);
           });

    }, []);

  // Search filters
   useEffect(() => {
       if (searchTerm !== '') {
           const filteredRestaurants = allRestaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchTerm) ||
                                                                            restaurant.city.toLowerCase().includes(searchTerm) ||
                                                                            restaurant.owner['username'].toLowerCase().includes(searchTerm)
                                                                            );
           const filteredReviews = allReviews.results.filter(review => review.text_content.toLowerCase().includes(searchTerm) ||
                                                                       review.restaurant.name.toLowerCase().includes(searchTerm) ||
                                                                        review.author['username'].toLowerCase().includes(searchTerm));
           const filteredUsers = allUsers.filter(user => user.username.toLowerCase().includes(searchTerm) ||
                                                         user.email.toLowerCase().includes(searchTerm));

           setShowingRestaurants(filteredRestaurants.map((restaurant, index) => {
                return (
                    <CardRestaurant key={ index } restaurant_data={ restaurant } onClickHandler={ checkRestaurantHandler }/>
                )
            }))
           setShowingReviews(filteredReviews.map((review, index) => {
                return (
                    <CardReview key={ index } review_data={ review } all_reviews={allReviews}/>
                )
            }))
           setShowingUsers(filteredUsers.map((user, index) => {
                return (
                    <CardUser key={ index } all_user={ user } all_reviews={allReviews}/>
                )
            }))
       }
       else if (allRestaurants && allReviews && allUsers) {
            setShowingRestaurants(allRestaurants.map((restaurant, index) => {
                return (
                    <CardRestaurant key={ index } restaurant_data={ restaurant } onClickHandler={ checkRestaurantHandler }/>
                )
            }))
           setShowingReviews(allReviews.results.map((review, index) => {
                return (
                    <CardReview key={ index } review_data={ review } all_reviews={allReviews}/>
                )
            }))
           setShowingUsers(allUsers.map((user, index) => {
                return (
                    <CardUser key={ index } all_user={ user } all_reviews={allReviews}/>
                )
            }))
       }
    }, [searchTerm]);

   //Inherited restaurant cards
   useEffect(() => {
        if (!fetchedRestaurants && allRestaurants) {
            setShowingRestaurants(allRestaurants.map((restaurant, index) => {
                return (
                    <CardRestaurant key={ index } restaurant_data={ restaurant } onClickHandler={ checkRestaurantHandler }/>
                )
            }))
        }
   }, [allRestaurants])

    useEffect(() => {
        if (fetchedRestaurants) {
            setShowingRestaurants(fetchedRestaurants.map((restaurant, index) => {
                return (
                    <CardRestaurant key={ index } restaurant_data={ restaurant } onClickHandler={ checkRestaurantHandler }/>
                )
            }))
        }
   }, [fetchedRestaurants])

    //Inherited review cards
    useEffect(() => {
        if (!fetchedReviews && allReviews) {
            setShowingReviews(allReviews.results.map((review, index) => {
                return (
                    <CardReview key={ index } review_data={ review } all_reviews={allReviews}/>
                )
            }))
        }
   }, [allReviews])

    useEffect(() => {
        if (fetchedReviews) {
            setShowingReviews(fetchedReviews.map((review, index) => {
                return (
                    <CardReview key={ index } review_data={ review } all_reviews={allReviews}/>
                )
            }))
        }
   }, [fetchedReviews])


    //Inherited user cards
    useEffect(() => {
        if (!fetchedUsers && allUsers) {
            setShowingUsers(allUsers.map((user, index) => {
                return (
                    <CardUser key={ index } all_user={ user } all_reviews={allReviews}/>
                )
            }))
        }
   }, [allUsers])

    useEffect(() => {
        if (fetchedUsers) {
            setShowingUsers(fetchedUsers.map((user, index) => {
                return (
                    <CardUser key={ index } all_user={ user } all_reviews={allReviews}/>
                )
            }))
        }
   }, [fetchedUsers])


      // See the restaurant at restaurant page
    const checkRestaurantHandler = (data) => {
        const action = passRestaurantData(data);
        dispatch(action);
        localStorage.setItem('restaurant', JSON.stringify(data));
        history.push("/restaurant");
    };

    return (
        <>
        <MainContainer>
            <HeaderNavi/>
            <SearchSelectContainer>
                <SearchBox><input type="search" name=""  placeholder='Search..' value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}/></SearchBox>
                <SelectCategory>
                <span></span>
                <select>
                    <option value="">Select a category&hellip;</option>

                </select>
                </SelectCategory>
            </SearchSelectContainer>
            <ContentWrapper>
            <TabsContainer>
                <div className="reviewtitle">
                    <div onClick={() => toggleTab(1)}>Restaurants</div>
                    <div onClick={() => toggleTab(2)}>Reviews</div>
                    <div onClick={() => toggleTab(3)}>Users</div>
                </div>
              
                <span></span>
            </TabsContainer>
            <ResCardContainer> 
                <div className={toggleState === 1 ? " active-content" : "content"}>
                    {showingRestaurants}
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    {showingReviews}
                </div>
                <div className={toggleState === 3 ? "active-content" : "content"}>
                    {showingUsers}
                </div>
            </ResCardContainer>  
            </ContentWrapper>
        </MainContainer>
        <Footer/>  
    </>
    )
}

export default SearchPage;
