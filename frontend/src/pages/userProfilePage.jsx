import React from 'react';
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi';
import styled from 'styled-components'
import star from '../assets/star.svg'
import comment from '../assets/comment.svg'
import restaurant from '../assets/restaurant.svg'
import edit from '../assets/edit.svg'
import { useState } from "react";
import EditProfileForm from '../components/editProfileForm'


const MainContainer = styled.div`
    min-height: 100vh;
`;

const ProfileBanner = styled.div `
    height: 155px;
    width: 100vw;
    background-image: url('https://source.unsplash.com/featured/?open restaurant');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 40px 0;
    color: WHite;
    @media (max-width: 768px) {
        .userdetails{
            display:none;
        }
  }
`;

const ProfileWrapper = styled.div`
    min-height: 75vh;
    max-width: 85vw;
    margin: auto;
    display: flex;
    justify-content:center;
`;

const ProfileInnerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    .ratingstar{
            display: flex;
            width: 27px;
            height: 27px;
            margin: 10px 0 10px 0;
        }
`;

const UserProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    margin-top: -160px;
    width: 232px;
    margin-right: 5px;
    margin-bottom: 60px;
    img{
        height: 234px;
    }
    h2{
        padding: 20px 0 20px 0;
        border-bottom: 1px solid #EBEBEB;
    }
    .clickelement{
        display:flex;
        align-items: center;
        border-bottom: 1px solid #EBEBEB;
        background-color: white;
        :hover{
            border-left: 5px solid #E47D31;
            background-color: rgba(0, 0, 0, 0.0837);
        }
        img{
            width: 30px;
            height: 30px;
            margin: 5px 20px 5px 5px;
        }
    }
    @media (max-width: 768px) {
        width: auto;
  }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:619px;
    padding: 20px;
    margin-top: -40px;
    margin-right: 7px;
    margin-bottom: 20px;
    background-color: white;
    .content {
            display: none;
    }
    .active-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            
    }
    @media (max-width: 768px) {
        width: auto;
  }
`;

const ReviewsWrapper = styled.div`

     h1{
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    .userreviews{
        margin-bottom: 20px;
        border-bottom: 1px solid #EBEBEB;
        p{
            margin-bottom: 10px;
        }
    }
`;

const CommentWrapper = styled.div`
      h1{
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    .usercomment{
        margin-bottom: 20px;
        border-bottom: 1px solid #EBEBEB;
        p{
            margin-bottom: 10px;
        }
    }
`;

const RestaurantWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    h1{
        margin-bottom: 10px;
        text-transform: uppercase;
    }
    .aboutrestaurant{
        margin-bottom: 20px;
    }
    button{
        width: 200px;
        height: 57px;
        border-radius: 28px;
        background-color:#E47D31;
        color: white;
        border-style: none;
    }
    .editbutton{
        display: flex;
        justify-content: center;
    }
`;

const EditProfileWrapper = styled.div`
    h1{
        margin-bottom: 10px;
        text-transform: uppercase;
    }
`

const AboutWrapper = styled.div`
    display: flex;
    width: 314px;
    flex-direction: column;
    font-size: 20px;
    font-style: Bold;
    h2{
        font-style: bold;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    .detailelement{
      margin-bottom: 20px;
      p{
        font-style: light;
      }
    }
    @media (max-width: 768px) {
        width: auto;
  }
`;

const UserProfile = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    // console.log(index)
    };

    return(
        <>
        <MainContainer>
        <HeaderNavi />
        <ProfileBanner>
           <div className="userdetails">
               <h2>Laurant H.</h2>
               <span>Zurich</span>
               <p><span>6</span>reviews</p>
               <p><span>210</span>comments</p>
           </div>
        </ProfileBanner>
        <ProfileWrapper>
            <ProfileInnerWrapper>
                <UserProfileWrapper>
                <img src="https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png" alt="" srcset=""/>
                <h2>Lauren's Profile</h2>
                <div className="clickelement" onClick={() => toggleTab(1)}>
                    <img src={star} alt="" srcset=""/>
                    <span>Reviews</span>
                </div>
                <div className="clickelement" onClick={() => toggleTab(2)}>
                    <img src={comment} alt="" srcset=""/>
                    <span>Comments</span>
                </div>
                <div className="clickelement" onClick={() => toggleTab(3)}>
                    <img src={restaurant} alt="" srcset=""/>
                    <span>Restaurants</span>
                </div>
                <div className="clickelement" onClick={() => toggleTab(4)}>
                    <img src={edit} alt="" srcset=""/>
                    <span>Edit profile</span>
                </div>
                </UserProfileWrapper>
                <ContentWrapper>
                    <ReviewsWrapper className={toggleState === 1 ? " active-content" : "content"}>
                    <h1>Reviews</h1>
                    <div className="userreviews">
                        <span>Läderach Chocolatier Suisse</span>
                        <div className="ratingstar">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </div>
                        <p>This location at the Bahnhofstrasse is quite friendly
                            and easily located across the street from the train station. 
                            The people there seem to be quite good and helpful in their 
                            service.</p>
                    </div>
                    <div className="userreviews">
                        <span>Läderach Chocolatier Suisse</span>
                        <div className="ratingstar">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </div>
                        <p>This location at the Bahnhofstrasse is quite friendly
                            and easily located across the street from the train station. 
                            The people there seem to be quite good and helpful in their 
                            service.</p>
                    </div>
                    </ReviewsWrapper>
                    <CommentWrapper className={toggleState === 2 ? " active-content" : "content"}>
                        <h1>Comment</h1>
                        <div className="usercomment">
                        <span>Review 1</span>
                        <p>This location at the Bahnhofstrasse.</p>
                        </div>
                        <div className="usercomment">
                        <span>Review 2</span>
                        <p>This location at the Bahnhofstrasse.</p>
                        </div>
                    </CommentWrapper>
                    <RestaurantWrapper className={toggleState === 3 ? " active-content" : "content"}>
                    <h1>Restaurants</h1>
                    <div className="aboutrestaurant">
                        <span>Läderach Chocolatier</span>
                        <div className="ratingstar">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </div>
                        <p>This location at the Bahnhofstrasse is quite friendly
                            and easily located across the street from the train station. 
                            The people there seem to be quite good and helpful in their 
                            service.</p>
                    </div>
                    <div className="editbutton">
                     <button>Create Restaurant</button>
                    </div>
                    </RestaurantWrapper>
                    <EditProfileWrapper className={toggleState === 4 ? " active-content" : "content"}>
                    <h1>Edit UserProfile</h1>
                    <EditProfileForm/>
                    </EditProfileWrapper>
                    </ContentWrapper>
                    <AboutWrapper>
                     <h2>About Laurent</h2>
                     <span className="detailelement">
                        <h3>Location</h3>
                        <p>Zurich, CH</p>
                     </span>
                     <span className="detailelement">
                        <h3>Luna memeber since</h3>
                        <p>April, 2018</p>
                     </span>
                     <span className="detailelement">
                        <h3>Things I love</h3>
                        <p>Everything</p>
                     </span>
                     <span className="detailelement">
                        <h3>Description</h3>
                        <p>m professional photographer with an eye for details in every thing I do in my live. 
                            Every time a pass by a nice restaurant i have to stop and take notes</p>
                     </span>
                    
                </AboutWrapper>
             </ProfileInnerWrapper>
        </ProfileWrapper>

        <Footer />
        </MainContainer>
        </>
    );
};

export default UserProfile;