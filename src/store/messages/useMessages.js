import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as messagesReducer from "./messagesReducer";


export const useMessages = () => {
    const dispatch = useDispatch();
    return bindActionCreators(messagesReducer, dispatch);
};