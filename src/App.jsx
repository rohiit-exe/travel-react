
import './App.css';
import Navbar from './Components/Navbar.jsx';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/pages/Home'
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/Services" exact component = {Services} />
          <Route path="/Products" exact component = {Products} />
          <Route path="/Sign-Up" exact component = {SignUp} />

        </Switch>
    </Router>
    </>
  );
}

export default App;
