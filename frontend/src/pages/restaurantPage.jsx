import React from 'react';
import { useSelector, useStore } from 'react-redux';

// ================ components ================
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';
import LittleMap from '../components/restaurantPageComponents/map';
import RightSection from '../components/restaurantPageComponents/lowerRightSection';
// ===================================================
// ================ styled components ================
import RestaurantTitle from '../components/restaurantPageComponents/bannerTitle';
import { LowerSection, 
 RestaurantBanner, RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';
import LeftSection from '../components/restaurantPageComponents/lowerLeftSection';
// ===================================================



const restaurant = {
    name: 'Läderach Chocoloatier Suisee',
    type: 'Chocolatiers & Shops',
    score: 3.5,
    reviewsNumber: 68,
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
            reviewerImage: 'https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png',
            numberOfReviewsOfReviewer: 6,
            score: 3.5,
            date: '01.01.2018 15:22',
            content: 'this location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.',
            numberOfReviewLikes: 63,
            comments: [
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
            reviewerName: 'BOBO.',
            reviewerImage: 'https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png',
            numberOfReviewsOfReviewer: 6,
            score: 3.5,
            date: '01.01.2018 15:22',
            content: 'this location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.',
            numberOfReviewLikes: 63,
            comments: [
                {
                    commenterName: 'Colin Wirz',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'Actually you have no taste!',
                },
                {
                    commenterName: 'Laurent Meyer',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'Sorry bro!',
                },
                {
                    commenterName: 'Laurent Meyer',
                    commentDate: '01.01.2018 15:22',
                    commentContent: 'I cant imagine!',
                },
            ]
    
        },

    ]

}


const RestaurantPage = () => {
    const restaurant_data = useSelector(state => state.restaurantsReducer.restaurant_data);
    console.log(restaurant_data);

    return(
        <>
            <HeaderNavi/>
            <RestaurantBanner>
                <RestaurantInfoBanner>
                    <RestaurantTitle restaurant={restaurant} restaurant_data={restaurant_data}/>
                        <LittleMap restaurant_data={restaurant_data}/>
                </RestaurantInfoBanner>
            </RestaurantBanner>
            <LowerSection>
                <LeftSection reviews={restaurant.reviews} restaurant_reviews={restaurant_data.data.restaurant_reviews}/>

                <RightSection restaurant={restaurant} restaurant_data={restaurant_data}/>
            </LowerSection>
            <Footer/>
        </>
    );
};
export default RestaurantPage;


