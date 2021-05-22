import { 
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    CLEAR_ERRORS
} from '../Constants/productsConstant'



export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products: action.payload.products,
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
export const deleteProductReducer = (state = {},action) => {
    switch(action.type){
        case DELETE_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case DELETE_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case DELETE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_PRODUCT_RESET:
                return {
                    ...state,
                    isDeleted: false
            }
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null
             }
        default:
            return state
        
        
    }
}