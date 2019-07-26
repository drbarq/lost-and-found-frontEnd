import React, { Component} from 'react'
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import TrackedItem from './trackedItem'
import '../css/homePage.css'
import UserInfo from './userInfo';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            inUserEdit: false,
            inAddItem: false

        }
    }

    handleClickUserEdit = () => {
        this.setState({inUserEdit: true})
    }

    handleClickAddItem = () => {
        this.setState({inAddItem: true})
    }

    render() {
        if(this.state.inUserEdit === true) {
            return <Redirect to='/editUser' />
        } else if (this.state.inAddItem === true) {
            return <Redirect to='/newItem' />
        }


        return(
            
            <React.Fragment>

                <div className="home-userHomeContainer">
                    <div className="home-accountInfo">
                        <div className="home-accountTitleContainer">
                            <p>account information</p>
                            <button onClick={this.handleClickUserEdit}>edit user</button>
                        </div>

                        <UserInfo userInfo={this.props.userInfo} />
                       
                        <div className="home-trackedItemsContainer">
                            <div className="home-trackedItemsTitleContainer">
                                <p>tracked items</p>
                                <button onClick={this.handleClickAddItem}>add new item</button>
                            </div>
                            <TrackedItem items={this.props.items} />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}