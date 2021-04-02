import React, {useState} from 'react'
import {ButtonWrapper, FormWrapper} from "../../styles/componentStyles/editProfile/profile";
import loginFetch from "../../store/fetches/login_fetches";
import {loginAction} from "../../store/actions/loginActions";
import {getLoggedInUserInfoFetch} from "../../store/fetches/users_fetches";
import {getUserInfoAction} from "../../store/actions/usersActions";
import {userProfilePatch} from "../../store/fetches/profile_edit_fetches";


const EditProfileForm = () => {
	 const [ username, setUsername ] = useState('');
	 const [ first_name, setFirst_name ] = useState('');
	 const [ last_name, setLast_name ] = useState('');
	 const [ email, setEmail ] = useState('');
	 const [ location, setLocation ] = useState('');
	  const [ phone, setPhone ] = useState('');
	 const [ things_i_like, setThings_i_like ] = useState('');
	 const [ description, setDescription ] = useState('');

	 const editHandler = () => {
		userProfilePatch(username,first_name,
			last_name, email, location, phone,
			things_i_like, description)
			.then()
    }


    return (
        <FormWrapper>

        <div className="form-group">
			<label>username</label>
			<input name="user_name" type="text" value={username} onChange={event => setUsername(event.target.value)}/>
		</div>

		<div className="form-group">
			<label>First name</label>
			<input name="first_name" type="text" value={first_name} onChange={event => setFirst_name(event.target.value)}/>
		</div>

		<div className="form-group">
			<label>Last name</label>
			<input name="last_name" type="text" value={last_name} onChange={event => setLast_name(event.target.value)}/>
		</div>

		<div className="form-group">
			<label>Email</label>
			<input name="email" type="text" value={email} onChange={event => setEmail(event.target.value)}/>
		</div>

		<div className="form-group">
			<label>Location</label>
            <input name="location" type="text" value={location} onChange={event => setLocation(event.target.value)}/>
			
		</div>

		<div className="form-group">
			<label>Phone</label>
			<input name="phone" type="text" value={phone} onChange={event => setPhone(event.target.value)}/>
		</div>

		<div className="form-group">
			<label>Things i love</label>
            <textarea value={things_i_like} onChange={event => setThings_i_like(event.target.value)}/>
		</div>

		<div className="form-group">
			<label>Description</label>
            <textarea value={description} onChange={event => setDescription(event.target.value)}/>
		</div> 
        <ButtonWrapper>
            <button type="submit"  onClick={editHandler}>Save</button>
            <span>Delete account</span>
        </ButtonWrapper>
        </FormWrapper>
    )
}

export default EditProfileForm;
