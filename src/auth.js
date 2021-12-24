const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res)
      }
    })
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('email', email);
      return data;
    });
      
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
    }})
    .then((res) => {
      console.log(res)
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res)
      }
    })
};
