import React, {useState} from 'react'
import {ButtonWrapper, FormWrapper} from "../../styles/componentStyles/editProfile/profile";
import {userProfileDelete, userProfilePatch} from "../../store/fetches/profile_edit_fetches";
import {getUserInfoAction} from "../../store/actions/usersActions";
import {useDispatch} from "react-redux";
import {LoginWrapper} from "../../styles/pageStyles/loginStyles";


const EditProfileForm = () => {
	 const [ username, setUsername ] = useState('');
	 const [ first_name, setFirst_name ] = useState('');
	 const [ last_name, setLast_name ] = useState('');
	 const [ email, setEmail ] = useState('');
	 const [ location, setLocation ] = useState('');
	 const [ phone, setPhone ] = useState('');
	 const [ things_i_like, setThings_i_like ] = useState('');
	 const [ description, setDescription ] = useState('');

	 // const [errorMessage, setErrorMessage] = useState(false);
     const [saveMessage, setSaveMessage] = useState(false);

	 const dispatch = useDispatch();


	 const editHandler = () => {
		userProfilePatch(username,first_name,
			last_name, email, location, phone,
			things_i_like, description)
			.then(data => {
				 const action = getUserInfoAction(data);
            dispatch(action);
             console.log(data)
			})
			// .catch(() => {
			// 	setErrorMessage(true);
			// })
		 setSaveMessage(true)

    }

    // const deleteHandler = () => {
	//  	userProfileDelete()
	// 		.then(data => {
	// 				 const action = getUserInfoAction(data);
	// 			dispatch(action);
	// 			 console.log(data)
	// 			})
	// }

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
            {/*<span onClick={deleteHandler}>Delete account</span>*/}
        </ButtonWrapper>
			{/*<h3 className="errormessage">{errorMessage ? '** You need to LogIn' : ''}</h3>*/}
			<h3 className="errormessage">{saveMessage ? '** Your changes is saved' : ''}</h3>
        </FormWrapper>
    )
}

export default EditProfileForm;
