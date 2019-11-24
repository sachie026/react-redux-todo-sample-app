import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (    
            <div className= "container">
                <ul className="todo-list-ul">
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                </ul>
            </div>
        )
    }
}
