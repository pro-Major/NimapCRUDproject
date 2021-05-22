import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,  } from '../Constants/productsConstant'


    export const getProducts = () => async (dispatch) => {
        try {
    
            dispatch({ type: ALL_PRODUCTS_REQUEST })
    
            const { data } = await axios.get(`/products`)
            
            dispatch({
                type: ALL_PRODUCTS_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: ALL_PRODUCTS_FAIL,
            })
        }
    }