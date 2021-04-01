import React, {useEffect} from 'react'
import HeaderNavi from '../components/headerNavi/index'
import styled from 'styled-components'
import CardReview from '../components/cards/cardReview';
// import arrow from '../assets/arrow.svg'
import CardRestaurant from '../components/cards/cardRestaurant/index';
import CardUser from '../components/cards/cardUser/index'
import Footer from '../components/footer/index';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import loading  from '../assets/loading.gif'
import allRestaurantsFetch from "../store/fetches/restaurant_fetches";
import {getAllRestaurants} from "../store/actions/restaurantActions";


const MainContainer = styled.div `
    min-height: 90vh;
`;

const SearchSelectContainer = styled.div `
    height: 50px;
    min-width:100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
    box-sizing: content-box;
    border: 1px solid #EBEBEB;
    background-color: white;
`;

const SelectCategory = styled.div `
    margin-right: 10px;
    display: flex;
    justify-content:center;
    align-items: center;

  
    span{
        border-left: 1px solid #D8D8D8;
        height: 50px;
        
    }
    select{
        margin-right: 10px;
        border-style: none;
        color: #D8D8D8;
        outline:none;
    }

`;
const SearchBox = styled.div`
    margin-left: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    input{
        width: 50vw;
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
    } 
     @media (max-width: 768px) {
        input{
        width: 20vw;
        }
  }  
`;
const TabsContainer = styled.div`
/*    width: 80vw; */
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin: 20px 0 40px 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #4C4C4C;
    span{
        width: 500px;
        border-bottom: 1px solid #EBEBEB;
    }
    .reviewtitle{
        display: flex;
        flex-wrap:wrap;
        cursor: pointer;
        div{
        margin: 0 80px 0 0;
        :hover {
            padding-bottom: 10px;
            border-bottom: 3px solid #E47D31;
        }
    }        
`;

const ResCardContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;    
    .content {
            display: none;
        }
    .active-content {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

`;

const ContentWrapper = styled.div`
    margin: auto;
    max-width: 80vw; 
`;

const SearchPage = () => {
    const dispatch = useDispatch();
/*
    const searchedRestaurants = useSelector(state => state.searchReducer.restaurants.data);*/
    // Get list of all restaurants
    const allRestaurants = useSelector(state => state.restaurantsReducer.all_restaurants.data);
    
    const [toggleState, setToggleState] = useState(1);
/*    const [filterSearchState, setfilterSearchState] = useState(null);*/


    const toggleTab = (index) => {
      setToggleState(index);
    // console.log(index)
    };

    useEffect(() => {
         allRestaurantsFetch()
            .then(data => {
                const action = getAllRestaurants(data.results);
                dispatch(action);
                /*console.log(data.results[0].categories.map(one => one.name))
                 console.log(data.results)*/
            });
    }, [])

    return (
        <>
        <MainContainer>
            <HeaderNavi/>
            <SearchSelectContainer>
                <SearchBox><input type="search" name=""  placeholder='Search..'/></SearchBox>
                <SelectCategory>
                <span></span>
                <select>
                    <option value="">Select a category&hellip;</option>
                    {
                         allRestaurants ? allRestaurants.map((data, index)=> {
                            return (
                                <option key={index} >{data.categories.map(category => category.name)}</option>
                                     );
                                }) : "...loading"
                    }
                </select>
                {/* <img src={arrow} alt="select arrow"/> */}
                </SelectCategory>
            </SearchSelectContainer>
            <ContentWrapper>
            <TabsContainer>
                <div className="reviewtitle">
                    <div onClick={() => toggleTab(1)}>Restaurants</div>
                    <div onClick={() => toggleTab(2)}>Reviews</div>
                    <div onClick={() => toggleTab(3)}>Users</div>
                </div>
              
                <span></span>
            </TabsContainer>
            <ResCardContainer> 
                <div className={toggleState === 1 ? " active-content" : "content"}>

                   {/*     {
               searchedRestaurants ? searchedRestaurants.map((data, index)=> {
                   return (

                        <CardRestaurant key={index} restaurant_data={data}/>

                       );
               }) : "...Loading"
            }*/}

                 {
               allRestaurants ? allRestaurants.map((data, index)=> {
                   return (

                        <CardRestaurant key={index} restaurant_data={data}/>

                       );
               }) : <img src={loading} alt="...loading"/>
            }

                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                   <CardReview/>
                    <CardReview/>
                    <CardReview/>
                    <CardReview/>
                </div>
                <div className={toggleState === 3 ? "active-content" : "content"}>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                </div> 
            </ResCardContainer>  
            </ContentWrapper>
        </MainContainer>
        <Footer/>  
    </>
    )
}

export default SearchPage;
