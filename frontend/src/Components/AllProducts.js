import React, { Fragment,useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../Actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_PRODUCT_RESET } from "../Constants/productsConstant";
import { useAlert } from "react-alert";
import Pagination from 'react-js-pagination'

const AllProducts = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1)

  const { products ,resPerPage , productsCount } = useSelector((state) => state.products);
  const { isDeleted } = useSelector((state) => state.productDeleted);

  useEffect(() => {
    dispatch(getProducts(currentPage));

    if (isDeleted) {
      alert.success("Product deleted successfully");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
  }, [isDeleted, alert,currentPage,dispatch]);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };
  
  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
}

let count = productsCount;

  return (
    <Fragment>
      <Fragment>
        <div className="row">
          <div className="col">
            <h1>All Products </h1>
          </div>
          <div
            className="col my-2 margin-left"
            style={{ marginInlineStart: 450 }}
          >
            <Link to={`/products/create`} className="btn btn-primary">
              Product Action
            </Link>
            <Link to={`/category/`} className="btn btn-warning ml-2">
              Category Action
            </Link>
          </div>

          <table className="table">
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
                {products.map((product) => (
                  <tr key={product._id}>
                    <th scope="row"> {product._id}</th>
                    <td>{product.ProductName}</td>
                    <td>{product.CategoryName}</td>
                    <td>{product.CategoryId}</td>
                    <td>
                      <Fragment>
                        <Link
                          to={`/product/${product._id}`}
                          className="btn btn-primary py-1 px-2"
                        >
                          <i className="fa fa-pencil"></i>
                        </Link>
                        <button
                          className="btn btn-danger py-1 px-2 ml-2"
                          onClick={() => deleteProductHandler(product._id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </Fragment>
                    </td>
                  </tr>
                ))}
              </tbody>
            }
          </table>
        </div>
      </Fragment>
      <div className="">
        {resPerPage <= count && (
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={"Next"}
              prevPageText={"Prev"}
              firstPageText={"First"}
              lastPageText={"Last"}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default AllProducts;
