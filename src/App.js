import "./styles.css";
// import About from "../src/Components/About.js";
import Navbar from "../src/Components/Navbar.js";
// import Card from "../src/Components/Card.js";
import Home from "../src/Components/Home.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </>
    // <BrowserRouter>
    //   <Navbar />
    //   <Switch>
    //     <Route path="/about" component={About} />
    //     <Route path="/:user" component={Card} />
    //     <Route path="/" component={Home} />
    //   </Switch>
    // </BrowserRouter>
  );
}
