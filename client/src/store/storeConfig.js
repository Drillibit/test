import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AddGroupReducer from '../reducers/AddGroupReducer';

export default () => {
    const store = createStore(
        combineReducers({
            groups: AddGroupReducer
        }),
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
};