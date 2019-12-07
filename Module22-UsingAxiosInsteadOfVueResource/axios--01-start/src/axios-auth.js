import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://arcane-icon-246213.firebaseio.com/'
});

instance.defaults.headers.common['SOMETHING'] = 'SOMETHING';

export default instance;