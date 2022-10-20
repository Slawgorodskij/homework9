import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const OneMessage = ({id, author, text}) => {
    let styleCard = {
        width: '80%',
        marginBottom: '5px',
        marginLeft: 'auto',
    };

    if (id % 2 === 0) {
        styleCard = {
            width: '80%',
            marginBottom: '5px',
            marginRight: 'auto',
        };
    }
    return (
        <Card sx={styleCard}>
            <CardContent>
                <Typography variant={'body1'}>
                    {author}
                </Typography>
                <Typography variant={'body2'}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default OneMessage;