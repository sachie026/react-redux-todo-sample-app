import React, { Component } from 'react'
import { ListItem } from "./listItem"
import {connect} from "react-redux"

class List extends Component {

    render() {
        if(this.props.list.length === 0){
            return (
                <div className= "container">
                    No entries to show
                </div>   
            )
        }
        else{
            return (
                <div className= "container">
                    <ListItem itemClick = {this.handleClick} list = {this.props.list}/>
                </div>    
            )    
        }
    }

    handleClick = () => {
        console.log("in container clicked");
    }

}


const mapStateToProps = (state) => {
    return {
        list: state
    }
}

export default connect(mapStateToProps)(List)
