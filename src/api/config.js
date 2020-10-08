import axios from 'axios';

const HTTP = axios.create({
  baseURL: "https://api.saluderia.com/",
});

export default HTTP;