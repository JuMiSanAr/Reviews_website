import { createGlobalStyle } from "styled-components";
import { StarIcon } from "./componentStyles/restaurant/banner";

import emptyStar from '../assets/emptystar.png';
import halfStar from '../assets/halfstar.png';
import fullStar from '../assets/fullstar.png';


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Helvetica','Roboto', 'Arial', 'sans-serif';
    box-sizing: border-box;
    transition: all 0.25s linear;
    }
    body {
        background-color: #f2f2f2;
    }
`;

export const theme = {
    brand: '#E47D31',
};



export const stars = (score) => {
    
    if (score <= 0) return <> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> </>
    if (score > 0 && score < 1) return <> <StarIcon src={halfStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> </>
    if (score === 1) return <> <StarIcon src={fullStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> </>
    if (score > 1 && score < 2) return <> <StarIcon src={fullStar}/> <StarIcon src={halfStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> </>
    if (score === 2) return <> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> </>
    if (score > 2 && score < 3) return <> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={halfStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> </>
    if (score === 3) return <> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={emptyStar}/> <StarIcon src={emptyStar}/> </>
    if (score > 3 && score < 4) return <> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={halfStar}/> <StarIcon src={emptyStar}/> </>
    if (score === 4) return <> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={emptyStar}/> </>
    if (score > 4 && score < 5) return <> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={halfStar}/> </>
    if (score >= 5) return <> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> <StarIcon src={fullStar}/> </>
}