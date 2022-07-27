
export default async function sendRequest(url, method = "GET", payload = null) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const options = { method };
    if (payload) {
      options.headers = { "Content-Type": "application/json" };
      // Fetch requires data payloads to be stringified
      // and assigned to a body property on the options object
      options.body = JSON.stringify(payload);
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
    return sendRequest(`${BASE_URL}/register`, 'POST', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function changeUsername(userData) {
    return sendRequest(`${BASE_URL}/changeUsername`, 'POST', userData)
}

export async function changePassword(userData){
    return sendRequest(`${BASE_URL}/changePassword`,'POST', userData )

}




// export async function changeUsername(userData) {
//     const token = await usersAPI.changeUsername(userData)
//     localStorage.setItem('token', token)
//     return getUser()
// }
// export async function changePassword(userData) {
//     const token = await usersAPI.changePassword(userData)
//     localStorage.setItem('token', token)
//     return getUser()
// }


// export function logOut() {
//     localStorage.removeItem('token')
// }

// // ================== Helper functions ==================
// // getToken
// export function getToken() {
//     // getItem return null if there is no key
//     const token = localStorage.getItem('token')
//     if(!token) return null
//     // else if there is a token, return it
//     const payload = JSON.parse(window.atob(token.split('.')[1]))
//     // if token expires, return null, if not return token
//     if (payload.exp < Date.now() / 1000) {
//         localStorage.removeItem('token')
//         return null
//     }
//     return token
// }
// // getUser
// export function getUser() {
//     const token = getToken()
//     // token have 3 parts, header, payload, and signature, they seperate by '.' , payload is data we want at index[1] of course
//     return token ? JSON.parse(window.atob(token.split('.')[1])).user : null
// }
