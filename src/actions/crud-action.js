let nextId = 0;
export const addTodo = (title) => {
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