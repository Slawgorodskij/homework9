import React from 'react';
import {useParams} from "react-router-dom";
import HeaderMessage from "../../components/HeaderMessage";
import {useSelector} from "react-redux";
import MessagesPage from "./MessagesPage";
import {chatsSelector} from "../../store/chats/chatsSelector";

const MessagesPageContainer = () => {
    const {chatId} = useParams();
    let namePage = 'Разделы'
    const nameChat = useSelector(chatsSelector);

    if (chatId) {
        const positiveArr = nameChat.filter((item) => {
            return +item.id === +chatId;
        });
        if (positiveArr.length) {
            namePage = positiveArr[0].name;
        }
    }

    return (
        <>
            <HeaderMessage namePage={namePage}/>
            <MessagesPage nameChat={nameChat}/>
        </>
    );
};

export default MessagesPageContainer;