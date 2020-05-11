import axios from 'axios';
import cookie from 'react-cookies';

const API_URL = 'https://na134.salesforce.com/services/data/v20.0';
const ACCESS_TOKEN_KEY = 'access_token'

function headers(useToken) {
  let options = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  };

  if (useToken) {
    const token = cookie.load(ACCESS_TOKEN_KEY);
    options = { 
      Authorization: 'Bearer ' + token 
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

export async function resolveAccessToken() {
  try {
    const { data } = await axios.get('/access_token')
    cookie.save(ACCESS_TOKEN_KEY, data.access_token)
  } catch (error) {
    console.warn(error)
  }
}