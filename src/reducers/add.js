const Add = (state = [], action) => {
    switch(action.type){
        case ("ADD"):
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ];
        
        case("TEST"):
            console.log("thunk testing");
            return state;
        default:
            return state;
        
    }
}

export default Add