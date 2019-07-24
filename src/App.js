import React from 'react';
// import Login from './component/login'
// import NewUser from './component/newUser'
// import HomePage from './component/homePage'
// import NewItem from './component/newItem'
// import EditItem from './component/editItem'
import EditUser from './component/editUser'
import 'font-awesome/css/font-awesome.min.css'
// import react router 

import './App.css';

export default function App() {
  return(
      <div className="app">
        <div className="logoOne">
          <img src="https://i.imgur.com/i6sybqa.png"></img>
        </div>

      {/* <Route path="/login" component={Login}/> */}
      {/* <Login /> */}
      {/* <NewUser /> */}
      {/* <HomePage /> */}
      {/* <NewItem /> */}
      <EditUser />
      {/* <EditItem /> */}

      </div>

  )
}