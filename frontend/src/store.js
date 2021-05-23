import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { deleteProductReducer, productsReducer , } from './Reducers/productReducer'
import {CategoryReducer , deleteCategoryReducer , createCategoryReducer } from './Reducers/categoryReducer'

const reducer = combineReducers({
    products: productsReducer,
    productDeleted: deleteProductReducer,
    category: CategoryReducer,
    categoryDeleted : deleteCategoryReducer,
    createCategory: createCategoryReducer

})








const middlware = [thunk];
const store = createStore(reducer,  composeWithDevTools(applyMiddleware(...middlware)))
export default store;
