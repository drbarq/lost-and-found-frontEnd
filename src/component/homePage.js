import React, { Component} from 'react'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import TrackedItem from './trackedItem'
import '../css/homePage.css'


export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            contactNumber: "",
            emailAddress: "",
            password: "",
            qrCode: "",
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
            firstName: result.first_name,
            lastName: result.last_name,
            contactNumber: result.contact_number,
            emailAddress: result.email_address,
            password: result.password,
            qrCode: result.qr_Code
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
                        <div className="home-userInfo">
                            <div className="home-nameInfo">
                                <label htmlFor="name">name</label>
                                <h5 className="home-name"> {this.state.firstName + ' ' + this.state.lastName}</h5>
                            </div>
                            <div className="home-contact">
                                <div className="home-email">
                                    <label htmlFor="email">email</label>
                                    <h5 className="home-email">{this.state.emailAddress}</h5>
                                </div>
                                <div className="home-phone">
                                    <label htmlFor="phone">phone</label>
                                    <h5 className="home-phone">{this.state.contactNumber}</h5>
                                </div>
                            </div>
                        </div> 

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