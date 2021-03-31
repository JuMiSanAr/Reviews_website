import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 271px;
    height: 192px;
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
`;

const Profile = styled.div `
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

const ContentWrapper = styled.div `
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

const AboutMe = styled.p `
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

const CardUser = () => {
    return (
        <Container>
        <CardWrapper>
            <Profile>
                <img src="https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png" alt=""/>
                <div>
                <h1>Lauren H.</h1>
                <span>6 Reviews in total</span>
                </div> 
            </Profile>
            <ContentWrapper>
                <h2>Colinz Bar</h2>
                <AboutMe>
                    <p>
                        React wouldn’t know what to return for the second useState Hook call. 
                        React expected that the second Hook call.. <a href="http://">read more</a>
                    </p>    
                    </AboutMe>
                </ContentWrapper>
            </CardWrapper>
        </Container>
    )
}

export default CardUser;
