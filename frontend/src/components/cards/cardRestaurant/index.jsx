import React from 'react'
import {stars} from "../../../styles";
import {CardImage, CardWrapper, RestaurantContainer, StarRatings} from "../../../styles/componentStyles/card/restaurant";


const CardRestaurant = ({restaurant_data, onClickHandler}) => {

    return (
        <RestaurantContainer onClick={() => onClickHandler(restaurant_data)}>
            <CardWrapper>
                <div className='cardTitle'>
                    <p>{restaurant_data.name}</p>
                    <p>{restaurant_data.street}</p>
                <StarRatings>
                    <div>
                        {restaurant_data.average_rating === 0 ? <p>No ratings</p> : stars(restaurant_data.average_rating)}
                    </div>
                    <span>{restaurant_data.restaurant_reviews.length}</span>
                </StarRatings>
                </div> 
                <CardImage src={restaurant_data.avatar} alt="" />
                
            </CardWrapper>
        </RestaurantContainer>
    )
}

export default CardRestaurant
