import axios from 'axios';

import { 
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL
} from '../Constants/categoryConstant'


export const getCategory = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_CATEGORY_REQUEST })

        const { data } = await axios.get(`/category`)

        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_CATEGORY_FAIL,
        })
    }
}


export const deleteCategory = (id) =>  async (dispatch) => {
    try{
        dispatch({ type : DELETE_CATEGORY_REQUEST})

        const {data} = await axios.delete(`/category/${id}`)
        dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: data.success
            
        })

    }
    catch (error) {
        dispatch({
            type : DELETE_CATEGORY_FAIL
        })
    }
}