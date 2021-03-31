import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    min-height: 100vh;
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

const ButtonWrapper = styled.div`
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


const EditProfileForm = () => {


    return (
        <FormWrapper>

        <div className="form-group">
			<label>username</label>
			<input name="user_name" type="text"/>
		</div>

		<div className="form-group">
			<label>First name</label>
			<input name="first_name" type="text"/>
		</div>

		<div className="form-group">
			<label>Last name</label>
			<input name="last_name" type="text"/>
		</div>

		<div className="form-group">
			<label>Email</label>
			<input name="email" type="text"/>
		</div>

		<div className="form-group">
			<label>Location</label>
            <input name="location" type="text"/>
			
		</div>

		<div className="form-group">
			<label>Phone</label>
			<input name="phone" type="text"/>
		</div>

		<div className="form-group">
			<label>Things i love</label>
            <textarea></textarea>
		</div>

		<div className="form-group">
			<label>Description</label>
            <textarea></textarea>	
		</div> 
        <ButtonWrapper>
            <button type="submit">Save</button>
            <span>Delete account</span>
        </ButtonWrapper>
        </FormWrapper>
    )
}

export default EditProfileForm;
