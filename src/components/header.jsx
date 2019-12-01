import React, { Component } from 'react'

export default class Header extends Component {
    
    render() {
        console.log("this.props.children", this.props.children.length)
        return (
            <div className= "App-header">
                { this.props.children}
            </div>
        )
    }
}
