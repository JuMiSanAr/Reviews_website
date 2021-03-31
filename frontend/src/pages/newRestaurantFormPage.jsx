import styled from "styled-components"
import Footer from "../components/footer"
import HeaderNavi from "../components/headerNavi"
import FileUploader from "../components/helper/fileUpLoader"
import { CreatNewRestaurantTitle, FieldsetTitle, FormRows, InputFields, LabelCenter, LabelLeft, LabelRight, 
    MainContainer, NewRestaurantWrapper, RequiredLeft, RequiredCenter, RequiredRight, LabelCenterSecondRow, LabelCenterThirdRow, LabelCenterFourthRow, InputButtonStyle } from "../styles/pageStyles/newRestaurantFormStyles"

// THE RELATED CSS YOU'LL FIND IN "newRestaurantStyles.js"


const NewRestaurantFormPage = () => {
    return (
        <MainContainer>
            <HeaderNavi/>
                <NewRestaurantWrapper>
                    <CreatNewRestaurantTitle>Create New Restaurant<span></span></CreatNewRestaurantTitle>
                        <form>

                            <FieldsetTitle className='p'>Basic</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Name:</LabelLeft>
                                <LabelCenter>Category:</LabelCenter>
                                <LabelRight>Country:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                                <InputFields>
                                    <select name="category" id="category-select">
                                        <option value="">Select a value..</option>
                                        <option value="tibetian">Tibetian Cuisine</option>
                                        <option value="spanish">Spanish Cuisine</option>
                                    </select>
                                </InputFields>
                                <InputFields>
                                    <select name="country" id="country-select">
                                        <option value="">Select a value..</option>
                                        <option value="Switzerland">Schweiz</option>
                                        <option value="Poland">Polska</option>
                                        <option value="Tibet">Tibet</option>
                                    </select>
                                </InputFields>
                            </FormRows>
                            <FormRows>
                                <RequiredLeft>This field is required</RequiredLeft>
                                <RequiredCenter>This field is required</RequiredCenter>
                                <RequiredRight>This field is required</RequiredRight>
                            </FormRows>

                            <FieldsetTitle className='p'>Address</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Street:</LabelLeft>
                                <LabelCenterSecondRow>City:</LabelCenterSecondRow>
                                <LabelRight>Zip:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                            </FormRows>
                            <FormRows>
                                <RequiredLeft>This field is required</RequiredLeft>
                                <RequiredCenter>This field is required</RequiredCenter>
                                <RequiredRight>This field is required</RequiredRight>
                            </FormRows>

                            <FieldsetTitle className='p'>Contact</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Website:</LabelLeft>
                                <LabelCenterThirdRow>Phone:</LabelCenterThirdRow>
                                <LabelRight>Email:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                            </FormRows>
                            <FormRows>
                                <RequiredLeft>This field is required</RequiredLeft>
                                <RequiredCenter>This field is required</RequiredCenter>
                                <RequiredRight>This field is required</RequiredRight>
                            </FormRows>

                            <FieldsetTitle className='p'>Details</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Opening hours:</LabelLeft>
                                <LabelCenterFourthRow>Price Level:</LabelCenterFourthRow>
                                <LabelRight>Image:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required
                                    />
                                </InputFields>
                                <InputFields>
                                    <select name="priceLevel" id="priceLevel-select">
                                        <option value="">Select a value..</option>
                                        <option value="cheap">$ - cheap</option>
                                        <option value="mid-range">$ $ - mid-range</option>
                                        <option value="upper-class">$ $ $ - upper-class</option>
                                    </select>
                                </InputFields>
                                <InputFields>
                                    <FileUploader/>

                    
                                </InputFields>
                            </FormRows>
                            <FormRows>
                                <RequiredLeft>This field is required</RequiredLeft>
                                <RequiredCenter>This field is required</RequiredCenter>
                                <RequiredRight>This field is required</RequiredRight>
                            </FormRows>





                        </form>
                        <button type="submit">Save</button>
                        
                </NewRestaurantWrapper>
            <Footer/>
        </MainContainer>
    )
}

export default NewRestaurantFormPage;


// ------------------------- BACKUP FILES:

{/* <NewRestaurantInputFields>
                            <fieldset>
                                <legend>Basic</legend>
                                <label htmlFor="name">Name: <required>*</required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='name'
                                    type='text'
                                    placeholder=''
                                />
                                <legend> </legend>
                                <label htmlFor="category" className="margin-bottom">Category: <required>* </required></label>
                                <select name="category" id="category-select">
                                    <option value="">Select a value..</option>
                                    <option value="tibetian">Tibetian Cuisine</option>
                                    <option value="spanish">Spanish Cuisine</option>
                                </select>
                                
                                <legend> </legend>
                                <label htmlFor="country" className="margin-bottom">Country: <required>* </required></label>
                                <select name="country" id="country-select">
                                    <option value="">Select a value..</option>
                                    <option value="Switzerland">Schweiz</option>
                                    <option value="Poland">Polska</option>
                                    <option value="Tibet">Tibet</option>
                                </select>
                                
                                
                            </fieldset>
                        </NewRestaurantInputFields>
                        <NewRestaurantInputFields>
                            <fieldset>
                                <legend>Address</legend>
                                <label htmlFor="street">Street: <required>* </required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='name'
                                    type='text'
                                    placeholder=''
                                />
                                
                                
                                <legend> </legend>
                                <label htmlFor="city">City: <required>* </required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='name'
                                    type='text'
                                    placeholder=''
                                />
                                
                                <legend> </legend>
                                <label htmlFor="zip" className="margin-bottom">Zip: <required>* </required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='name'
                                    type='text'
                                    placeholder=''
                                />
                                
                            </fieldset>
                        </NewRestaurantInputFields>
                        <NewRestaurantInputFields>
                            <fieldset>
                                <legend>Contact</legend>
                                <label htmlFor="website">Website: <required>* </required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='name'
                                    type='text'
                                    placeholder=''
                                />

                                <legend> </legend>
                                <label htmlFor="phone">Phone: <required>* </required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='phone'
                                    type='text'
                                    placeholder=''
                                />
                                

                                
                                
                                <legend> </legend>
                                <label htmlFor="email">Email: <required>* </required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='email'
                                    type='text'
                                    placeholder=''
                                />

                                
                            </fieldset>
                        </NewRestaurantInputFields>

                        <NewRestaurantInputFields>
                            <fieldset>
                                <legend>Details</legend>
                                <label htmlFor="openingHours">Opening hours: <required>* </required></label>
                                <input
                                    required
                                    // onChange={}
                                    // value={}
                                    name='name'
                                    type='text'
                                    placeholder=''
                                />
                                <legend> </legend>
                                <label htmlFor="priceLevel">Price Level: <required>* </required></label>
                                <select name="priceLevel" id="priceLevel-select">
                                    <option value="">Select a value..</option>
                                    <option value="cheap">$ - cheap</option>
                                    <option value="mid-range">$ $ - mid-range</option>
                                    <option value="upper-class">$ $ $ - upper-class</option>
                                </select>

                                <legend> </legend>
                                <label htmlFor="image">Image: <required>* </required></label>
                                <button type="submit">Choose a File..</button>


                            </fieldset>


                        </NewRestaurantInputFields> */}