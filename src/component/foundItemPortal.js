import React, { Component } from 'react'
import Modal from './Modal/modal';
import 'font-awesome/css/font-awesome.min.css'
import '../css/foundItem.css'

export default class FoundItemPortal extends Component {
    constructor () {
        super()
        this.state = {
            foundItemNum: '',
            findeeMessage: '',
            findeePhoneNumber: '',
            findeeName: '',
            isShowing: false
        }
    }

    componentDidMount = () => {
        let urlItem = `https://stark-plateau-81274.herokuapp.com/items/${this.props.foundItemNum}`
        fetch(urlItem)
            .then(response => response.json())
            .then(result => this.setState({
                id: result.id,
                item_name: result.item_name,
                message: result.message,
                qr_code: result.qr_code,
                user_id: result.user_id
                })
            )
            .catch(error => console.error(error))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let postItemURL = `https://stark-plateau-81274.herokuapp.com/contact_forms`
        let message = {
            findee_message: `Name: ${this.state.findeeName}  Number: ${this.state.findeePhoneNumber} Message: ${this.state.findeeMessage}`,
            item_id: this.state.id,
                    }

        fetch(postItemURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message)
        })
        .then(response => console.log(response))
        .then(response => this.openModalHandler())
        .catch(error => console.error(error.message))
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    handleTextMessage = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <div className="foundItem-foundItemInfoContainer">
                    <div className="foundItem-thanksContainer">
                        <p>Lost-Found is a Communication Platform for Lost Items</p>
                    </div>
                </div>
                <div className="foundItem-foundItemInfoContainer">

                    <div className="foundItem-foundItemContainerRowOne">
                        <div className="foundItem-viewNameandMessage">
                            {/* <div className="foundItem-itemName">
                                <label htmlFor="foundItem-itemNameState">item name</label>
                                <h5 className="foundItem-itemNameState">{this.state.item_name}</h5>
                            </div> */}
                            <div className="foundItem-itemMessage">
                                <label htmlFor="foundItem-itemMessageState">message from owner</label>
                                <h5 className="foundItem-itemMessageState">{this.state.message}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="foundItem-foundItemContainerRowTwo">
                        <h3>Use the form to send a message to the owner</h3>
                        <form className="foundItem-foundItemFindeeMessageForm" onSubmit={(event) => this.handleSubmit(event)}>

                            <textarea className="findeeMessageBoxName"
                                        name="findeeName"
                                        required
                                        placeholder="enter your name"
                                        autoFocus = {true}
                                        rows = "1"
                                        maxLength = "15"
                                        cols = "15"
                                        onChange={(event) => this.handleTextMessage(event)}
                                        ></textarea>
                            <textarea className="findeeMessageBoxNumber"
                                        name="findeePhoneNumber"
                                        required
                                        placeholder="enter your phone number"
                                        rows = "1"
                                        maxLength = "10"
                                        cols = "15"
                                        onChange={(event) => this.handleTextMessage(event)}
                                        ></textarea>
                            <textarea className="findeeMessageBox"
                                        name="findeeMessage"
                                        required
                                        placeholder="enter message to owner"
                                        rows = "3"
                                        maxLength = "60"
                                        cols = "25"
                                        onChange={(event) => this.handleTextMessage(event)}
                                        ></textarea>
                            <input type="submit" value="send text message"/>
                        </form>
                    </div>
                </div>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Thank you! A text message has been sent to the owner!
                </Modal>
            </React.Fragment>
        )
    }
}
