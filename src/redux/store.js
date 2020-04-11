import { createStore } from "redux";
import reducerApp from './reducer'

import {saveState} from '../helpers/localStorage'

/* eslint-disable no-underscore-dangle */
const store = createStore(reducerApp, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/* eslint-enable */

store.subscribe(() => {
    const newState = {
        user: store.getState().user
    };
    saveState('user', newState);
});

export default store