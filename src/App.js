import "./App.css";
import "./responsive.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </>
  );
}

export default App;
