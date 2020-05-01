import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/carrinho-compras/backend/public/'
});

export default api;