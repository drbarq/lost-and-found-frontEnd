import React, { Component } from 'react'
import Modal from './Modal/modal';
import ReactDOM from "react-dom";
import '../css/foundItem.css'



export default class FoundItemPortal extends Component {

    constructor () {
        super()
        this.state = {
            foundItemNum: '',
            findeeMessage: '',
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
            findee_message: this.state.findeeMessage,
            item_id: this.state.id

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
            findeeMessage: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
            
            <div className="foundItem-foundItemInfoContainer">
                <div className="foundItem-thanksContainer">
                    <h3>I found an Item Portal</h3>
                </div>
                <div className="foundItem-foundItemContainerRowOne">
                    <div className="foundItem-viewNameandMessage">
                        <div className="foundItem-itemName">
                            <label htmlFor="foundItem-itemNameState">item name</label>
                            <h3 className="foundItem-itemNameState">{this.state.item_name}</h3>
                        </div>
                        <div className="foundItem-itemMessage">
                            <label htmlFor="foundItem-itemMessageState">message from owner</label>
                            <h3 className="foundItem-itemMessageState">{this.state.message}</h3>
                        </div>
                    </div>
                </div>
                <div className="foundItem-foundItemContainerRowTwo">
                    <form className="foundItem-foundItemFindeeMessageForm" onSubmit={(event) => this.handleSubmit(event)}>
                        <label htmlFor="findeeMessageBox">enter message to owner here</label>
                        <textarea className="findeeMessageBox"
                                    autoFocus = {true}
                                    rows = "3"
                                    maxLength = "160"
                                    cols = "35"
                                    onChange={(event) => this.handleTextMessage(event)}
                                    ></textarea>
                        <input type="submit" value="send text to owner"/>
                    </form>
                </div>
            </div>

            <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}>
                    Thank you for your message! 
            </Modal>

        </React.Fragment>
        )
    }
}
