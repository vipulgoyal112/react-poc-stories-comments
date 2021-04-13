import axios from 'axios';

const instance = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production') ? 'https://9rm9kqcb67.execute-api.ap-northeast-1.amazonaws.com/Prod' : 'https://5q4k5rm4qh.execute-api.ap-northeast-1.amazonaws.com/Prod'
});

const serveLocalJsonArr = [];

export const getUrl = (props) => {
    if (serveLocalJsonArr.includes(props)) {
        return 'http://localhost:' + window.location.port + '/json' + props + '.json';
    }

    return props;
}

export default instance;