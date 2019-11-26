import React, { Component } from 'react'
import { addToDo } from "../actions/crud-action"
import { connect} from "react-redux"

class Add extends Component {

    handleAdd = () => {
        this.props.inc("two");
    }

    render() {
        console.log("render fro add")
        return (
            <div className= "container">
                <input type = "text" className = "entry-box" placeholder = "Add entry"/>
                <button className = "entry-button" onClick ={this.handleAdd}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapActions = (dispatch) => ({
        inc: (title) => dispatch(addToDo(title))
})



export default connect(mapStateToProps, mapActions)(Add)
