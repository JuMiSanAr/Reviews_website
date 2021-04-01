import styled from 'styled-components';


export const ReviewCardContainer = styled.div `
    margin-top: 1.25em;
    width: 100%;
    min-height: 15vh;
    display: flex;
    flex-direction: column;
    background-color: white;
`
export const ReviewCardHeader = styled.div `
    border-bottom: solid 0.05px #f5f5f5;
    height: 4em;
    width: 100%;
    display: flex;
    flex-direction: row;
`
export const ReviewerImage = styled.img `
    height: 4em;
    width: 4em;
`
export const ReviewerDetails = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 9.5em;
    padding: 0.5em;
`
export const ReviewerName = styled.p `
    color: #E47D31;
    font-size: 1.25em;
    font-weight: bolder;
    margin-bottom: 0.25em;
`
export const NumOfReviews = styled.p `
    font-size: 0.85em;
    font-weight: bolder;
`
export const Score = styled.div `
    size: 1.5em;
    margin-top: 0.5em;
    align-self: center;
`
export const ReviewDateSection = styled.div`
    width: 40%;
    display: flex;
    justify-content: end;
    padding-top:0.75em;
    margin-left: 2.65em;
`
export const ReviewDate = styled.div`
    font-size: 0.7em;
    font-weight: lighter;
`

export const ReviewBody = styled.div `
    padding: 0.5em;
`

export const ReviewContent = styled.p `
    padding: 0.75em;
    font-weight: lighter;
`
export const ReviewFooter = styled.div `
    width: 100%;
    height: 2.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const FooterLeft = styled.div `
    justify-self: start;
    align-self: center;

`

export const FooterRight = styled.div `
    justify-content: end;
    align-self: center;
`

export const StyledLikesAndCommentsButton = styled.button`
    cursor: pointer;
    margin-left: 0.05em;
    font-size: 0.75em;
    width: 9em;
    height: 2.5em;
    border: none;
    background-color: lightgray;
    color: white;
    padding:0.75em;

    :hover{
        font-Weight: bolder;
        background-color: gray;
    }
`
export const LikesButton = styled(StyledLikesAndCommentsButton)`
    border-radius: 40px 0px 0px 40px;

    align-content: center;
    margin-right: 0.075em;
`
export const LikeIcon = styled.img `
    height: 1.5em;
    filter: invert();
    margin: -0.7em 0.5em -0.45em 0;
`

export const CommentButton = styled(StyledLikesAndCommentsButton)`
    border-radius: 0px 40px 40px 0px;
    margin-left: 0.075em;
`

export const CommentInputRow = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const CommentInput = styled.input `
    border: solid 0.0125em lightgray;
    margin-right: 1em;
    width: 90%;
    padding-top: 0.25em;
    padding-left: 0.75em;
    color: gray;
    font-weight: bolder;
`
export const StyledPostOrCancelButton = styled.button`
    cursor: pointer;
    background-color: #E47D31;
    align-content: center;
    font-size: 0.75em;
    padding: 0.5em;
    width: 7em;
    height: 2em;
    border: none;
    color: white;
    :hover{
        font-Weight: bolder;
    }
`
export const PostButton = styled(StyledPostOrCancelButton)`
    border-radius: 40px 0px 0px 40px;
    margin-right: 0.075em;
`

export const CancelButton = styled(StyledPostOrCancelButton)`
    border-radius: 0px 40px 40px 0px;
    margin-left: 0.075em;
`

export const ViewCommentsButton = styled.button `
    color: #E47D31;
    background-color: white;
    border: none;
    cursor: pointer;
    :hover{
        font-Weight: bolder;
    }
`

export const ReviewCommentContainer = styled.div `
    display: flex;
    flex-direction: column;
`
export const ReviewCommentRow = styled.div `
    padding: 0.25em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const CommentHeader = styled.p `
    font-weight: bolder;
    color: #E47D31;
    font-size:16px;
`
export const CommentDate = styled.p `
    font-size: 12px;
`

export const CommentContent = styled.p `
    font-size: 14px;
`