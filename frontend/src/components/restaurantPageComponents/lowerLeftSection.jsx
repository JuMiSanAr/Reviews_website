import React, { useState } from 'react';
// ================ styled components =========
import { FilterButton, FilterInput, FilterRow, 
    LowerLeftSection } from '../../styles/componentStyles/restaurant/lowerLeftSection';
// ============================================
// ================ components ================
import ReviewCard from './reviewCard';
// ============================================

const LeftSection = (props) => {
    const [ filter, setFilter ] = useState('');

    const filterHandler = () => {
        console.log(filter);
    }
    console.log('from lower left section: ',props)

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
                !props.restaurant_reviews.length ? '' 
                : props.restaurant_reviews.map((review, index) =>
                    <ReviewCard key={index} review={review} /> )  
            }
        </LowerLeftSection>
    );
};
export default LeftSection;
