import React from 'react'
import like from '../../../assets/like.svg'
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

const FeaturedComment = styled.p `
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

const SocialButton = styled.div `
    display: flex;
    margin: 15px 0 15px 0;
    button{
        width: 129px;
        height: 33px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
        background: rgba(145, 145, 145, 0.6);
        img{
            width:12px;
            height: 19px;
        }
    }
    .likebutton{
        border-radius: 28px 0px 0px 28px;
        margin-right: 1px;
    }
    .commentbutton {
        border-radius: 0px 28px 28px 0px;
        margin-left: 1px;
    }
`;

const LatestComments = styled.div `
   font-style: normal;
   span{
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
   }
`;

const CommentUpdates = styled.div `
    margin: 10px 5px 10px 5px;
    font-size: 14px;
    line-height: 16px;
    h5{
        font-weight: bold;
        color: #E47D31;
        margin-bottom: 5px;
    }
    p{
        font-weight: 300;
    }
`;

const CardReview = () => {
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
                    <FeaturedComment>
                        <p>
                            React wouldn’t know what to return for the second useState Hook call. 
                            React expected that the second Hook call.. <a href="http://">read more</a>
                        </p>    
                    </FeaturedComment>
                    <SocialButton>
                        <button className="likebutton"> <img src={like} alt=""/> Like <span>63</span></button>
                        <button className="commentbutton">Comment <span>23</span></button>  
                    </SocialButton>
                    <LatestComments>
                    <span>
                        Latest comments
                    </span>
                    <CommentUpdates>
                        <h5>Colin Wirz</h5>
                        <p>Actually you have no taste!</p>
                    </CommentUpdates>
                    <CommentUpdates>
                        <h5>Oded</h5>
                        <p>Actually you have no taste!</p>
                    </CommentUpdates>
                    </LatestComments>
                </ContentWrapper>
            </CardWrapper>
        </Container>
    )
}

export default CardReview;
