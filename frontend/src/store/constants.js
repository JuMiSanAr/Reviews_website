import {store} from "./index";

// Action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const SEARCH = 'SEARCH';
export const HOME_CARD = 'HOME_CARD';
export const NEW_REVIEW = 'NEW_REVIEW';


// Base URLs to use for fetching
export const baseUrlLocal = 'http://localhost:8000/api/';
export const baseUrlServer = 'https://luna.propulsion-learn.ch/api/';

// Header types
const token = localStorage.getItem('token');

export const headers = new Headers({
    'Content-Type': 'application/json'
});

export const headersWithToken = new Headers({
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
})


