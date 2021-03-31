import React from 'react'
import star from '../../../assets/star.svg'
import styled from 'styled-components'

const Container = styled.div `
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

const CardRestaurant = () => {
    return (
        <Container>
            <CardWrapper>
                <div className='cardTitle'>
                    <p>Restaurant Name</p>
                    <p>Address</p> 
                <StarRatings>
                    <div>
                        <img className='star' src={star} alt="" srcset=""/>
                        <img className='star' src={star} alt="" srcset=""/>
                        <img className='star' src={star} alt="" srcset=""/>
                        <img className='star' src={star} alt="" srcset=""/>
                        <img className='star' src={star} alt="" srcset=""/>
                    </div>
                    <span>52</span>
                </StarRatings>
                </div> 
                <CardImage src="https://source.unsplash.com/featured/?restaurant,food" alt="" srcset=""/>
                
            </CardWrapper>
        </Container>
    )
}

export default CardRestaurant
