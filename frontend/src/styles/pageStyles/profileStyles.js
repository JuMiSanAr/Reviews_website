import styled from "styled-components";

export const MainContainer = styled.div`
    min-height: 100vh;
`;

export const ProfileBanner = styled.div `
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

export const ProfileWrapper = styled.div`
    min-height: 75vh;
    max-width: 85vw;
    margin: auto;
    display: flex;
    justify-content:center;
`;

export const ProfileInnerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    .ratingstar{
            display: flex;
            width: 27px;
            height: 27px;
            margin: 10px 0 10px 0;
        }
`;

export const UserProfileWrapper = styled.div`
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
        cursor: pointer;
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

export const ContentWrapper = styled.div`
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

export const ReviewsWrapper = styled.div`

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

export const CommentWrapper = styled.div`
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

export const RestaurantWrapper = styled.div`
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

export const EditProfileWrapper = styled.div`
    h1{
        margin-bottom: 10px;
        text-transform: uppercase;
    }
`

export const AboutWrapper = styled.div`
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