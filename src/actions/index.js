const GET_DATA = () => {
    return {
        type: "GET_DATA"
    }
}

const SEND_COMMENT = (id, body) => {
    return{
        type: "SEND_COMMENT",
        payload: {
            id, body
        }
    }
}

const ERROR = () => {
    return {
        type: "ERROR"
    }
}

const SET_SEND_STATUS = (status) => {
    return{
        type: "SET_SEND_STATUS",
        payload: status
    }
}

export {
    GET_DATA,
    ERROR,
    SEND_COMMENT,
    SET_SEND_STATUS
}