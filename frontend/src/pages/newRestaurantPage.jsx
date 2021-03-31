import Footer from "../components/footer"
import HeaderNavi from "../components/headerNavi"
import { CreatNewRestaurantTitle, MainContainer, NewRestaurantInputFields, NewRestaurantWrapper } from "../styles/pageStyles/newRestaurantStyles"

// THE RELATED CSS YOU'LL FIND IN "newRestaurantStyles.js"


const NewRestaurantPage = () => {
    return (
        <MainContainer>
            <HeaderNavi/>
                <NewRestaurantWrapper>
                    <CreatNewRestaurantTitle>Create New Restaurant<span></span></CreatNewRestaurantTitle>
                        <form>
                        <div>
                        <NewRestaurantInputFields>
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
                            </fieldset>
                        </NewRestaurantInputFields>
                        <NewRestaurantInputFields>
                            <fieldset>
                                <legend> </legend>
                                <label htmlFor="category" className="margin-bottom">Category: <required>* </required></label>
                                <select name="category" id="category-select">
                                    <option value="">Select a value..</option>
                                    <option value="tibetian">Tibetian Cuisine</option>
                                    <option value="spanish">Spanish Cuisine</option>
                                </select>
                                
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
                                <label htmlFor="priceLevel">Price Level: <required>* </required></label>
                                <select name="priceLevel" id="priceLevel-select">
                                    <option value="">Select a value..</option>
                                    <option value="cheap">$ - cheap</option>
                                    <option value="mid-range">$ $ - mid-range</option>
                                    <option value="upper-class">$ $ $ - upper-class</option>
                                </select>
                            </fieldset>
                        </NewRestaurantInputFields>
                        <NewRestaurantInputFields>
                            <fieldset>
                                <legend> </legend>
                                <label htmlFor="country" className="margin-bottom">Country: <required>* </required></label>
                                <select name="country" id="country-select">
                                    <option value="">Select a value..</option>
                                    <option value="Switzerland">Schweiz</option>
                                    <option value="Poland">Polska</option>
                                    <option value="Tibet">Tibet</option>
                                </select>

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

                                <legend> </legend>
                                <label htmlFor="image">Image: <required>* </required></label>
                                <button type="submit">Choose a File..</button>
                            </fieldset>
                        </NewRestaurantInputFields>
                        </div>
                        </form>
                        <button type="submit">Save</button>
                        
                </NewRestaurantWrapper>
            <Footer/>
        </MainContainer>
    )
}

export default NewRestaurantPage;