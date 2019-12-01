import React from 'react'


export const ListItem = (props) => {
    return (
        <ul className="todo-list-ul">
            {
                props.list.map((item) => <li key = {item.id} onClick={props.itemClick}>{item.title}</li>)
            }
        </ul>
    )
}
