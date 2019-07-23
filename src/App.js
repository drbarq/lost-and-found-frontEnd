import React from 'react';
import Login from './component/login'
import NewUser from './component/newUser'
import HomePage from './component/homePage'
import 'font-awesome/css/font-awesome.min.css'

import './App.css';

export default function App() {
  return(
    <React.Fragment>
      {/* <Login /> */}
      {/* <NewUser /> */}
      <HomePage />
    </React.Fragment>
  )
}