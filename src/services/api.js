import axios from "axios";

export const key = "6360323586cdeddc93b9d630cb8bc588f093dc86";

const api = axios.create({ baseURL: 'https://api-ssl.bitly.com/v4/', headers:{'Authorization': `Bearer ${key}`} })

export default api;