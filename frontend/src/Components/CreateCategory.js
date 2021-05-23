import React,{useState,Button,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import {createCategory} from '../Actions/categoryActions'
const CreateCategory = ({history}) => {
    const [name, setName] = useState('') 

    const dispatch = useDispatch();
    const alert = useAlert();
    const {categoryData }  = useSelector(state => state.createCategory)
useEffect(() => {
    if(categoryData) {
        alert.success("Category Added Successfully ");
        history.push('/category')
    }
    

},[categoryData])


const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createCategory(name));
    
}    
    return (
        <div>
            <form  onSubmit={submitHandler}  >
                    <div className="form-group">
                        <label htmlFor="text"> <h4> Category Name </h4></label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Category Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <small id="text" className="form-text text-muted">Create a new Category</small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}

export default CreateCategory
