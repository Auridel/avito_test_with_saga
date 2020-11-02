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

const SET_IMAGE_WITH_COMMENTS = (id, data) => {
    return {
        type: "SET_IMAGE_WITH_COMMENTS",
        payload: {
            id, data
        }
    }
}

const GET_IMAGE = (id) => {
    return {
        type: "GET_IMAGE",
        payload: id
    }
}

export {
    GET_DATA,
    ERROR,
    SEND_COMMENT,
    SET_SEND_STATUS,
    GET_IMAGE,
    SET_IMAGE_WITH_COMMENTS
}