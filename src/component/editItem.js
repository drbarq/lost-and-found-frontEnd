import React, { Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/editItem.css'

export default class EditItem extends Component {
    constructor() {
        super()
        this.state = {
            itemNumber: '',
            newName: '',
            isShowing: false
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

    handleEditNameChange = (event) => {
        this.setState({
            name: event.target.value,
            newName: event.target.value
        })
    } 

    render() {
        return(
            <React.Fragment>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <div className="editItem-editItemContainer">
                    <div className="editItem-editItemTitleContainer">
                        <p>edit item</p>
                        <div className="editItem-buttonsContainer">
                            <FontAwesomeIcon color="#2C4246" icon={['fas', 'save']} size="lg"/>
                            <FontAwesomeIcon color="#2C4246" icon={['fas', 'trash']} size="lg" />
                        </div>
                    </div>
                    <form className="editItem-editItemInfoContainer" action="" method="post">
                        <div className="editItem-editItemContainerRowOne">
                            <div className="editItem-editItemNameContainer">
                                <label htmlFor="editItem-editItemName">name</label>
                                <input className="editItem-editItemName" name="name" type="text" value={this.state.name} ></input>
                            </div>
                            <div className="editItem-editItemMessageContainer">
                                <label htmlFor="editItem-editItemMessage">findee message</label>
                                <textarea className="editItem-editItemMessage" rows = "3" cols = "30" value={this.state.message}></textarea>
                            </div>
                            <div className="editItem-qrCodeContainer">
                                <img className="editItem-qrcode" src={this.state.qrCode}/>
                            </div>
                        </div>
                        <div className="editItem-editCommsContainer">
                            <div className="editItem-editCommsOptionContainer">
                                <div className="editItem-editTitleContainer">
                                    <label htmlFor="editItem-editPhoneComms">phone</label>
                                    <input className="editItem-editPhoneComms" name="text" type="text" value="disabled" ></input>
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
                                    <input className="editItem-editEmailComms" type="text" value="disabled"  ></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>   
        )
    }
}