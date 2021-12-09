import React from 'react';
import {AppContainer, hot} from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Auth } from "./pages/Auth";
import { SignUp } from "./pages/SignUp";
import {Collection} from "./pages/Collection";
import { Provider } from "mobx-react"
import mainStore from "./stores/mainStore";
import {Film} from "./pages/Film";

const history = createBrowserHistory()

const stores ={
    mainStore,
    authStore: mainStore.authStore,
    collectionStore: mainStore.collectionStore
}

const App = hot(module)(() => {
    return (
        <Router history={history}>
            <Provider {...stores}>
                <Switch>
                    <Route path="/" exact component={ Auth }/>
                    <Route path="/sign-up" exact component={ SignUp }/>
                    <Route path="/collections" exact component={ Collection }/>
                    <Route path="/films/:id" exact component={ Film }/>
                </Switch>
            </Provider>
        </Router>
    );
})

export default App;

