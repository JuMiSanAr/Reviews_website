import styled from "styled-components";

export const FormWrapper = styled.div`
    min-height: 100vh;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // .errormessage{
    //    padding: 5px;
    //    margin-top: 5px;
    //    color: red;
    // }
    .form-group{
        display: flex;
        flex-direction: column;
    input{
        width: 300px;
        height: 52px;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        outline: none;
        margin: 10px 0 20px 0;
        padding: 10px;
        /* margin-bottom: 50px; */
    }
    textarea{
        width: 300px;
        height: 52px;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        outline: none;
        margin: 10px 0 20px 0;
        padding: 10px;
    }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        width: 200px;
        height: 56px;
        background: #E47D31;
        border-radius: 28px;
        border-style:none;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        outline:none;
    }
    span{
        color:#BA0000;
    }
`;