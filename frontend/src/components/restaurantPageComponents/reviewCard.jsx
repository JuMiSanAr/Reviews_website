import React, { useState } from 'react';

import { stars } from '../../styles';
import like from '../../assets/like.svg';

import { CancelButton, CommentButton, CommentInput, CommentInputRow, FooterLeft, FooterRight, 
    LikeIcon, LikesButton, NumOfReviews, PostButton, ReviewBody, ReviewCardContainer, 
    ReviewCardHeader, ReviewContent, ReviewDate, ReviewDateSection, ReviewerDetails, ReviewerImage, 
    ReviewerName, ReviewFooter, Score, ViewCommentsButton
} from '../../styles/componentStyles/restaurant/reviewCard';


import styled from 'styled-components';


const ReviewCommentContainer = styled.div `

`


const ReviewCard = (props) => {
    const { reviewerName, reviewerImage, numberOfReviewsOfReviewer, score, date,
        content, numberOfReviewLikes, comments } = props.review;
        
  

        const likeHandler = () => {
            console.log('liked');
        };

        const [ showCommentInput, setShowCommentInput ] = useState(false);
        
        const showCommentInputHandler = () => {
            setShowCommentInput(!showCommentInput);
        };

        const [ newComment, setNewComment ] = useState('');
        const postCommentHandler = () => {
            console.log(newComment);
        }

        const [ showAllComments, setShowAllComments ] = useState(false);
        const showAllCommentHandler = () => {
            setShowAllComments(!showAllComments);
        };

    
    return(
        <ReviewCardContainer>
            <ReviewCardHeader>
                <ReviewerImage src={reviewerImage} />
                <ReviewerDetails>
                    <ReviewerName>{reviewerName}</ReviewerName>
                    {
                        numberOfReviewsOfReviewer === 1 ? <NumOfReviews> 1 Review in total</NumOfReviews>
                        : <NumOfReviews>{numberOfReviewsOfReviewer} Reviews in total</NumOfReviews>
                    }
                </ReviewerDetails>
                <Score>{stars(score)}</Score>
                <ReviewDateSection>
                    <ReviewDate>{date}</ReviewDate>
                </ReviewDateSection>
            </ReviewCardHeader>
                <ReviewBody>
                    <ReviewContent>{ content }</ReviewContent>
                    <ReviewFooter>
                        <FooterLeft>
                            {
                                !showCommentInput ? 
                                    <>
                                    <LikesButton onClick={ likeHandler }><LikeIcon src={ like }/>Like { numberOfReviewLikes }</LikesButton>
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
                                // !showAllComments ? '' : comments.map((comment, index) =>  <ReviewCommentContainerkey={index}> </ReviewCommentContainer>)
                            }
                </ReviewBody>


        </ReviewCardContainer>
    );
};

export default ReviewCard;