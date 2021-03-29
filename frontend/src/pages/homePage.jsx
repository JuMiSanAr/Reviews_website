import React from 'react';
import CardRestaurant from '../components/cards/cardRestaurant';
import styled from 'styled-components'
import HeaderNavi from '../components/headerNavi/index'

const MainContainer = styled.div`
    min-height: 100vh;
`;

const HomeBanner = styled.div `
    height: 351px;
    width: 100vw;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0 40px 0;
`;

const SearchBox = styled.div `
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    input{
        width: 530px;
        height: 55px;
        background: #FFFFFF;
        border-radius: 5px;
        border-style:none;
        outline: none;
        padding-left: 10px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 50px;
    }
    button{
        width: 200px;
        height: 58px;
        background: #E47D31;
        border-radius: 28px;
        border-style:none;
        margin-left: 10px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        outline:none;
    }
`;
const FilterTitle = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    p{
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        text-transform: uppercase;
        color: #4C4C4C;
    }
    span {
        width: 256px;
        border: 3px solid #E47D31;
        margin-bottom: 50px;
    }
`;

const CardContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;


const HomePage = () => {
    return(
        <>
        <MainContainer>
        <HeaderNavi/>
        <HomeBanner>
            <SearchBox>
            <input type="search" name=""  placeholder='Search..'/>
            <button type="submit">Search</button>
            </SearchBox>
        </HomeBanner>
        <FilterTitle>
            <p>Best Rated Restaurants</p>
            <span></span>
        </FilterTitle>
        <CardContainer>
            <CardRestaurant/>
            <CardRestaurant/>
            <CardRestaurant/>
            <CardRestaurant/>
        </CardContainer>
        </MainContainer>
        </>
    );
};

export default HomePage;