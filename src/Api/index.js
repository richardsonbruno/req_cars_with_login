import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.b7web.com.br/carros/api/'
});

export default API;