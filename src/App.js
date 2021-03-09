
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About/About';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Home2</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

     
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:id">
          <PostDetail></PostDetail>

        </Route>
        <Route path="/about">
          <About></About>
          
        </Route>
        <Route path="/dashboard">
          
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
