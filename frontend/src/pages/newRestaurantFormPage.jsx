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
import {newRestaurantFetch} from "../store/fetches/restaurant_fetches";
import {useHistory} from "react-router-dom";

// THE RELATED CSS YOU'LL FIND IN "newRestaurantStyles.js"


// ===== api key to convert address to lat & lon ===== 
// const apiKey = 'pk.90118e3bf831e84aa39b925394cce279&q'
// ===================================================
    // fetch(`https://us1.locationiq.com/v1/search.php?key=${apiKey}=${street}%20${streetNumber}%2C%20${city}%20${zipCode}%2C%20${country}&format=json`)
    // .then(response => response.json())
    // .then(data => {
    //     // data ? setPosition([data[0].lat, data[0].lon]) : setPosition([47.0269, 8.3023])
    // });



const NewRestaurantFormPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [categories, setCategories] = useState('1');
    const [country, setCountry] = useState('Undefined');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [website, setWebsite] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [firstDay, setFirstDay] = useState('Monday');
    const [lastDay, setLastDay] = useState('Monday');
    const [openingHour, setOpeningHour] = useState('1am');
    const [closingHour, setClosingHour] = useState('1am');
    const [priceLevel, setPriceLevel] = useState('1');
    const [image, setImage] = useState('');

    const allCategories = useSelector(state => state.categoriesReducer.categories.data);

    const [errorName, setErrorName] = useState(false);
    const [errorCategory, setErrorCategory] = useState(false);
    const [errorCountry, setErrorCountry] = useState(false);
    const [errorStreet, setErrorStreet] = useState(false);
    const [errorCity, setErrorCity] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorHours, setErrorHours] = useState(false);

    const [success, setSuccess] = useState(false);

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
        formData.append('zip_code', zip);
        formData.append('website', website);
        formData.append('email', email);
        formData.append('price_level', priceLevel);

        if (image) {
            formData.append('avatar', image);
        }

        // Make sure phone matches the requirements
        formData.append('phone', phone);

        const openingHours = `${firstDay}-${lastDay}, ${openingHour}-${closingHour}`
        formData.append('opening_hours', openingHours);

        newRestaurantFetch(formData)
            .then(data => {
                setSuccess(true)
                history.push('/userProfile')
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    return (
        <MainContainer>
            <HeaderNavi/>
                <NewRestaurantWrapper>
                    <CreatNewRestaurantTitle>Create New Restaurant<span> </span></CreatNewRestaurantTitle>

                            <FieldsetTitle className='p'>Basic</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Name: *</LabelLeft>
                                <LabelCenter>Category: *</LabelCenter>
                                <LabelRight>Country: *</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputFields>
                                    <input
                                        required
                                        onChange={event => setName(event.target.value)}
                                    />
                                </InputFields>
                                <InputFields>
                                    <select required defaultValue='1' name="category" id="category-select" onChange={event => setCategories(event.target.value)}>
                                        <option disabled>Select a category</option>
                                        {allCategories ? allCategories.map((category, index) => {
                                            return (
                                                <option key={index} value={category.id}>{category.name}</option>
                                            )
                                        } )
                                        : ''}
                                    </select>
                                </InputFields>
                                <InputFields>
                                    <select required defaultValue='Undefined' name="country" id="country-select" onChange={event => setCountry(event.target.value)}>
                                        <option disabled>Select a country</option>
                                        {countriesList.map((country, index) => {
                                            return (
                                                <option key={index} value={country}>{country}</option>
                                            )
                                        })}
                                    </select>
                                </InputFields>
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
                                        onChange={event => setZip(event.target.value)}
                                    />
                                </InputFields>
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
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </InputFields>
                            </FormRows>

                            <FieldsetTitle className='p'>Details</FieldsetTitle>
                            <FormRows>
                                <LabelLeft>Opening hours: *</LabelLeft>
                                <LabelCenterFourthRow>Price Level:</LabelCenterFourthRow>
                                <LabelRight>Image:</LabelRight>
                            </FormRows>
                            <FormRows>
                                <InputOpeningHours>
                                    <select defaultValue='Monday' required onChange={event => setFirstDay(event.target.value)}>
                                        <option disabled>First day in the week</option>
                                        {weekDays.map((day, index) => {
                                            return (
                                                <option key={index} value={weekDaysValues[index]}>{day}</option>
                                            )
                                        })}
                                    </select>

                                    <select defaultValue='Monday' required onChange={event => setLastDay(event.target.value)}>
                                        <option disabled>Last day in the week</option>
                                        {weekDays.map((day, index) => {
                                            return (
                                                <option key={index} value={weekDaysValues[index]}>{day}</option>
                                            )
                                        })}
                                    </select>

                                    <select defaultValue='1am' required onChange={event => setOpeningHour(event.target.value)}>
                                        <option disabled>Opening time</option>
                                        {hours.map((hour, index) => {
                                            return (
                                                <option key={index} value={hour}>{hour}</option>
                                            )
                                        })}
                                    </select>

                                    <select defaultValue='1am' required onChange={event => setClosingHour(event.target.value)}>
                                        <option disabled>Closing time</option>
                                        {hours.map((hour, index) => {
                                            return (
                                                <option key={index} value={hour}>{hour}</option>
                                            )
                                        })}
                                    </select>
                                </InputOpeningHours>
                                <InputFields>
                                    <select defaultValue='1' name="priceLevel" id="priceLevel-select" onChange={event => setPriceLevel(event.target.value)}>
                                        <option disabled>Select a value..</option>
                                        <option value="1">$ - cheap</option>
                                        <option value="2">$ $ - mid-range</option>
                                        <option value="3">$ $ $ - upper-class</option>
                                    </select>
                                </InputFields>
                                <InputFields>
                                    <FileUploader setImage={setImage}/>
                                </InputFields>
                            </FormRows>

                    {success ? <h1>Your restaurant has been created!</h1> : ''}
                    <button className='button_save' onClick={createRestaurant}>Save</button>
                </NewRestaurantWrapper>
            <Footer/>
        </MainContainer>
    )
}

export default NewRestaurantFormPage;
