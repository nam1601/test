import axios from 'axios';
const httpRequest = axios.create({
    baseURL: 'http://localhost:3000/api/',
    // headers: {
    //     'Content-Type': 'application/json',
    //     // Authorization: 'Bearer ' + token,
    // },
});
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export const post = async (path, data, option = {}) => {
    const response = await httpRequest.post(path, data, option);
    return response;
};
export const put = async (path, data, option = {}) => {
    const response = await httpRequest.put(path, data, option);
    return response;
};
export default httpRequest;
