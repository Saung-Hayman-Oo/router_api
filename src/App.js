import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
         <Switch>
            <Route path="/" exact component={Home}/>
               
            <Route path="/about">
                <About />
              </Route>
              <Route path="/shop" exact>
                <Shop />
              </Route>
              <Route path="/shop/:id">
                <ItemDetail />
              </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );

}

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  )
}
export default App;
