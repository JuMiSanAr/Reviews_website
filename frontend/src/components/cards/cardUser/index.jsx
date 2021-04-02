import React from 'react'
import {CardWrapper, RestaurantContainer} from "../../../styles/componentStyles/card/restaurant";
import {ContentWrapper, Profile} from "../../../styles/componentStyles/card/review";
import {AboutMe} from "../../../styles/componentStyles/card/user";


const CardUser = ({all_user, all_reviews}) => {
    console.log(all_user, 'user')
    console.log(all_reviews, 'reviews')

    const reviewsByThisAuthor = all_reviews ? all_reviews.results.filter(review => review.author.id === all_user.id).length : 0; // Find out why this crashes on refresh (with no ?: condition)

    return (
        <RestaurantContainer>
        <CardWrapper>
            <Profile>
                <img src="https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png" alt=""/>
                <div>
                <h1>{all_user.username ? all_user.username : 'User'}</h1>
                <span>{reviewsByThisAuthor} Reviews in total</span>
                </div> 
            </Profile>
            <ContentWrapper>
                <h2>{all_user.first_name} {all_user.last_name}</h2>
                <AboutMe>
                    <p>
                        {all_user.description} <a href="http://">read more</a>
                    </p>    
                    </AboutMe>
                </ContentWrapper>
            </CardWrapper>
        </RestaurantContainer>
    )
}

export default CardUser;
