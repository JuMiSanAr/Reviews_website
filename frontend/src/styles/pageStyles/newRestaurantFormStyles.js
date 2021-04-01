import styled from 'styled-components';

export const MainContainer = styled.div`
    min-height: 100vh;
    width: 100%;
`

export const NewRestaurantWrapper = styled.div` 
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 25px;
    margin-left: 5%;
    background: #f2f2f2;
    min-height: 100vh;

        div {
            display: flex;
        }

        .button_save {
            background-color: #E47D31;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 15px 30px;
            width: 259px;
            height: 56px;
            align-self: center;
            border-radius: 28px;
            color: #fff;
            border: none;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s;

            :hover {
                box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.4);
                transform: scale(1.05) translateY(-5px);
        }
    }
`


export const CreatNewRestaurantTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-size: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 50px;
    color: black;
    height: 46px;
        span{
            margin-top: 10px;
            width: 200px;
            height: 100px;
            background-color: #E47D31;
        }
`
// export const NewRestaurantInputFields = styled.div`
//     display: flex;
//     justify-content: center;
//     /* align-items: center; */
//     flex-direction: column;
//     margin: 20px 10px 10px 0;

//         input, select {
//             font-size: 20px;
//             font-style: normal;
//             font-weight: 700;
//             line-height: 23px;
//             letter-spacing: 0px;
//             text-align: left;
//             padding: 10px;
//             margin: 10px;
//             width: 340px;
//             height: 52px;
//             border: none;
//             outline: none;
//             margin-bottom: 5em;

//             ::placeholder {
//                 font-size: 1rem;
//             }
//         }

//         fieldset {
//             display: flex;
//             flex-direction: row;
//             /* border: none; */
//         }

//         legend {
//             font: bold;
//             /* margin-bottom: 10em; */
//             margin-bottom: 1em;
//         }

//         required {
//             color: red;
//             font-size: 1.1em;
//         }
        
//         label {
//             display: block;
//             height: 100%;
//         }

// `
// @@@@@@@@@@@@@@ NEW TRY WITH CSS: @@@@@@@@@@@@@@ 

export const FieldsetTitle = styled.p`
    font-weight: bold;
    
`

export const FormRows = styled.div`
    display: flex;
    /* border: solid; */
    margin-top: 15px;
    margin-bottom: 25px;
`
const LabelField = styled.p`
    margin-bottom: -15px;
`

export const LabelLeft = styled(LabelField)`
    margin-left: 10px;
`
export const LabelCenter = styled(LabelField)`
    margin-right: 290px;
    margin-left: 315px;
`
export const LabelRight = styled(LabelField)`

`
export const LabelCenterSecondRow = styled(LabelField)`
    margin-right: 330px;
    margin-left: 315px;
`
export const LabelCenterThirdRow = styled(LabelField)`
    margin-right: 310px;
    margin-left: 300px;
`

export const LabelCenterFourthRow = styled(LabelField)`
    margin-right: 275px;
    margin-left: 255px;
`

export const InputOpeningHours = styled.div`
    display: block;
    justify-content: space-evenly;

    select {
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: left;
            padding-left: 5px;
            margin: 10px;
            width: 70px;
            height: 52px;
            border: none;
            outline: none;
            cursor: pointer;

            ::placeholder {
                font-size: 1rem;
            }
        }

`


export const InputFields = styled.div`
    display: block;
    justify-content: space-evenly;

    input, select {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: left;
            padding: 10px;
            margin: 10px;
            width: 340px;
            height: 52px;
            border: none;
            outline: none;

            ::placeholder {
                font-size: 1rem;
            }
        }
    select {
            cursor: pointer;
    }

`

const RequiredField = styled.p`
    margin-top: -20px;
    color: red;
    font-size: 12px;
`

export const RequiredLeft = styled(RequiredField)`
    margin-right: 254px;
    margin-left: 10px;

`
export const RequiredCenter = styled(RequiredField)`
    margin-right: 252px;

`

export const RequiredPhone = styled(RequiredField)`
    margin-left: 375px;

`

export const RequiredRight = styled(RequiredField)`

`

export const InputButtonStyle = styled.input`
    type: file;
    
`