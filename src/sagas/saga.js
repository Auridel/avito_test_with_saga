import {takeEvery, put, call} from "redux-saga/effects";
import Service from "../service";

const service = new Service();

function fetchData (){
    return service.getAll()
        .then(res => res)
}

function* getDataAsync() {
    const data = yield call(fetchData);
    yield put({type: "GET_DATA_ASYNC", payload: data})
}

export function* watchGetData() {
    yield takeEvery("GET_DATA", getDataAsync);
}