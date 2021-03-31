import React, { useState } from 'react';

import styled from 'styled-components';

import { OrangeButton } from '../../styles/componentStyles/restaurant/lowerRightSection';
import ReviewCard from './reviewCard';


export const LowerLeftSection = styled.div `
    display: flex;
    flex-direction:column;
    background-color: #f5f5f5;
    width: 55vw;
    padding-top: 0.75em;
    padding-left: 5em;
`
export const FilterRow = styled.div `
    display: flex;
    flex-direction: row;
`
export const FilterInput = styled.input `
    border: solid 0.0125em lightgray;
    margin-right: 1.25em;
    width: 90%;
    padding-top: 0.25em;
    padding-left: 0.75em;
    color: gray;
    font-weight: bolder;
`

export const FilterButton = styled(OrangeButton)`
    padding: 0.775em;
    width: 7em;
    height: 2.5em;
`
const LeftSection = (props) => {
    const [ filter, setFilter ] = useState('');

    const filterHandler = () => {
        console.log(filter);
    }

    

    return(
        <LowerLeftSection>
            <FilterRow>
            <FilterInput 
                type='text'  
                placeholder='Filter list...'
                value={ filter }
                onChange={ event => setFilter(event.target.value) }
                onKeyUp={ event => event.key === 'Enter' ? filterHandler() : ''}
            />
            <FilterButton onClick={ () => filterHandler() }>FILTER</FilterButton>
            </FilterRow>
            {
                !props.reviews.length ? '' : props.reviews.map((review, index) =><ReviewCard key={index} review={review} /> )  
            }
            
        </LowerLeftSection>
    );
};
export default LeftSection;


