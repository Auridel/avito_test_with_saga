import {takeEvery, put, call} from "redux-saga/effects";
import Service from "../service";
import {GET_DATA_ASYNC, SET_SEND_STATUS, SET_IMAGE_WITH_COMMENTS, ERROR} from "../actions";

const service = new Service();


//---------------------------------------------------   Data Saga
function fetchData (){
    return service.getAll()
        .then(res => res)
}

function* getDataAsync() {
    try {
        const data = yield call(fetchData);
        yield put(GET_DATA_ASYNC(data))
    }catch {
        yield put(ERROR())
    }


}

export function* watchGetData() {
    yield takeEvery("GET_DATA", getDataAsync);

}

//-------------------------------------------------------  Post Comment Saga

function postComment({id, body}) {
    return service.addComment(id, body)
        .then(res => res)
}

function* sendCommentAsync({payload: {id, body}}) {
    yield put(SET_SEND_STATUS("loading"));
    try {

        yield call(postComment, {id, body});
        yield put(SET_SEND_STATUS("ok"));
    }catch {
        yield put(SET_SEND_STATUS("fail"));
    }
}

export function* watchSendComment() {
    yield takeEvery("SEND_COMMENT", sendCommentAsync);
}

//---------------------------------------------------------  Get Big Image Saga


function fetchImage({id}) {
    return service.getImage(id)
        .then(res => res)
}

function* getImageAsync({payload: id}) {
    try {
        const data = yield call(fetchImage, {id});
        yield put(SET_IMAGE_WITH_COMMENTS(id, data))
    }catch {
        yield put(SET_IMAGE_WITH_COMMENTS(id, {
            error: true
        }))
    }
}

export function* watchGetImage() {
    yield takeEvery("GET_IMAGE", getImageAsync);
}