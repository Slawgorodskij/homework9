import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as chatsReducer from "./chatsReducer";

export const useChats = () => {
    const dispatch = useDispatch()
    return bindActionCreators(chatsReducer, dispatch)
};