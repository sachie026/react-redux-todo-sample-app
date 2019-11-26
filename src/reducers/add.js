const Add = (state = [], action) => {
    switch(action.type){
        case ("ADD"):
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ]
        ;
        default:
            break;
        ;
    }
    return null;
}

export default Add