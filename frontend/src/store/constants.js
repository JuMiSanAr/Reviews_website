
export const baseUrl = 'http://localhost:8000/api/';

export const headers = new Headers({
    'Content-Type': 'application/json'
});

const token = localStorage.getItem('token');
export const headersWithToken = new Headers({
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
})


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
