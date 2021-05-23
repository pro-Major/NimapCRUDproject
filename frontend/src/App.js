import {BrowserRouter as Router , Route}from 'react-router-dom';


//Importing Components
import AllProducts from './Components/AllProducts'
import UpdateProduct from './Components/UpdateProduct'
import AllCategory from './Components/AllCategory'
import CreateCategory from './Components/CreateCategory'
function App() {
      return (
    <Router>
        <div className="container container-fluid">

      <Route path="/" component={AllProducts} exact />
      <Route path="/product/:id" component={UpdateProduct} exact />
      <Route path="/category/" component={AllCategory} exact />
      <Route path="/category/create" component={CreateCategory} exact />

        </div>
    </Router> 
  )
}

export default App;
