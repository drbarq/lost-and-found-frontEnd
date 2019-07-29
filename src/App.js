import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
// import Login from './component/login'
// import NewUser from './component/newUser'
// import HeaderLogo from './component/headerLogo'
import HomePage from './component/homePage'
import NewItem from './component/newItem'
import EditItem from './component/editItem'
import EditUser from './component/editUser'
import ViewUser from './component/viewUser';
import ViewItem from './component/viewItem'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FoundItemPortal from './component/foundItemPortal';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
          firstName: "",
          lastName: "",
          contactNumber: "",
          emailAddress: "",
          password: "",
          qrCode: "",
      },
      items: []
    }
  }

  componentDidMount = () => {
    const urlUser = "https://stark-plateau-81274.herokuapp.com/users/8"
    
    fetch(urlUser)
        .then(response => response.json())
        .then(result => this.formatUserResult(result))
        .catch(error => console.error(error))
  }

  formatUserResult = result => {
    this.setState({
        userInfo: {
            firstName: result.first_name,
            lastName: result.last_name,
            contactNumber: result.contact_number,
            emailAddress: result.email_address,
          },
        items: result.items
    })
  }

  render () {
    return(
      <Router>
        <div className="app">
          <div className="navBarContainer">
            <div className="logoOne">
                <img src="https://i.imgur.com/N2lKQQ5.png"></img>
            </div>
            <div className="navBar">
                <div className="navBarButtons">
                    <Link className="navbar-home-button" to="/"><i className="fa fa-home fa-2x"></i></Link>
                    <Link className="navbar-user-button" to="/accountInformation/"><i className="fa fa-user fa-2x"></i></Link>
                    <Link className="navbar-user-button" to="/newItem/"><i className="fa fa-plus-square fa-2x"></i></Link>
                </div>
            </div>
          </div>

        <Switch>
          <Route 
            exact path="/"
            render={ () => <HomePage userInfo={this.state.userInfo} items={this.state.items}/>} 
            />
          <Route 
            path="/editUser/"
            render ={ () => <EditUser userInfo={this.state.userInfo} />}
            />
          <Route path="/editItem" component={ EditItem } />
          <Route 
            path="/newItem/"
            render ={ () => <NewItem userInfo={this.state.userInfo}/>} 
          />
          <Route 
            path="/accountInformation/"
            render={ () => <ViewUser userInfo={this.state.userInfo} />}
            />
          <Route 
            path="/viewItem/"
            render={(props) => <ViewItem itemInfo={this.state.items} value={props.location.state.viewItemButton}/>}
            />
          <Route 
            path="/editItem/"
            render={ () => <EditItem />}
            />
          <Route 
            path="/foundIt/:itemID"
            render={ (props) => <FoundItemPortal  foundItemNum={props.match.params.itemID} />}
          />
        </Switch>
      </div>
    </Router>
  )}
}

