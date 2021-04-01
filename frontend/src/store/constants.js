
// Action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';
export const SEARCH_REVIEWS = 'SEARCH_REVIEWS';
export const SEARCH_USERS = 'SEARCH_USERS';

export const ALL_RESTAURANTS = 'ALL_RESTAURANTS';
// export const NEW_RESTAURANT = 'NEW_RESTAURANT';

export const ALL_CATEGORIES = 'ALL_CATEGORIES';

export const HOME_CARD = 'HOME_CARD';

// Base URLs to use for fetching
export const baseUrlLocal = 'http://localhost:8000/api/';
export const baseUrlServer = 'https://luna.propulsion-learn.ch/api/';

// Header types
const token = localStorage.getItem('token');

export const headers = new Headers({
    'Content-Type': 'application/json'
});

export const headersWithToken = new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
})


// List of countries available to create a new restaurant
export const countriesList = ['Spain', 'Turkey', 'Poland', 'Israel', 'Tibet'];

// List of days of the week
export const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
export const weekDaysValues = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// List of hours
export const hours = ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '9am', '10am', '11am', 'noon',
'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '9pm', '10pm', '11pm', 'midnight'];