import React from 'react';

import { stars } from '../../styles';
// ================ styled components ================
import { BannerLeftSection, ReviewsInBanner, ScoreAndReviewsInBanner, 
    TitleInBanner, TypeInBanner } from '../../styles/componentStyles/restaurant/banner';
// ===================================================



const RestaurantTitle = (props) => {
    const { name, type, score, reviewsNumber} = props.restaurant
    return(
        <BannerLeftSection>
                <TitleInBanner>{name}</TitleInBanner>
                <TypeInBanner>{type}</TypeInBanner>
            <ScoreAndReviewsInBanner>
                {
                    stars(score)
                }
                {
                    reviewsNumber === 1 ?
                    <ReviewsInBanner>
                        1 Review
                    </ReviewsInBanner>
                        : <ReviewsInBanner>
                            {reviewsNumber} Reviews
                        </ReviewsInBanner>
                }
            </ScoreAndReviewsInBanner>
        </BannerLeftSection>
    );
};
export default RestaurantTitle;
