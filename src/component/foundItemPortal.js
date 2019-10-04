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

                {/* <div className="foundItem-foundItemInfoContainer">
                    <div className="foundItem-thanksContainer">
                        <h1>Thank you!</h1>
                    </div>
                </div> */}
                {/* <div className="foundItem-foundItemInfoContainer">
                    <div className="foundItem-thanksContainer">
                        <h1>Lost-Found connects lost items with their owners</h1>
                    </div>
                </div> */}
                {/* <div className="foundItem-foundItemInfoContainer">
                    <div className="foundItem-thanksContainer">
                        <h3>Below is a message from the item owner</h3>
                    </div>
                </div> */}

                <div className="foundItem-foundItemInfoContainer">
                    <div className="foundItem-foundItemContainerRowOne">
                    <label>message from item owner:</label>
                        <div className="foundItem-viewNameandMessage">
                            {/* <div className="foundItem-itemMessage"> */}
                                {/* <label htmlFor="foundItem-itemMessageState">message from item owner:</label> */}
                               
                                <h4 className="foundItem-itemMessageState">{this.state.message}</h4>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                {/* <div className="foundItem-foundItemInfoContainer">
                    <div className="foundItem-thanksContainer">
                        <h1>Located under the owners messages is a form to connect with the owner. </h1>
                    </div>
                </div> */}
                <div className="foundItem-foundItemInfoContainer">
                    <div className="foundItem-foundItemContainerRowTwo">
                            <label>send a message to the owner:</label>
                            <form className="foundItem-foundItemFindeeMessageForm" onSubmit={(event) => this.handleSubmit(event)}>
                                <p for="findeeName">enter your name:</p>
                                <textarea className="findeeMessageBoxName"
                                            name="findeeName"
                                            required
                                            placeholder="name"
                                            autoFocus = {true}
                                            rows = "1"
                                            maxLength = "15"
                                            cols = "15"
                                            onChange={(event) => this.handleTextMessage(event)}
                                            ></textarea>
                                <p for="findeePhoneNumber">enter your phone number:</p>
                                {/* <textarea className="findeeMessageBoxNumber"
                                            name="findeePhoneNumber"
                                            required
                                            placeholder="enter your phone number"
                                            rows = "1"
                                            maxLength = "10"
                                            cols = "15"
                                            onChange={(event) => this.handleTextMessage(event)}
                                            ></textarea> */}
                                <input className="findeeMessageBoxNumber"
                                            type="tel" 
                                            // id="phone" 
                                            name="findeePhoneNumber"
                                            required
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            placeholder="format: 123-456-7890"
                                            required
                                            onChange={(event) => this.handleTextMessage(event)}
                                            ></input>
                                <p for="findeeMessage">enter message to owner:</p>
                                <textarea className="findeeMessageBox"
                                            name="findeeMessage"
                                            required
                                            placeholder="include next steps and how best to return the item OR where you left it"
                                            rows = "3"
                                            maxLength = "60"
                                            cols = "25"
                                            onChange={(event) => this.handleTextMessage(event)}
                                            ></textarea>
                                <input type="submit" value="send text message"/>
                                {/* <button title="Press me"/> */}
                            </form>
                        </div>
                    </div>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Thank you for your help!<br/><br/>
                        A text message has been sent to the owner!<br/><br/>
                        What's next?  <br/><br/>
                        The owner will reach out and arrange the return.<br/><br/>
                        Need to leave? Dont worry!  Just tell the owner where you left the item.
                </Modal>
            </React.Fragment>
        )
    }
}
