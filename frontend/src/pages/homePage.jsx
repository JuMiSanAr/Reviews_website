import React, {useEffect, useState} from 'react';
import CardRestaurant from '../components/cards/cardRestaurant';
import styled from 'styled-components'
import HeaderNavi from '../components/headerNavi/index'
import Footer from '../components/footer/index'
import {homeCardAction} from "../store/actions/homeCardActions";
import {useDispatch, useSelector} from "react-redux";
import homeCardFetch from "../store/fetches/home_card_fetches";
import spinner from "../assets/spinner.gif"
import searchResFetch from "../store/fetches/search_res_fetches";
import {searchResAction} from "../store/actions/searchResActions";


const MainContainer = styled.div`
    min-height: 100vh;
`;

const HomeBanner = styled.div `
    height: 351px;
    width: 100vw;
    background-image: url('
    https://res.cloudinary.com/tennam/image/upload/v1617228872/Propulsion/c2c64b930af48a341c3adef7c659d36e.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 40px 0;
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
        cursor: pointer;
    }
    @media (max-width: 768px) {
        input{
        width: 300px;
        }
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
        background-color: #E47D31;
        margin-bottom: 50px;
    }
`;

const FeaturedRestaurant = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const ContentWrapper = styled.div`
    margin: auto;
    max-width: 80vw;
`;

const HomePage = () => {

    const dispatch = useDispatch();
    const best_four_res = useSelector(state => state.homeCardReducer.restaurant.data);
/*    console.log("Hello, World from use selector data", best_four_res )*/

    const [searchValue, setSearchValue] = useState("");
    console.log(searchValue)

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
    setSearchValue("")
  }

   const handleSearchRestaurant = (e) => {
        e.preventDefault();
        searchResFetch(searchValue)
            .then(data=>{
                const action = searchResAction(data)
                dispatch(action)
            })
        resetInputField();
    }


    useEffect( () => {
        homeCardFetch()
            .then(data => {
                console.log("homepage", data.results[0].best_four)
                const action = homeCardAction(data.results[0].best_four);
                dispatch(action);
                console.log("from use effect", data.results[0]);

            })

  }, []);


    return(
        <>
        <MainContainer>
        <HeaderNavi/>
        <HomeBanner>
            <SearchBox>
            <input type="search" name=""  placeholder='Search..' onChange={handleSearchInputChanges}/>
            <button type="submit" onClick={handleSearchRestaurant}>Search</button>
            </SearchBox>
        </HomeBanner>
        <ContentWrapper>
        <FilterTitle>
            <p>Best Rated Restaurants</p>
            <span></span>
        </FilterTitle>
        <FeaturedRestaurant>
            {
               best_four_res ? best_four_res.map((data, index)=> {
                   return (

                        <CardRestaurant key={index} restaurant_data={data}/>

                       );
               }) : <img src={spinner} alt="...loading"/>
            }

        </FeaturedRestaurant>
        </ContentWrapper>
        <Footer/>
        </MainContainer>
        </>
    );
};

export default HomePage;