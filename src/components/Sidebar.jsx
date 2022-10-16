import React, {useState} from 'react';
import {Box, Button, List, TextField, Typography,} from "@mui/material";
import Chats from "./Chats";
import {useChats} from "../store/chats/useChats";

const Sidebar = ({nameChat}) => {
    const nameField = 'Новый чат';
    const nameButton = 'Добавить';
    const [chatName, setChatName] = useState('');

    const chatNameChange = (event) => {
        setChatName(event.target.value);
    }
    const {addChatsAction} = useChats();

    const addChats = (event) => {
        event.preventDefault();
        const newChat = {
            'id': Date.now(),
            'name': chatName,
        }

        addChatsAction(newChat);
        setChatName(() => '');
    }

    return (
        <>
            <Box
                sx={{
                    marginBottom: '2%',
                    height: '75%',
                    background: '#d8d8e0',
                    borderRadius: '15px',
                    overflow: 'auto',
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

                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>

                    {nameChat.length ?
                        nameChat.map(item =>
                            <Chats
                                key={item.id}
                                name={item.name}
                                id={item.id}
                            />) :
                        (<Chats name={"чатов нет"}/>)
                    }
                </List>
            </Box>

            <Box
                component={'form'}
                onSubmit={addChats}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    height: '23%',
                    background: '#d8d8e0',
                    borderRadius: '15px',
                }}
            >
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
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>

                    <TextField
                        autoFocus
                        label={'Введите сообщение'}
                        value={chatName}
                        variant={'standard'}
                        onChange={chatNameChange}
                        sx={{marginBottom: '5px', width: '70%'}}
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

export default Sidebar;