import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import {watchGetData, watchSendComment, watchGetImage} from "../sagas/saga";
import reducer from "../reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchGetData);
sagaMiddleware.run(watchSendComment);
sagaMiddleware.run(watchGetImage);

export default store;