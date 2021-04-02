import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { stars } from '../../styles';
import like from '../../assets/like.svg';

import { CancelButton, CommentButton, CommentContent, CommentDate, CommentHeader, CommentInput, 
    CommentInputRow, FooterLeft, FooterRight, LikeIcon, LikesButton, NumOfReviews, PostButton, 
    ReviewBody, ReviewCardContainer, ReviewCardHeader, ReviewCommentContainer, ReviewCommentRow, 
    ReviewContent, ReviewDate, ReviewDateSection, ReviewerDetails, ReviewerImage, ReviewerName, 
    ReviewFooter, Score, ViewCommentsButton } from '../../styles/componentStyles/restaurant/reviewCard';
import { likeOrUnlikeReviewFetch } from '../../store/fetches/review_fetches';
import { passRestaurantData } from '../../store/actions/restaurantActions';
import { useHistory } from 'react-router';



const avatarIfAuthorDoesNotHaveOne = 'https://res.cloudinary.com/tennam/image/upload/v1613260389/Propulsion/Tenzin.png';



const ReviewCard = (props) => {
    const history = useHistory();

    const dispatch = useDispatch()
    const { author, comments, liked_by, modified, rating, text_content } = props.review;

    const likeHandler = (event) => {
        // event.preventDefault();
        // likeOrUnlikeReviewFetch(props.review.id)
        // .then(data => {
        //     const action = passRestaurantData(data)
        //     dispatch(action)
        // }) 

    };

    const [ showCommentInput, setShowCommentInput ] = useState(false);
    
    const showCommentInputHandler = () => { setShowCommentInput(!showCommentInput) };

    const [ newComment, setNewComment ] = useState('');
    const postCommentHandler = () => {
        console.log(newComment);
    }

    const [ showAllComments, setShowAllComments ] = useState(false);
    const showAllCommentHandler = () => { setShowAllComments(!showAllComments) };


    return(
        <ReviewCardContainer>
            <ReviewCardHeader>
                <ReviewerImage src={ author.avatar ? author.avatar : avatarIfAuthorDoesNotHaveOne} />
                <ReviewerDetails>
                    <ReviewerName>{!author ?  'Loading..' : author.username}</ReviewerName>
                    <NumOfReviews>4 Reviews in total</NumOfReviews>
                    {/* {
                        numberOfReviewsOfReviewer === 1 ? <NumOfReviews> 1 Review in total</NumOfReviews>
                        : <NumOfReviews>{numberOfReviewsOfReviewer} Reviews in total</NumOfReviews>
                    } */}
                </ReviewerDetails>
                <Score>{stars(rating)}</Score>
                <ReviewDateSection>
                    <ReviewDate>{modified}</ReviewDate>
                </ReviewDateSection>
            </ReviewCardHeader>
                <ReviewBody>
                    <ReviewContent>{ text_content }</ReviewContent>
                    <ReviewFooter>
                        <FooterLeft>
                            {
                                !showCommentInput ? 
                                    <>
                                    <LikesButton onClick={ (event) => likeHandler(event) }><LikeIcon src={ like }/>Like { liked_by.length }</LikesButton>
                                    <CommentButton onClick={ showCommentInputHandler }>Comment { comments.length }</CommentButton>
                                    </>
                                    :   <>
                                            <CommentInputRow>
                                                <CommentInput
                                                    type='text'  
                                                    placeholder='Add comment...'
                                                    value={ newComment }
                                                    onChange={ event => setNewComment(event.target.value) }
                                                    onKeyUp={ event => event.key === 'Enter' ? postCommentHandler() : ''}
                                                />
                                                <PostButton onClick={ postCommentHandler }>POST</PostButton>
                                                <CancelButton onClick={ showCommentInputHandler }>BACK</CancelButton>
                                            </CommentInputRow>
                                        </>
                            }

                        </FooterLeft>
                        <FooterRight>
                            {
                                !showAllComments ?  <ViewCommentsButton onClick={ showAllCommentHandler }>View all comments</ViewCommentsButton>
                                : <ViewCommentsButton onClick={ showAllCommentHandler }>Hide</ViewCommentsButton>
                            }
                        </FooterRight>
                    </ReviewFooter>
                        {
                            !showAllComments ? '' : comments.map((comment, index) => 
                                <ReviewCommentContainer key={index}>
                                    <ReviewCommentRow>
                                        <CommentHeader>{comment.commented_by.username}</CommentHeader>
                                        <CommentDate>Yesterday</CommentDate>
                                    </ReviewCommentRow>
                                    <ReviewCommentRow>
                                        <CommentContent>{comment.comment_content}</CommentContent>
                                    </ReviewCommentRow>
                                </ReviewCommentContainer>)
                        }
                </ReviewBody>


        </ReviewCardContainer>
    );
};

export default ReviewCard;