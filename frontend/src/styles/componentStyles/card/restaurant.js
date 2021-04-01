import styled from "styled-components";

 export const RestaurantContainer = styled.div `
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
export const CardWrapper = styled.div `
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
        cursor:pointer;
    }
  
`;

export const StarRatings = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    .star{
        height:27px;
        width:27px;
    }
    
`;

export const CardImage = styled.img `
    height: 288px;
    width: 271px;
`;
