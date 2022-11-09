import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import for redux
// Provider 属于global state
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";

import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";

const reduxStore = createStore(reducers, applyMiddleware(thunk))

//reduxStore 是自己起的名字
ReactDOM.render(
    //把 app 里的数据都包裹在Provider这个global state中
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App />

        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


