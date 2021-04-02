import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// ================ components ================
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';
import LittleMap from '../components/restaurantPageComponents/map';
// ===================================================
// ================ styled components ================
import { LowerSection, RestaurantBanner, RestaurantInfoBanner } from '../styles/pageStyles/restaurantStyles';
import { useHistory } from 'react-router';
import { Icon, LowerRightRow, LowerRightSection, OpeningHours, PriceLevel, RightSideButton } from '../styles/componentStyles/restaurant/lowerRightSection';
// ===================================================
// ===================== icons =======================
import clock from '../assets/clock.svg';
import money from '../assets/money.svg';
import { FilterButton, FilterInput, FilterRow, LowerLeftSection } from '../styles/componentStyles/restaurant/lowerLeftSection';
import ReviewCard from '../components/restaurantPageComponents/reviewCard';
import { BannerLeftSection, ReviewsInBanner, ScoreAndReviewsInBanner, TitleInBanner, TypeInBanner } from '../styles/componentStyles/restaurant/banner';
import { stars } from '../styles';
// ===================================================


const RestaurantPage = () => {
    const history = useHistory();
    // const dispatch = useDispatch();
    // let restaurant = JSON.parse(localStorage.getItem('restaurant'));
    
    // const action = passRestaurantData(restaurant);
    // dispatch(action);

    const restaurant_data = useSelector(state => state.restaurantsReducer.restaurant_data.data);

        console.log(restaurant_data)
// ================== BANNER ====================
    const { categories, name, average_rating, restaurant_reviews } = restaurant_data

    const restaurantCategories = categories => {
        let resCat = '';
        if (!categories) return 'Restaurant';
        else categories.forEach((category, index) => {
                index === categories.length-1 ? resCat += category.name : resCat += `${ category.name } & `})
        return resCat
    }
// ==============================================

// ============ LOWER LEFT SECTION ============== 
    
    const [ filter, setFilter ] = useState('');
    const filterHandler = () => {
        console.log(filter);
    }
    
// ==============================================
// ============ LOWER RIGHT SECTION =============
    const { opening_hours, price_level/*, owner */} = restaurant_data

    const writeReviewHandler = () => {
        
        history.push("/newReview");
    }
    const editDataHandler = (event) => {
        console.log(event);
    }

    const priceLevel = (price) => {
        if(price < 2) return '$';
        if(price === 2) return '$$';
        if(price > 2) return '$$$';
    }
// ==============================================
    return(
        <>
            <HeaderNavi/>
            <RestaurantBanner>
                <RestaurantInfoBanner>

                <BannerLeftSection>
                    <TitleInBanner>{ name }</TitleInBanner>
                    <TypeInBanner>{ restaurantCategories(categories) }</TypeInBanner>
                    <ScoreAndReviewsInBanner>
                        {
                            stars(average_rating)
                        }
                        {
                            restaurant_reviews.length === 1 ?
                            <ReviewsInBanner>1 Review</ReviewsInBanner>
                            : <ReviewsInBanner>{ restaurant_reviews.length } Reviews</ReviewsInBanner>
                        }
                    </ScoreAndReviewsInBanner>
                </BannerLeftSection>
                <LittleMap restaurant_data={ restaurant_data }/>
                </RestaurantInfoBanner>
            </RestaurantBanner>
            <LowerSection>
    {/* ================= LOWER LEFT SECTION ================== */}
                <LowerLeftSection>
                    <FilterRow>
                    <FilterInput 
                        type='text'  
                        placeholder='Filter list...'
                        value={ filter }
                        onChange={ event => setFilter(event.target.value) }
                        onKeyUp={ event => event.key === 'Enter' ? filterHandler() : ''}
                        />
                    <FilterButton onClick={ () => filterHandler() }>FILTER</FilterButton>
                    </FilterRow>
                    {
                        !restaurant_data.restaurant_reviews.length ? 
                        '' : restaurant_data.restaurant_reviews.map((review, index) =>
                            <ReviewCard key={index} review={review} /> )  
                    }
            </LowerLeftSection>
    {/* ======================================================= */}
    {/* ================= LOWER RIGHT SECTION ================= */}
                <LowerRightSection>
                    <LowerRightRow>
                        <OpeningHours><Icon src={clock}/>{opening_hours}</OpeningHours>
                    </LowerRightRow>
                    <LowerRightRow>
                        <PriceLevel><Icon src={money}/>Price level: {priceLevel(Number(price_level))}</PriceLevel>
                    </LowerRightRow>
                    <LowerRightRow>
                        <RightSideButton onClick={writeReviewHandler}>WRITE A REVIEW</RightSideButton>
                        {/* {
                            user_id !== owner.id ? '' : <RightSideButton onClick={ (event) => editDataHandler(event)}>EDIT DATA</RightSideButton> 
                        } */}
                        <RightSideButton onClick={ (event) => editDataHandler(event)}>EDIT DATA</RightSideButton>
                    </LowerRightRow>
                </LowerRightSection>
    {/* ======================================================= */}
            </LowerSection>
            <Footer/>
        </>
    );
};
export default RestaurantPage;
