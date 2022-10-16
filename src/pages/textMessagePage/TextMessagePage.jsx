import React, {useState, useContext, useEffect} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import OneMessage from "../../components/OneMessage";
import {ThemeContext} from "../../context";
import {useSelector} from "react-redux";
import {db} from "../../services/firebase";

const nameField = 'Поле сообщения';
const nameButton = 'Отправить';

const TextMessagePage = () => {
    const {chatId} = useParams();
    const user = useSelector(state => state.user.currentUser);
    const {themes} = useContext(ThemeContext);
    const [text, setText] = useState('');

    const textChange = (event) => {
        setText(event.target.value);
    };


    const [messages, setMessages] = useState({});

    useEffect(() => {
        db.child('messages').on('value', (snap) => {
            if (snap.val() !== null) {
                setMessages({...snap.val()})
            } else {
                setMessages({})
            }
        })
        return () => {
            setMessages({})
        }
    }, [])

    const addMessage = (event) => {
        event.preventDefault();
        if (text !== '') {
            const message = {
                'id': Date.now(),
                'arrayChatsId': +chatId,
                'text': text,
                'author': user.displayName,
            }
            db.child('messages').push({...message}, (error) => {
                if (error) {
                    console.log(error)
                }
            })
            setText(() => '');
        }
    }

    return (
        <>
            <Box
                sx={{
                    marginBottom: '2%',
                    padding: '5px',
                    height: '73%',
                    background: themes.background,
                    borderRadius: '15px',
                    overflowY: 'auto',
                    "&::-webkit-scrollbar": {
                        width: 10
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#8c8c95"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#244e4d",
                        borderRadius: 2
                    }
                }}>
                {chatId ? (Object.keys(messages).filter((obj => messages[obj].arrayChatsId === +chatId))
                        .map(item => <OneMessage key={messages[item].id} text={messages[item].text}
                                                 author={messages[item].author}/>))
                    :
                    '<- выберите раздел'
                }
            </Box>
            <Box
                component={'form'}
                onSubmit={addMessage}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '23%',
                    background: themes.background,
                    borderRadius: '15px',
                }}>
                <Typography
                    component={'h4'}
                    textAlign={'center'}
                >
                    {nameField}
                </Typography>
                <Box
                    sx={{
                        padding: '0 1em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>

                    <TextField
                        autoFocus
                        label={'Введите сообщение'}
                        value={text}
                        variant={'standard'}
                        multiline
                        maxRows={4}
                        onChange={textChange}
                        sx={{width: '70%'}}
                    />

                    <Button
                        variant={'contained'}
                        type={'submit'}
                    >
                        {nameButton}
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default TextMessagePage;