let nextId = 0;
export const addToDo = (title) => {
    return {
        type: "ADD",
        title: title,
        id: nextId++
    }
}


export const removeTodo = (id) => {
    return {
        type: "REMOVE",
        id: id
    }
}

export const thunkAction = () => {
    return function(dispatch){
        dispatch({
            type: "TEST"
        })
    }
}