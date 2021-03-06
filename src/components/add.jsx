import React, { Component } from 'react'
import { addToDo } from "../actions/crud-action"
import { connect} from "react-redux"

class Add extends Component {

    handleAdd = () => {
        this.props.inc(this.refs.entry.value);
    }

    render() {
        const style = {
            display : "flex",
            flexDirection: "column",
            alignItems: "center"
        }

        const labelStyle = {
            marginBottom : 15
        }
        return (
            <div className= "container">

                <div style = {style}>
                    <div style={labelStyle}>
                        Todal entries: {
                            this.props.count
                        }
                    </div>
                    <div>
                        <input type = "text" ref = "entry" className = "entry-box" placeholder = "Add entry"/>
                        <button className = "entry-button" onClick ={this.handleAdd}>Add</button>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("add state: ", state);
    return {
       count: state.length
    }
}

const mapActions = (dispatch) => ({
        inc: (title) => dispatch(addToDo(title))
})



export default connect(mapStateToProps, mapActions)(Add)
