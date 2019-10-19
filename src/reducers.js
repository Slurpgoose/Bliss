
let initalState = {
};

let mainReducer = (state = initalState, action) => {
    let { type } = action;
    switch(type) {
        default:
            return {...state}
    }  
}

export default mainReducer