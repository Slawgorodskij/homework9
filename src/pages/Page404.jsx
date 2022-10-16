import React from 'react';
import {Box, Typography} from "@mui/material";
import Header from "../components/Header";
import ButtonLink from "../components/ui/ButtonLink";

const Page404 = () => {
    const title = 'что-то пошло не так';
    const nameLink = 'Войти';
    const addressLink = '/';
    const nameButtonLink = 'Перейти на главную';

    return (
        <>
            <Header
                nameLink={nameLink}
                addressLink={addressLink}
            />
            <Box
                sx={{
                    color: '#d5dde3',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant={"h1"}
                    fontSize={'2.5rem'}
                >
                    {title}
                </Typography>
            </Box>
            <ButtonLink
                to={'/'}
                setWidth={'30vw'}
                setHeight={'2.5em'}
            >
                {nameButtonLink}
            </ButtonLink>
        </>
    );
};

export default Page404;