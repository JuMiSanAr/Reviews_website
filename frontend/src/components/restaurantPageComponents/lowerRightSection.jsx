import React from 'react';

import { Icon, LowerRightRow, LowerRightSection, OpeningHours, 
    PriceLevel, RightSideButton } from '../../styles/componentStyles/restaurant/lowerRightSection';


import clock from '../../assets/clock.svg';
import money from '../../assets/money.svg';



const RightSection = (props) => {
    const { openingHours, priceLevel } = props.restaurant
    const writeReviewHandler = (event) => {
        console.log(event);
    }
    const editDataHandler = (event) => {
        console.log(event);
    }

    return(
        <LowerRightSection>
            <LowerRightRow>
                <OpeningHours><Icon src={clock}/>{openingHours}</OpeningHours>
            </LowerRightRow>
            <LowerRightRow>
                <PriceLevel><Icon src={money}/>Price level: {priceLevel}</PriceLevel>
            </LowerRightRow>
            <LowerRightRow>
                <RightSideButton onClick={ (event) => writeReviewHandler(event)}>WRITE A REVIEW</RightSideButton>
                <RightSideButton onClick={ (event) => editDataHandler(event)}>EDIT DATA</RightSideButton>
            </LowerRightRow>
        </LowerRightSection>
    );
};
export default RightSection;
