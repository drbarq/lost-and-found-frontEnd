import React, { Component} from 'react'
// import { parsePhoneNumberFromString } from 'libphonenumber-js'
import TrackedItem from './trackedItem'
import '../css/homePage.css'
import UserInfo from './userInfo';


export default class HomePage extends Component {
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
        const urlUser = "https://stark-plateau-81274.herokuapp.com/users/1"
        const urlItems = "https://stark-plateau-81274.herokuapp.com/users/1/items"
        
        fetch(urlUser)
            .then(response => response.json())
            .then(result => this.formatUserResult(result))
            .catch(error => console.error(error))
        fetch(urlItems)
            .then(response => response.json())
            .then(result => this.formatItemResults(result))
            .catch(error => console.error(error))
    }

    formatUserResult = result => {
        this.setState({
            userInfo: {
                firstName: result.first_name,
                lastName: result.last_name,
                contactNumber: result.contact_number,
                emailAddress: result.email_address,
                password: result.password,
                qrCode: result.qr_Code
            }
        })
    }

    formatItemResults = result => {
        this.setState({
            items: [result[0]]
        })
    }

    render() {
        return(
            <React.Fragment>

                <div className="home-userHomeContainer">
                    <div className="home-accountInfo">
                        <div className="home-accountTitleContainer">
                            <p>account information</p>
                            <button>edit user</button>
                        </div>

                        <UserInfo userInfo={this.state.userInfo} />
                       
                        <div className="home-trackedItemsContainer">
                            <div className="home-trackedItemsTitleContainer">
                                <p>tracked items</p>
                                <button>add new item</button>
                            </div>
                            <TrackedItem items={this.state.items} />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}