import {SIGN_UP, SIGN_IN, AUTO_SIGN_IN, GET_USER_INFO, UPDATE_FAVORITES, APPLY_TO_JOB} from '../types';
import {SIGN_IN_URL, SIGN_UP_URL, REFRESH_URL, FIREBASE_URL} from '../../utils/misc/misc';

import axios from 'axios';



export const signUp = (data) => {
    const request = axios({
        method:'POST',
        url:SIGN_UP_URL,
        data:{
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        header:{
            "Content-Type": "application/json"
        }
    }).then(response=>{
        return response.data;
    }).catch( e => {
        return false;
    });

    return {
        type: SIGN_UP,
        payload: request
    }

};



export const signIn = (data) => {
    const request = axios({
        method:'POST',
        url:SIGN_IN_URL,
        data:{
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        header:{
            "Content-Type": "application/json"
        }
    }).then(response=>{
        return response.data;
    }).catch( e => {
        return false;
    });

    return {
        type: SIGN_IN,
        payload: request
    }
};


export const autoSignIn = (refreshToken) => {
    const request = axios({
        method: 'POST',
        url: REFRESH_URL,
        data: "grant_type=refresh_token&refresh_token=" + refreshToken,
        header: 'Content-Type: application/x-www-form-urlencoded'
    }).then(response=>{
        return response.data;
    }).catch( e => {
        return false;
    });

    return {
        type: AUTO_SIGN_IN,
        payload: request
    }
};



export const getUserInfo = (uid) => {
    const request = axios({
        method:'GET',
        url:`${FIREBASE_URL}/users/${uid}.json`
    }).then(response=>{
        return response.data;
    }).catch( e => {
        return false;
    });

    return {
        type: GET_USER_INFO,
        payload: request
    }
};


export const updateFavorites = (uid, favorites) => {
    const request = axios({
        method:'PUT',
        url:`${FIREBASE_URL}/users/${uid}/favorites.json`,
        data: favorites
    }).then(response=>{
        return response.data;
    }).catch( e => {
        return false;
    });

    return {
        type: UPDATE_FAVORITES,
        payload: request
    }
};


export const applyToJob = (uid, sent) => {
    const request = axios({
        method:'PUT',
        url:`${FIREBASE_URL}/users/${uid}/sent.json`,
        data: sent
    }).then(response=>{
        return response.data;
    }).catch( e => {
        return false;
    });

    return {
        type: APPLY_TO_JOB,
        payload: request
    }
};