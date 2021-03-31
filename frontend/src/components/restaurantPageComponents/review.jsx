import React from 'react';
import styled from 'styled-components';


const ReviewContainer = styled.div `
    border: solid 0.1px black;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`
const ReviewHeader = styled.div `
    border: solid 0.1px black;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`

const ReviewCard = (props) => {
    const { reviewerName, numberOfReviewsOfReviewer, score, date,
        content, numberOfReviewLikes, comment } = props.reviews;


    return(
        <ReviewContainer>
            <ReviewHeader>
                
            </ReviewHeader>
        </ReviewContainer>
    );
};

export default ReviewCard;