import React from 'react'
import HeaderNavi from '../components/headerNavi/index'
import styled from 'styled-components'
import CardReview from '../components/cards/cardReview';
// import arrow from '../assets/arrow.svg'


const MainContainer = styled.div `
    min-height: 100vh;
`;

const SearchSelectContainer = styled.div `
    height: 50px;
    min-width:100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 5px;
    margin-bottom: 10px;
    box-sizing: content-box;
    border: 1px solid #EBEBEB;
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
`;

const SearchPage = () => {
    return (
        <MainContainer>
            <HeaderNavi/>
            <SearchSelectContainer>
                <SearchBox>Search</SearchBox>
                <SelectCategory>
                <span></span>
                <select id="selectbox1">
                    <option value="">Select a category&hellip;</option>
                    <option value="aye">Aye</option>
                    <option value="eh">Eh</option>
                    <option value="ooh">Ooh</option>
                    <option value="whoop">Whoop</option>
                </select>
                {/* <img src={arrow} alt="select arrow"/> */}
                </SelectCategory>
            </SearchSelectContainer>
            <CardReview/>
        </MainContainer>
    )
}

export default SearchPage;
