import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 271px;
    height: 192px;
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
`;

export const Profile = styled.div `
    display:flex;
    align-items: center;
    border-bottom: 1px solid #EBEBEB;
    margin-bottom: 10px;
    img{
        width:66px;
        height: 68px;
        margin-right: 5px;
        border-top-left-radius: 3px;  
    }
`;

export const ContentWrapper = styled.div `
    padding: 5px;
    h2{
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #E47D31;
        margin-bottom: 10px;

    }
`;

export const AboutMe = styled.div `
   width: 249px;
   p{
    overflow: hidden;
    text-overflow: ellipsis;
    a{
        color: #E47D31;
        text-decoration: none;
    }
   }
`;
