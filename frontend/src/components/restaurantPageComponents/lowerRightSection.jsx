import React from 'react';

import { Icon, LowerRightRow, LowerRightSection, OpeningHours, 
    PriceLevel, RightSideButton } from '../../styles/componentStyles/restaurant/lowerRightSection';


import clock from '../../assets/clock.svg';
import money from '../../assets/money.svg';



const RightSection = (props) => {
    const { opening_hours_from, opening_hours_to, price_level, owner} = props.restaurant_data.data
    console.log(owner)

    const writeReviewHandler = (event) => {
        console.log(event);
    }
    const editDataHandler = (event) => {
        console.log(event);
    }

    const priceLevel = (price) => {
        if(price < 2) return '$';
        if(price === 2) return '$$';
        if(price > 2) return '$$$';
    }

    return(
        <LowerRightSection>
            <LowerRightRow>
                <OpeningHours><Icon src={clock}/>{opening_hours_from} - {opening_hours_to}</OpeningHours>
            </LowerRightRow>
            <LowerRightRow>
                <PriceLevel><Icon src={money}/>Price level: {priceLevel(Number(price_level))}</PriceLevel>
            </LowerRightRow>
            <LowerRightRow>
                <RightSideButton onClick={ (event) => writeReviewHandler(event)}>WRITE A REVIEW</RightSideButton>
                {/* {
                    user_id !== owner.id ? '' : <RightSideButton onClick={ (event) => editDataHandler(event)}>EDIT DATA</RightSideButton> 
                } */}
                <RightSideButton onClick={ (event) => editDataHandler(event)}>EDIT DATA</RightSideButton>
            </LowerRightRow>
        </LowerRightSection>
    );
};
export default RightSection;
