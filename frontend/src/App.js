import {BrowserRouter as Router , Route}from 'react-router-dom';


//Importing Components
import AllProducts from './Components/AllProducts'


function App() {
      return (
    <Router>
        <div className="container container-fluid">

      <Route path="/" component={AllProducts} exact />




        </div>
    </Router> 
  )
}

export default App;
