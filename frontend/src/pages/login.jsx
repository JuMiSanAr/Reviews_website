import React from 'react';
import styled from 'styled-components';


// ######################### Styling  ################################


const MainContainer = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    background: #F2F2F2;

    button {
        background-color: orange;
        padding: 15px 30px;
        width: 200px;
        align-self: center;
        border-radius: 100px;
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

    .inputField {
        width: 50%;
        height: 40vh;
        display: flex;
        flex-direction: column;
        
        .inputContainer {
            display: flex;
            align-items: center;
            border-bottom: 1.5px solid #e5e5e5;
            padding: 10px 0;
            margin-bottom: 80px;
        }   
        #passwordContainer {
            margin-bottom: 80px;
            margin-top: 20px;
        }
        img {
            height: 25px;
            width: 25px;
            margin-right: 15px;
        }
        input {
            padding: 10px;
            border: none;
            outline: none;
            font-size: 1rem;
            ::placeholder {
                font-size: 1rem;
        }
    }
    }
`;

const LoginTitle = styled.div`
  margin-bottom: 20px;
  font-size: 40px;
  text-align: center;
  color: black;
  font-family: Roboto, sans-serif;
  /* position: absolute; */
  width: 357px;
  height: 46px;
  left: 540px;
  top: 120px;
`;



//############################# Component ################################

const LoginPage = () => {
    return (
        <>
        <MainContainer>
            <LoginTitle>LOGIN</LoginTitle>
            <inputField>
                <div className='inputContainer' style={{marginBottom:'1em'}}>
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='username'
                        type='text'
                        placeholder='Username'
                        style={{height:'2em',border:'none'}}
                    />
                </div>
                <br></br>
                <div className='inputContainer' id='passwordContainer'>
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                </div>

            </inputField>

            <button type='submit'>Login</button>
        </MainContainer>            
        </>
    )
}

export default LoginPage;