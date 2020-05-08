import axios from 'axios';
import cookie from 'react-cookies';
// const API_URL = 'https://login.salesforce.com/services/oauth2';
const API_URL = 'https://na134.salesforce.com/services/oauth2';
// const API_URL = 'https://cosynd-api.herokuapp.com/api/v1/login';

function headers(useToken) {
  let options = {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',

  };

  if(useToken) {
    const token = cookie.load('token');
    options = { 
      'Authorization': 'Bearer ' + token 
    };
  }

  return options;
}

export function get(url, useToken = true) {
  return axios({
    method: 'GET',
    url: API_URL + url,
    headers: headers(useToken),
  })
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    if(err.response && err.response.data) {
      return { error: err.response.data };
    } else {
      return null;
    }
  });
}

export function post(url, data, useToken = true) {
  return axios({
    method: 'POST',
    url: API_URL + url,
    data,
    headers: headers(useToken),
  })
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    if(err.response && err.response.data) {
      return { error: err.response.data };
    } else {
      return null;
    }
  });
}

export function patch(url, data, useToken = true) {
  return axios({
    method: 'PATCH',
    url: API_URL + url,
    data,
    headers: headers(useToken),
  })
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    if(err.response && err.response.data) {
      return { error: err.response.data };
    } else {
      return null;
    }
  });
}

export function del(url, useToken = true) {
  return axios({
    method: 'DELETE',
    url: API_URL + url,
    headers: headers(useToken),
  })
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    if(err.response && err.response.data) {
      return { error: err.response.data };
    } else {
      return null;
    }
  });
}
