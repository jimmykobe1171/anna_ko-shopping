import Cookies from 'js-cookie'

export default async function sendRequest(url, method = "GET", payload = null) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const options = { method, credentials: 'include'};

    if (payload) {
      options.headers = { "Content-Type": "application/json" };
      // Fetch requires data payloads to be stringified
      // and assigned to a body property on the options object
      options.body = JSON.stringify(payload);
      const csrftoken = Cookies.get('csrftoken');
      if (csrftoken) {
        options.headers["X-CSRFToken"] = csrftoken;
      }
    }
    const res = await fetch(url, options);
    console.log(res)
  
    //res.ok will be false if the status code is set to 4xx in the controller action
    // this is if else statement, if res.ok, send res.json(), else throw error
    if (res.ok) return res.json();
    throw new Error("Bad request");
  }

//   import sendRequest from './send-request'

// this is the base path of the Express route that we define
const BASE_URL = 'http://127.0.0.1:8000/api/users'

export async function signUp(userData) {
    return sendRequest(`${BASE_URL}/signup`, 'POST', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function logout() {
    return sendRequest(`${BASE_URL}/logout`, 'GET')
}

export async function userProfile() {
    return sendRequest(`${BASE_URL}/profile`, 'GET')
}

export async function changeProfile(userData) {
    return sendRequest(`${BASE_URL}/profile`, 'POST', userData)
}

export async function changePassword(userData){
    return sendRequest(`${BASE_URL}/changePassword/`,'POST', userData )
}

