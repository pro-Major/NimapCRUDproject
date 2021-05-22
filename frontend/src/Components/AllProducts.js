import React,{Fragment,useEffect} from 'react'
import { getProducts , deleteProduct } from '../Actions/productsActions'
import { useDispatch , useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {DELETE_PRODUCT_RESET} from '../Constants/productsConstant'
import { useAlert } from 'react-alert'

const AllProducts = () => {
    const dispatch = useDispatch(); 
    const alert = useAlert();

    const { products } = useSelector(state => state.products);
    const { isDeleted } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProducts());     

        if (isDeleted) {
            alert.success('Product deleted successfully');
            dispatch({ type: DELETE_PRODUCT_RESET })
        }
    },[isDeleted,alert])

const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
    }
    return(
        <Fragment>
<h1 >All Products </h1>


<Link to={`/products/create`} className="btn btn-primary" style={{"margin-left": "51rem"}}> Create Product</Link>
<Link to={`/category/`} className="btn btn-warning"> Create Category</Link>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ProductId</th>
      <th scope="col">ProductName</th>
      <th scope="col">CategoryName</th>
      <th scope="col">CategoryId</th>
      <th scope="col"> Actions </th>
    </tr>
  </thead>

 {

<tbody>
    { products.map(product => (
        <tr key={product.id}>
        <th scope="row"> {product._id}</th>
        <td>{product.ProductName}</td>
        <td>{product.CategoryName}</td>
        <td>{product.CategoryId}</td>
        <td> 
        <Fragment>
                    <Link to={`/product/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
        </td>        
      </tr>

    ))}

</tbody> 

}

  
</table>

        </Fragment>
    )

    
}
export default AllProducts







