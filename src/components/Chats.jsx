import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import {useChats} from "../store/chats/useChats";

let linkStyle = {
    width: '100%',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.01em',
    color: '#827771',
};

const Chats = ({name, id,}) => {
    const {chatId} = useParams();
    let buttonStyle;

    if (+chatId === +id) {
        buttonStyle = {
            borderRadius: '5px',
            backgroundColor: '#1a5251',
        }
    }
    const {deleteChatsAction} = useChats();

    const dropChat = (id) => {
        deleteChatsAction(id);
    }

    return (
        <ListItem
            disablePadding
            sx={buttonStyle}
        >
            <Link
                to={`/messages/${id}`}
                style={linkStyle}
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={name}/>
                </ListItemButton>
            </Link>
            <IconButton
                onClick={() => dropChat(id)}
                key={id}
                disabled={!id}
                aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
};

export default Chats;