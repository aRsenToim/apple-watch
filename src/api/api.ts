import axios from "axios"

const BASE_URL = 'https://6532d4fad80bd20280f6172c.mockapi.io/'

export const $api = axios.create({
 baseURL: BASE_URL,
})