import { sendRequest } from './api'

// this is the base path of the Express route that we define
const BASE_URL = 'http://127.0.0.1:8000/api/cart/'

export async function getCart() {
    return sendRequest(BASE_URL, 'GET')
}

export async function addToCart(productData) {
    return sendRequest(BASE_URL, 'POST', productData)
}
