import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./chats/chatsReducer";
import {messagesReducer} from "./messages/messagesReducer";
import thunk from "redux-thunk";
import {authReducer} from "./auth/authReducer";

const rootReducer = combineReducers({
    user: authReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));