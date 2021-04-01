import Footer from "../components/footer"
import HeaderNavi from "../components/headerNavi"
import FileUploader from "../components/helper/fileUpLoader"
import {
    CreatNewRestaurantTitle,
    FieldsetTitle,
    FormRows,
    InputFields,
    LabelCenter,
    LabelLeft,
    LabelRight,
    MainContainer,
    NewRestaurantWrapper,
    RequiredLeft,
    RequiredCenter,
    RequiredRight,
    LabelCenterSecondRow,
    LabelCenterThirdRow,
    LabelCenterFourthRow,
    InputButtonStyle,
    InputOpeningHours, RequiredPhone
} from "../styles/pageStyles/newRestaurantFormStyles"
import {useEffect, useState} from "react";
import categoriesFetch from "../store/fetches/categories_fetches";
import {useDispatch, useSelector} from "react-redux";
import {allCategoriesAction} from "../store/actions/categoriesActions";
import {countriesList, hours, weekDays, weekDaysValues} from "../store/constants";

// THE RELATED CSS YOU'LL FIND IN "newRestaurantStyles.js"




const NewRestaurantFormPage = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [categories, setCategories] = useState('');
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [website, setWebsite] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [firstDay, setFirstDay] = useState('');
    const [lastDay, setLastDay] = useState('');
    const [openingHour, setOpeningHour] = useState('');
    const [closingHour, setClosingHour] = useState('');
    const [priceLevel, setPriceLevel] = useState('');
    const [image, setImage] = useState('');

    const allCategories = useSelector(state => state.categoriesReducer.categories.data);

    const [errorName, setErrorName] = useState(false);
    const [errorCategory, setErrorCategory] = useState(false);
    const [errorCountry, setErrorCountry] = useState(false);
    const [errorStreet, setErrorStreet] = useState(false);
    const [errorCity, setErrorCity] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorHours, setErrorHours] = useState(false);

    console.log(firstDay)

    useEffect(() => {
        categoriesFetch()
            .then(data => {
                const action = allCategoriesAction(data.results);
                dispatch(action);
            })
        }, [])


    const createRestaurant = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('categories', categories);
        formData.append('country', country);
        formData.append('street', street);
        formData.append('city', city);
        formData.append('zip', zip);
        formData.append('website', website);
        formData.append('email', email);
        formData.append('priceLevel', priceLevel);
        formData.append('image', image);

        // Make sure phone matches the requirements
        formData.append('phone', phone);

        formData.append('firstDay', firstDay);
        formData.append('lastDay', lastDay);
        formData.append('openingHour', openingHour);
        formData.append('closingHour', closingHour);

        console.log(formData)

    }

    return (
        <MainContainer>
            <HeaderNavi/>
                <NewRestaurantWrapper>
                    <CreatNewRestaurantTitle>Create New Restaurant<span> </span></CreatNewRestaurantTitle>
                        <form>
                            <FieldsetTitle className='p'>Basic</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Name: *</LabelLeft>
                                <LabelCenter>Category: *</LabelCenter>
                                <LabelRight>Country: *</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required="required"
                                        onChange={event => setName(event.target.value)}
                                    />
                                </InputFields>
                                <InputFields>
                                    <select name="category" id="category-select" onChange={event => setCategories(event.target.value)}>
                                        <option selected disabled>Select a value..</option>
                                        {allCategories ? allCategories.map((category, index) => {
                                            return (
                                                <option key={index} value={category.id}>{category.name}</option>
                                            )
                                        } )
                                        : ''}
                                    </select>
                                </InputFields>
                                <InputFields>
                                    <select name="country" id="country-select" onChange={event => setCountry(event.target.value)}>
                                        <option selected disabled>Select a value..</option>
                                        {countriesList.map((country, index) => {
                                            return (
                                                <option key={index} value={country}>{country}</option>
                                            )
                                        })}
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
                                <LabelLeft>Street: *</LabelLeft>
                                <LabelCenterSecondRow>City: *</LabelCenterSecondRow>
                                <LabelRight>Zip:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required
                                        onChange={event => setStreet(event.target.value)}
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                        onChange={event => setCity(event.target.value)}
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                        onChange={event => setZip(event.target.value)}
                                    />
                                </InputFields>
                            </FormRows>
                            <FormRows>
                                {errorStreet ? <RequiredLeft>This field is required</RequiredLeft> : ''}
                                {errorCity ? <RequiredCenter>This field is required</RequiredCenter> : ''}
                            </FormRows>

                            <FieldsetTitle className='p'>Contact</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Website:</LabelLeft>
                                <LabelCenterThirdRow>Phone: *</LabelCenterThirdRow>
                                <LabelRight>Email:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required
                                        onChange={event => setWebsite(event.target.value)}
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                        onChange={event => setPhone(event.target.value)}
                                    />
                                </InputFields>
                                <InputFields>
                                    <input
                                        required
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </InputFields>
                            </FormRows>
                            <FormRows>
                                <RequiredPhone>This field is required</RequiredPhone>
                            </FormRows>

                            <FieldsetTitle className='p'>Details</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Opening hours: *</LabelLeft>
                                <LabelCenterFourthRow>Price Level:</LabelCenterFourthRow>
                                <LabelRight>Image:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputOpeningHours>
                                    <select required onChange={event => setFirstDay(event.target.value)}>
                                        <option selected disabled>Day</option>
                                        {weekDays.map((day, index) => {
                                            return (
                                                <option key={index} value={weekDaysValues[index]}>{day}</option>
                                            )
                                        })}
                                    </select>

                                    <select required onChange={event => setLastDay(event.target.value)}>
                                        <option selected disabled>Day</option>
                                        {weekDays.map((day, index) => {
                                            return (
                                                <option key={index} value={weekDaysValues[index]}>{day}</option>
                                            )
                                        })}
                                    </select>

                                    <select required onChange={event => setOpeningHour(event.target.value)}>
                                        <option selected disabled>Hour</option>
                                        {hours.map((hour, index) => {
                                            return (
                                                <option key={index} value={hour}>{hour}</option>
                                            )
                                        })}
                                    </select>

                                    <select required onChange={event => setClosingHour(event.target.value)}>
                                        <option selected disabled>Hour</option>
                                        {hours.map((hour, index) => {
                                            return (
                                                <option key={index} value={hour}>{hour}</option>
                                            )
                                        })}
                                    </select>
                                </InputOpeningHours>
                                <InputFields>
                                    <select name="priceLevel" id="priceLevel-select" onChange={event => setPriceLevel(event.target.value)}>
                                        <option selected disabled>Select a value..</option>
                                        <option value="1">$ - cheap</option>
                                        <option value="2">$ $ - mid-range</option>
                                        <option value="3">$ $ $ - upper-class</option>
                                    </select>
                                </InputFields>
                                <InputFields>
                                    <FileUploader setImage={setImage}/>
                                </InputFields>
                            </FormRows>
                            <FormRows>
                                <RequiredLeft>This field is required</RequiredLeft>
                            </FormRows>
                        </form>
                    <button className='button_save'>Save</button>
                </NewRestaurantWrapper>
            <Footer/>
        </MainContainer>
    )
}

export default NewRestaurantFormPage;
