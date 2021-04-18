import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Review from './Component/Dashboard/Review/Review';
import Admin from './Component/Dashboard/Admin/Admin';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Router path="/review">
          <Review></Review>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
