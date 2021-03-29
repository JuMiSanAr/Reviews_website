import React from 'react'
// import star from '../../../assets/star.svg'
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 271px;
    height: 410px;
    box-sizing: border-box;
    margin-bottom: 100px;
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


const CardReview = () => {
    return (
        <Container>
            <CardWrapper>
                <h1>Under Maintainence</h1>
            </CardWrapper>
        </Container>
    )
}

export default CardReview;
