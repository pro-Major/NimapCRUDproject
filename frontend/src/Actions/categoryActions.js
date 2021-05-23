import axios from 'axios';

import { 
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL
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