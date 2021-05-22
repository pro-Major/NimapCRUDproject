import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { deleteProductReducer, productsReducer , } from './Reducers/productReducer'


const reducer = combineReducers({
    products: productsReducer,
    product: deleteProductReducer,


})








const middlware = [thunk];
const store = createStore(reducer,  composeWithDevTools(applyMiddleware(...middlware)))
export default store;
