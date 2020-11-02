const initialState = {
    data: [],
    error: false,
    sendStatus: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA_ASYNC": {
            return {
                ...state,
                data: [...action.payload]
            };
        }
        case "SET_SEND_STATUS": {
            console.log(action)
            return {
                ...state,
                sendStatus: action.payload
            }
        }
        case "ERROR": {
            return {
                ...state,
                error: true
            }
        }
        default: return state;
    }
};

export default reducer;