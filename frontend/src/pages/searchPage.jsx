import React, {useEffect} from 'react'
import HeaderNavi from '../components/headerNavi/index'
import CardReview from '../components/cards/cardReview';
// import arrow from '../assets/arrow.svg'
import CardRestaurant from '../components/cards/cardRestaurant/index';
import CardUser from '../components/cards/cardUser/index'
import Footer from '../components/footer/index';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterRestaurantData, getAllRestaurants} from "../store/actions/restaurantActions";
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




const SearchPage = () => {


    // Get list of all restaurants
    const allRestaurants = useSelector(state => state.restaurantsReducer.all_restaurants.data);

    // Get list of filtered restaurants
    // const filteredRestaurant = useSelector(state => state.restaurantsReducer.filtered_restaurant);

    // Get list of all users
    const allUsersList = useSelector(state => state.usersReducer.users.data)

    const [toggleState, setToggleState] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();


    const toggleTab = (index) => {
      setToggleState(index);
    };

  // Search filter

   // useEffect(() => {
   //             const results = !searchTerm ? allRestaurants : allRestaurants.filter(restaurant =>
   //                         restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()))
   //             const action = filterRestaurantData(results)
   //             dispatch(action)
   //  }, [searchTerm]);


    // Get all restaurant

    useEffect( () => {
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
    }, []);

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

                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>

                </div>
                <div className={toggleState === 3 ? "active-content" : "content"}>
                </div>
            </ResCardContainer>  
            </ContentWrapper>
        </MainContainer>
        <Footer/>  
    </>
    )
}

export default SearchPage;
