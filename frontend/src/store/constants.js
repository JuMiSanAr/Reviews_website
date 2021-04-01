
// Action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';
export const SEARCH_REVIEWS = 'SEARCH_REVIEWS';
export const SEARCH_USERS = 'SEARCH_USERS';

export const ALL_RESTAURANTS = 'ALL_RESTAURANTS';

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
<<<<<<< HEAD

});





=======
      },
})
>>>>>>> dev
