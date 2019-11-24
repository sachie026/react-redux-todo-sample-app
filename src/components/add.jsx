import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (
            <div className= "container">
                <input type = "text" className = "entry-box" placeholder = "Add entry"/>
                <button className = "entry-button">Add</button>
            </div>
        )
    }
}
