import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-81d1a-default-rtdb.firebaseio.com/'
});

export default instance;