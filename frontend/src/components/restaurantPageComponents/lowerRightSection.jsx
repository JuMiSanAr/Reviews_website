import React from 'react';
import { useHistory } from 'react-router';

import { Icon, LowerRightRow, LowerRightSection, OpeningHours, 
    PriceLevel, RightSideButton } from '../../styles/componentStyles/restaurant/lowerRightSection';


import clock from '../../assets/clock.svg';
import money from '../../assets/money.svg';



const RightSection = (props) => {
    const history = useHistory();
    const { opening_hours, price_level/*, owner */} = props.restaurant_data
    // console.log(owner)


    const writeReviewHandler = () => {
        
        history.push("/newReview");
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
                <OpeningHours><Icon src={clock}/>{opening_hours}</OpeningHours>
            </LowerRightRow>
            <LowerRightRow>
                <PriceLevel><Icon src={money}/>Price level: {priceLevel(Number(price_level))}</PriceLevel>
            </LowerRightRow>
            <LowerRightRow>
                <RightSideButton onClick={writeReviewHandler}>WRITE A REVIEW</RightSideButton>
                {/* {
                    user_id !== owner.id ? '' : <RightSideButton onClick={ (event) => editDataHandler(event)}>EDIT DATA</RightSideButton> 
                } */}
                <RightSideButton onClick={ (event) => editDataHandler(event)}>EDIT DATA</RightSideButton>
            </LowerRightRow>
        </LowerRightSection>
    );
};
export default RightSection;
