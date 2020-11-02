const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA_ASYNC": {
            console.log(action)
            return [...action.payload];
        }
        default: return state;
    }
};

export default reducer;