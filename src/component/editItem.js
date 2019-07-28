import React, { Component} from 'react'
import '../css/editItem.css'

const itemBaseURL = "https://stark-plateau-81274.herokuapp.com/items/"

export default class EditItem extends Component {
    constructor() {
        super()
        this.state = {
            itemNumber: '',
            newName: ''
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        let itemInfo = nextProps.location.state.itemData
        if (prevState.itemNumber !== itemInfo.value) {
            return (
                {
                    itemNumber: itemInfo.value,
                    id: itemInfo.id,
                    name: itemInfo.name,
                    message: itemInfo.message,
                    qrCode: itemInfo.qrCode,
                    contact_forms: itemInfo.contact_forms,
                    contact_methods: itemInfo.contact_methods
            }
        )}
        return null;
    }

    handleEditNameChange = (event) => {
        this.setState({
            name: event.target.value,
            newName: event.target.value
        })
    }

    handleEditFieldChange = () => {

    }

    // commented this out.  will revist on monday
        // set two state variables and compare to send out request?  
    editItemSubmit = () => {
        // check to see what changed
        const itemID = this.state.id
        const itemURL = itemBaseURL+itemID

        const nameChange = this.state.newName.length > 0 ? true : false
        // event.preventDefault()
        debugger;
        if (nameChange) {
            // optimistically render
            this.setState({
                name: this.state.newName
            })
            // send a post update
            fetch(itemURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify()

            })
        }
    }


    render() {
        return(
            <React.Fragment>
                <div className="editItem-editItemContainer">
                    <div className="editItem-editItemTitleContainer">
                        <p>edit item</p>
                        <div className="editItem-buttonsContainer">
                            <button onClick={this.editItemSubmit}>save changes</button>
                            <button>delete item</button>
                        </div>
                    </div>
                    <form className="editItem-editItemInfoContainer" action="" method="post">
                        <div className="editItem-editItemContainerRowOne">
                            <div className="editItem-editItemNameContainer">
                                <label htmlFor="editItem-editItemName">name</label>
                                <input className="editItem-editItemName" name="name" type="text" value={this.state.name} ></input>
                            </div>
                            <div className="editItem-qrCodeContainer">
                                <img className="editItem-qrcode" src={this.state.qrCode}/>
                            </div>
                        </div>
                        <div className="editItem-editCommsContainer">
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editPhoneComms">phone</label>
                                    <input className="editItem-editPhoneComms" name="text" type="text" value={this.state.contact_methods.phone} ></input>
                                </div>
                            </div>
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editTextComms">text</label>
                                    <input className="editItem-editTextComms" type="text" value={this.state.contact_methods.text} ></input>
                                </div>
                            </div>
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editEmailComms">email</label>
                                    <input className="editItem-editEmailComms" type="text" value={this.state.contact_methods.email} ></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>   
        )
    }
}