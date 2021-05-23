import { 
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CLEAR_ERRORS
} from '../Constants/categoryConstant'



export const CategoryReducer = (state = { category: [] }, action) => {
    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
            return {
                loading: true,
                category: []
            }

        case ALL_CATEGORY_SUCCESS:
            return {
                loading:false,
                category: action.payload.category,
            }
        case ALL_CATEGORY_FAIL:
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
// // export const deletePcategoryReducer = (state = {},action) => {
// //     switch(action.type){
// //         case DELETE_CATEGORY_REQUEST:
// //             return{
// //                 ...state,
// //                 loading: true
// //             }
// //         case DELETE_CATEGORY_SUCCESS:
// //             return{
// //                 ...state,
// //                 loading: false,
// //                 isDeleted: action.payload
// //             }
// //         case DELETE_CATEGORY_FAIL:
// //             return {
// //                 ...state,
// //                 error: action.payload
// //             }
// //         case DELETE_CATEGORY_RESET:
// //                 return {
// //                     ...state,
// //                     isDeleted: false
// //             }
// //         case CLEAR_ERRORS:
// //                 return {
// //                     ...state,
// //                     error: null
// //              }
// //         default:
// //             return state
        
        
// //     }
// }