import React,{Fragment,useEffect}from 'react'
import { Link} from "react-router-dom"
import {getCategory} from "../Actions/categoryActions"
import { useDispatch , useSelector } from 'react-redux'

const AllCategory = () => {
    const dispatch = useDispatch();
    const {category} = useSelector(state => state.category)


useEffect(() => {   
    dispatch(getCategory());
},[]);

const deleteProductHandler = () => {

}

    return(
        <Fragment>
<h1 >All Category </h1>
<Link to={`/category/create`} className="btn btn-primary"  style={{marginInlineStart: 900}}>Create Category</Link>
<table class="table">
  <thead>
    <tr>
      
      <th scope="col">CategoryId</th>
      <th scope="col">CategoryName</th>
      <th scope="col">Actions</th>


    </tr>
  </thead>

 

 <tbody>
    {category.map(item => (
        <tr key={item.id}> 
        <th scope="row"> {item._id}</th>
        <td>{item.CategoryName}</td>
         
        <td>  
        <Fragment>
                    <Link to={`/product/${item._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(item._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
        </td>        
      </tr>

    ))}

</tbody> 



  
</table>

        </Fragment>
    )

}

export default AllCategory
