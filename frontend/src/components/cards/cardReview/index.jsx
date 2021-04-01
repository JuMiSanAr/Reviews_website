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


const CardReview = () => {
    return (
        <RestaurantContainer>
            <CardWrapper>
                <Profile>
                    <img src="https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png" alt=""/>
                    <div>
                    <h1>Lauren H.</h1>
                    <span>6 Reviews in total</span>
                    </div> 
                </Profile>
                <ContentWrapper>
                    <h2>Colinz Bar</h2>
                    <FeaturedComment>
                        <p>
                            React wouldn’t know what to return for the second useState Hook call. 
                            React expected that the second Hook call.. <a href="http://">read more</a>
                        </p>    
                    </FeaturedComment>
                    <SocialButton>
                        <button className="likebutton"> <img src={like} alt=""/> Like <span>63</span></button>
                        <button className="commentbutton">Comment <span>23</span></button>  
                    </SocialButton>
                    <LatestComments>
                    <span>
                        Latest comments
                    </span>
                    <CommentUpdates>
                        <h5>Colin Wirz</h5>
                        <p>Actually you have no taste!</p>
                    </CommentUpdates>
                    <CommentUpdates>
                        <h5>Oded</h5>
                        <p>Actually you have no taste!</p>
                    </CommentUpdates>
                    </LatestComments>
                </ContentWrapper>
            </CardWrapper>
        </RestaurantContainer>
    )
}

export default CardReview;
