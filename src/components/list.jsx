import React, { Component } from 'react'
import {connect} from "react-redux"

class List extends Component {
    render() {
        return (    
            <div className= "container">
                <ul className="todo-list-ul">

            {
            this.props.list.map((item) => <li key = {item.id}>{item.title}</li>)
            }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state
    }
}

export default connect(mapStateToProps)(List)
