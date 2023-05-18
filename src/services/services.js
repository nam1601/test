import * as httpRequest from '../untils/httpRequest';

export const Register = async (username, email, password) => {
    try {
        const res = await httpRequest.post('/users', { username, email, password });
        return res.data;
    } catch (error) {
        return error.message;
    }
};
export const Login = async (email, password) => {
    try {
        const res = await httpRequest.post('/login', { email, password });
        return res.data;
    } catch (error) {
        return error.message;
    }
};
export const getAllArticle = async () => {
    try {
        const res = httpRequest.get('/articles');
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getListUser = async (token) => {
    try {
        const res = await httpRequest.get('/users', {
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getUserInfo = async (token) => {
    try {
        const res = await httpRequest.get('/user', {
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        });
        return res.data;
    } catch (error) {
        return error.message;
    }
};
export const updateUser = async (token, data) => {
    try {
        const res = await httpRequest.put('/user', data, {
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getUserDetail = async (username) => {
    try {
        const res = await httpRequest.get(`/profiles/${username}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const createAnArticle = async (token, data) => {
    try {
        const res = await httpRequest.post('/articles', data, {
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
