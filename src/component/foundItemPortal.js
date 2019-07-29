import React, { Component } from 'react'

export default class FoundItemPortal extends Component {

    constructor () {
        super()
        this.state = {
            foundItemNum: ''
        }
    }

    componentDidMount = () => {
        const urlItem = `https://stark-plateau-81274.herokuapp.com/items/${this.props.foundItemNum}`
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

    render() {
        return (
            
            <h1>Hello</h1>
        )
    }
}