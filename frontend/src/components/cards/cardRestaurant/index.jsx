import React from 'react'

import styled from 'styled-components'
import {stars} from "../../../styles";

const Container = styled.div `
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 271px;
    height: 410px;
    box-sizing: border-box;
    margin: 10px;
    /* margin-bottom: 100px; */
`;
const CardWrapper = styled.div `
    background: #FFFFFF;
    border-radius: 3px;
    border: 1px solid #EBEBEB;
    &::before{
        content:"";
        background-color: #E47D31;
        width: 271px;
        height:8px;
        position: absolute;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .cardTitle{
        padding: 20px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
    }
  
`;

const StarRatings = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    .star{
        height:27px;
        width:27px;
    }
    
`;

const CardImage = styled.img `
    height: 288px;
    width: 271px;
`;

const CardRestaurant = ({restaurant_data, onClickHandler}) => {

    return (
        <Container onClick={() => onClickHandler(restaurant_data)} >
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
        </Container>
    )
}

export default CardRestaurant
