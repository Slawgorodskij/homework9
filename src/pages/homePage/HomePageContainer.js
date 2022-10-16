import React, {useState} from 'react';
import Header from "../../components/Header";
import HomePage from "./HomePage";

const HomePageContainer = () => {

    const title = 'Общение - надежный способ:';
    const nameLink = 'Войти';
    const addressLink = '/login';
    const nameButtonLink = 'Тебя ждут';
    const [arrayOffering] = useState([
        {
            'id': 1,
            'text': 'найти новых друзей,'
        },
        {
            'id': 2,
            'text': 'узнать что-то новое,'
        },
        {
            'id': 3,
            'text': 'поделиться своими знаниями.'
        }]);

    return (
        <>
            <Header
                nameLink={nameLink}
                addressLink={addressLink}
            />
            <HomePage title={title} arrayOffering={arrayOffering} nameButtonLink={nameButtonLink}/>
        </>
    );
};

export default HomePageContainer;