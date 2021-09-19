
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbarr from './component/Navbarr'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Article from './component/Article';

function App() {
  return (
    <div className="App">
    {/* <BrowserRouter>
    <Navbarr/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </BrowserRouter> */}
      <Navbarr />
      <Home />
      <About />
      <Article/>
      <Contact />
      
    </div>
  );
}

export default App;
