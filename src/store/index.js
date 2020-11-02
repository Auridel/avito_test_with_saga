import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {watchGetData} from "../sagas/saga";
import reducer from "../reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchGetData);

export default store;