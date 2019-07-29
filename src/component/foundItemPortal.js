import React, { Component } from 'react'

export default class FoundItemPortal extends Component {

    constructor () {
        super()
        this.state = {
            foundItemNum: ''
        }
    }


    static getDerivedStateFromProps = (nextProps, prevState) => {

        if (prevState.foundItemNum !== nextProps.foundItemNum) {
            debugger
            const urlItem = `https://stark-plateau-81274.herokuapp.com/items/${nextProps.foundItemNum}`
            
            fetch(urlItem)
                .then(response => response.json())
                .then(result => this.setState(result))
                .catch(error => console.error(error))
            return console.log("Hello")
        }
        return null;
    }

    printIT =() => {
        console.log(this.props.match.params.itemID)
    }

    render() {
        // {this.printIT()}
        return (
            
            <h1>Hello</h1>
        )
    }
}