import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Login from './component/login'
import NewUser from './component/newUser'
import HomePage from './component/homePage'
import NewItem from './component/newItem'
import EditItem from './component/editItem'
import EditUser from './component/editUser'
import HeaderLogo from './component/headerLogo'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// import react router 

import './App.css';

export default function App() {

  return(
  
    <Router>
      <div className="app">
        <HeaderLogo />

        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/homepage/" component={ HomePage } />
          <Route path="/editUser" component={ EditUser } />
        </Switch>

      </div>
    </Router>
  )
}



    // <div className="app">
    //   <HeaderLogo />

    //   {/* <Route path="/login" component={Login}/> */}
    //   <Login />
    //   {/* <NewUser /> */}
    //   {/* <HomePage /> */}
    //   {/* <NewItem /> */}
    //   {/* <EditUser /> */}
    //   {/* <EditItem /> */}

    // </div>
