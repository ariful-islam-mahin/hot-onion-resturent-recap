import React, { createContext, useState } from 'react';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import Checkout from './components/Checkout/Checkout';
import FoodDetail from './components/FoodDetail/FoodDetail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRouter/PrivateRoute';
export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({
    name:'',
    email:'',
    error:'',
    isLoggedIn:false
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Main></Main>
          </Route>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route path='/:category/:foodName'>
            <FoodDetail></FoodDetail>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/checkout'>
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
