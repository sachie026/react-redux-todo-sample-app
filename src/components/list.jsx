import React, { Component } from 'react'
import { ListItem } from "./listItem"
import {connect} from "react-redux"

class List extends Component {

    render() {
        return (    
            <ListItem itemClick = {this.handleClick} list = {this.props.list}/>
        )
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
