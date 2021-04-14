import axios from 'axios';

const instance = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production') ? 'https://xyz' : 'https://abc'
});

const serveLocalJsonArr = [];

export const getUrl = (props) => {
    if (serveLocalJsonArr.includes(props)) {
        return 'http://localhost:' + window.location.port + '/json' + props + '.json';
    }

    return props;
}

export default instance;