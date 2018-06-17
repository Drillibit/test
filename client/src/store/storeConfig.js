import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AddGroupReducer from '../reducers/AddGroupReducer';
import AddItemReducer from '../reducers/AddItemReducer';

export default () => {
    const store = createStore(
        combineReducers({
            groups: AddGroupReducer,
            items: AddItemReducer
        }),
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
};