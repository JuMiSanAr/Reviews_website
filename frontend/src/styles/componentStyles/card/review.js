import styled from "styled-components";

export const ReviewContainer = styled.div `
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

export const FeaturedComment = styled.div `
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

export const SocialButton = styled.div `
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
        cursor:pointer;
        background: rgba(145, 145, 145, 0.6);
        :hover {
          box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.4);
        }
      
        img{
            width:12px;
            height: 19px;
        }
    }
    .likebutton{
        border-radius: 28px 0px 0px 28px;
        margin-right: 1px;
        img{
            width: 15px;
            height: 15px;
        }
    }
    .commentbutton {
        border-radius: 0px 28px 28px 0px;
        margin-left: 1px;
    }
`;

export const LatestComments = styled.div `
   font-style: normal;
   span{
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
   }
`;

export const CommentUpdates = styled.div `
    margin: 10px 5px 10px 5px;
    font-size: 14px;
    line-height: 16px;
    h5{
        font-weight: bold;
        color: #E47D31;
        margin-bottom: 5px;
        cursor:pointer;
    }
    p{
        font-weight: 300;
    }
`;
