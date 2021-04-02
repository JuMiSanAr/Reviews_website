import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ================ components ================
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';
import LittleMap from '../components/restaurantPageComponents/map';
import RightSection from '../components/restaurantPageComponents/lowerRightSection';
// ===================================================
// ================ styled components ================
import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';
import { LowerSection, RestaurantBanner, RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';
import LeftSection from '../components/restaurantPageComponents/lowerLeftSection';
import { passRestaurantData } from '../store/actions/restaurantActions';
// ===================================================


const RestaurantPage = () => {
    const dispatch = useDispatch();

    let restaurant = JSON.parse(localStorage.getItem('restaurant'));
    const action = passRestaurantData(restaurant);
    dispatch(action);
    const restaurant_data = useSelector(state => state.restaurantsReducer.restaurant_data.data);
    console.log(restaurant_data)
    return(
        <>
            <HeaderNavi/>
            <RestaurantBanner>
                <RestaurantInfoBanner>
                    <RestaurantTitle restaurant_data={restaurant_data ? restaurant_data : restaurant}/>
                        <LittleMap restaurant_data={restaurant_data ? restaurant_data : restaurant}/>
                </RestaurantInfoBanner>
            </RestaurantBanner>
            <LowerSection>
                <LeftSection restaurant_reviews={restaurant_data ? restaurant_data.restaurant_reviews : restaurant.restaurant_reviews}/>

                <RightSection restaurant_data={restaurant_data ? restaurant_data : restaurant}/>
            </LowerSection>
            <Footer/>
        </>
    );
};
export default RestaurantPage;
