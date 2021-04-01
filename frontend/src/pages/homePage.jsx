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
import { allUsersFetch } from '../store/fetches/users_fetches';
import { allRestaurantsFetch } from "../store/fetches/restaurant_fetches";
import searchResFetch from "../store/fetches/search_fetches";
import homeCardFetch from "../store/fetches/home_card_fetches";
// ===================================================
// =================== actions =======================
import { searchResAction } from "../store/actions/searchActions";
import { passRestaurantData } from '../store/actions/restaurantActions';
import { getAllRestaurants } from "../store/actions/restaurantActions";
import { homeCardAction } from "../store/actions/homeCardActions";
import { allUserAction } from '../store/actions/usersActions';
// ===================================================




const HomePage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    // Fetch all restaurants and best four restaurants
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
                 const action = allUserAction(data)
                 dispatch(action)
             });

            // Fetch user info and send it to redux store
        // getLoggedInUserInfoFetch()
        //     .then(data => {
        //     // const action =
        // })
    }, []);


    /*// Get list of all restaurants
    const allRestaurants = useSelector(state => state.restaurantsReducer.all_restaurants.data);*/

    // Show best four restaurants
    const bestFourRes = useSelector(state => state.restaurantsReducer.bestFour.data);


    // Search
    const [searchValue, setSearchValue] = useState("");

   const handleSearchRestaurant = (e) => {
        e.preventDefault();
        searchResFetch(searchValue)
            .then(data=>{
                const action = searchResAction(data);
                dispatch(action);
                history.push("/search");
            })
    }
    // See the restaurant at restaurant page
    const checkRestaurantHandler = (data) => {
        const action = passRestaurantData(data);
        dispatch(action);
        localStorage.setItem('restaurant', JSON.stringify(data));
        history.push("/restaurant");
    };

    return(
        <>
        <MainContainer>
        <HeaderNavi/>
        <HomeBanner>
            <SearchBox>
            <input type="search" name=""  placeholder='Search..'
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyUp={ event => event.key === 'Enter' ? handleSearchRestaurant() : ''}
            />
            <button type="submit" onClick={handleSearchRestaurant} >Search</button>
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