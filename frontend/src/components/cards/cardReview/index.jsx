import React from 'react'
import like from '../../../assets/like.svg'

import {CardWrapper, RestaurantContainer} from "../../../styles/componentStyles/card/restaurant";
import {
    CommentUpdates,
    ContentWrapper,
    FeaturedComment,
    LatestComments,
    Profile,
    SocialButton
} from "../../../styles/componentStyles/card/review";


const CardReview = ({review_data, all_reviews}) => {

    console.log(all_reviews, 'from reviews')

    const reviewsByThisAuthor = all_reviews.results.filter(review => review.author.id === review_data.author.id);

    return (
        <RestaurantContainer>
            <CardWrapper>
                <Profile>
                    <img src="https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png" alt=""/>
                    <div>
                    <h1>{review_data.author.username}</h1>
                    <span>{reviewsByThisAuthor.length} Reviews in total</span>
                    </div> 
                </Profile>
                <ContentWrapper>
                    <h2>{review_data.restaurant.name}</h2>
                    <FeaturedComment>
                        <p>{review_data.text_content}</p>
                    </FeaturedComment>
                    <SocialButton>
                        <button className="likebutton"> <img src={like} alt=""/> Like <span>{review_data.liked_by.length}</span></button>
                        <button className="commentbutton">Comment <span>0</span></button> {/*TO BE UPDATED*/}
                    </SocialButton>
                    <LatestComments>
                    <span>
                        Latest comments
                    </span>
                    <CommentUpdates>
                        <h5>No comments</h5> {/*TO BE UPDATED*/}
                    </CommentUpdates>
                    </LatestComments>
                </ContentWrapper>
            </CardWrapper>
        </RestaurantContainer>
    )
}

export default CardReview;

