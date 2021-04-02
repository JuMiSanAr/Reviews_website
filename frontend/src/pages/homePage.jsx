import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// =================== components ====================
import HeaderNavi from '../components/headerNavi/index'
import Footer from '../components/footer/index'
import CardRestaurant from '../components/cards/cardRestaurant';
import loading from "../assets/loading.gif"
// ===================================================
// ================ styled components ================
import { FeaturedRestaurant, FilterTitle, HomeBanner, MainContainer, SearchBox } from "../styles/pageStyles/homeStyles";
import { ContentWrapper } from "../styles/pageStyles/searchStyle";
// ===================================================
// ==================== fetches ======================
import {allUsersFetch} from '../store/fetches/users_fetches';
import { allRestaurantsFetch } from "../store/fetches/restaurant_fetches";
import {searchResFetch, searchReviewsFetch, searchUsersFetch} from "../store/fetches/search_fetches";
import homeCardFetch from "../store/fetches/home_card_fetches";
// ===================================================
// =================== actions =======================
import {searchResAction, searchReviewsAction, searchUsersAction} from "../store/actions/searchActions";
import { passRestaurantData } from '../store/actions/restaurantActions';
import { getAllRestaurants } from "../store/actions/restaurantActions";
import { homeCardAction } from "../store/actions/homeCardActions";
import {allUserAction/*, getUserInfoAction*/} from '../store/actions/usersActions';
import {getAllReviewsFetch} from "../store/fetches/review_fetches";
import {getAllReviewsAction} from "../store/actions/reviewsActions";
// ===================================================




const HomePage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    // Fetch all restaurants, all users, all reviews and best four restaurants
    useEffect( () => {
        homeCardFetch()
            .then(data => {
                const action = homeCardAction(data.results[0].best_four);
                dispatch(action);
            });

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
           })

    }, [dispatch]);

        // Fetch user info and send it to redux store
    // const isUserLoggedIn = useSelector(state => state.logInReducer.authenticated);
    //

    /*// Get list of all restaurants
    const allRestaurants = useSelector(state => state.restaurantsReducer.all_restaurants.data);*/

    // Show best four restaurants
    const bestFourRes = useSelector(state => state.restaurantsReducer.bestFour.data);


    // Search
    const [searchValue, setSearchValue] = useState("");

   const handleSearch = (e) => {
        e.preventDefault();

        // Search for restaurants
        searchResFetch(searchValue)
            .then(data=>{

                const action = searchResAction(data.results);
                dispatch(action);

                history.push("/search");
            });

        // Search for reviews
        searchReviewsFetch(searchValue)
            .then(data => {
                const action = searchReviewsAction(data.results);
                dispatch((action));
            });

        // Search for users
        searchUsersFetch(searchValue)
            .then(data => {
                const action = searchUsersAction(data.results);
                dispatch(action);
            })
    }
    // See the restaurant at restaurant page
    const checkRestaurantHandler = (data) => {
        const action = passRestaurantData(data);
        dispatch(action);
        // localStorage.setItem('restaurant', JSON.stringify(data));
        history.push("/restaurant");
    };

    return(
        <>
        <MainContainer>
        <HeaderNavi/>
        <HomeBanner>
            <SearchBox>
            <input type="search" name="" placeholder='Search..'
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyUp={ event => event.key === 'Enter' ? handleSearch() : ''}
            />
            <button type="submit" onClick={handleSearch} >Search</button>
            </SearchBox>
        </HomeBanner>
        <ContentWrapper>
        <FilterTitle>
            <p>Best Rated Restaurants</p>
            <span></span>
        </FilterTitle>
        <FeaturedRestaurant>
            {
               bestFourRes ? bestFourRes.map((data, index) => {
                   return (

                        <CardRestaurant key={ index } restaurant_data={ data } onClickHandler={ checkRestaurantHandler }/>
                       );
               }) : <img src={loading} alt="...loading"/>
            }

        </FeaturedRestaurant>
        </ContentWrapper>
        <Footer/>
        </MainContainer>
        </>
    );
};

export default HomePage;