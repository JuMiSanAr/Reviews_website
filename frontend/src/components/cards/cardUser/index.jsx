import React from 'react'
import {CardWrapper, RestaurantContainer} from "../../../styles/componentStyles/card/restaurant";
import {ContentWrapper, Profile} from "../../../styles/componentStyles/card/review";
import {AboutMe} from "../../../styles/componentStyles/card/user";


const CardUser = ({all_user}) => {
    console.log(all_user)
    return (
        <RestaurantContainer>
        <CardWrapper>
            <Profile>
                <img src="https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png" alt=""/>
                <div>
                <h1>{all_user.username}</h1>
                <span>7 Reviews in total</span>
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
