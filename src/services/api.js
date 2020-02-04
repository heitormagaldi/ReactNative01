import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.5:3333', //se for o emulador, 10.0.2.2 ou localhost
  });

  export default api;
