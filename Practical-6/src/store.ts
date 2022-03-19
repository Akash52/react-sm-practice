import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userListReducer} from './Redux/Normal Redux/Reducer/userReducer';

const reducer = combineReducers({
    userList: userListReducer,
});

const initialState = {};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
