import styled from "styled-components";



export const MainContainer = styled.div `
min-height: 100vh;
width: 100%;
`;

export const LoginWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-top: 5px;
align-items: center;
background: #F2F2F2;
min-height: 92vh;

    button {
        background-color: #E47D31;
        padding: 15px 30px;
        width: 200px;
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

export const InputField = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 60px 0 20px 0;
    
    input {
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
`

export const LoginTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
text-align: center;
margin-top: 50px;
color: black;
width: 357px;
height: 46px;
    span{ 
        margin-top: 10px;
        width: 100px;
        height: 100px;
        background-color: #E47D31;
    }
`;

