import {BrowserRouter as Router , Route}from 'react-router-dom';


//Importing Components
import AllProducts from './Components/AllProducts'
import UpdateProduct from './Components/UpdateProduct'

function App() {
      return (
    <Router>
        <div className="container container-fluid">

      <Route path="/" component={AllProducts} exact />
      <Route path="/product/:id" component={UpdateProduct} exact />



        </div>
    </Router> 
  )
}

export default App;
