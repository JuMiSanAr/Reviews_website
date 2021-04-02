import React from 'react';

import { stars } from '../../styles';
// ================ styled components ================
import { BannerLeftSection, ReviewsInBanner, ScoreAndReviewsInBanner, 
    TitleInBanner, TypeInBanner } from '../../styles/componentStyles/restaurant/banner';
// ===================================================



const RestaurantTitle = props => {
    // const { name, type, score, reviewsNumber} = props.restaurant
    const { categories, name, average_rating, restaurant_reviews } = props.restaurant_data

    const restaurantCategories = categories => {
        let resCat = '';
        if (!categories) return 'Restaurant';
        else categories.forEach((category, index) => {
                index === categories.length-1 ? resCat += category.name : resCat += `${ category.name } & `})
        return resCat
    }
    return(
        <BannerLeftSection>
                <TitleInBanner>{ name }</TitleInBanner>
                <TypeInBanner>{ restaurantCategories(categories) }</TypeInBanner>
            <ScoreAndReviewsInBanner>
                {
                    stars(average_rating)
                }
                {
                    restaurant_reviews.length === 1 ?
                    <ReviewsInBanner>
                        1 Review
                    </ReviewsInBanner>
                        : <ReviewsInBanner>
                            { restaurant_reviews.length } Reviews
                        </ReviewsInBanner>
                }
            </ScoreAndReviewsInBanner>
        </BannerLeftSection>
    );
};
export default RestaurantTitle;
