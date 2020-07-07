import React from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return <div>home page</div>;
};
export default App;
