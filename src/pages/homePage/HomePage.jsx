import React from 'react';
import {Box, Typography} from "@mui/material";
import ButtonLink from "../../components/ui/ButtonLink";

const HomePage = ({title, arrayOffering, nameButtonLink} ) => {

    return (
        <>
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

                {arrayOffering.map(item =>
                    <Typography
                        variant={"h2"}
                        fontSize={'2rem'}
                        key={item.id}
                    >
                        {item.text}
                    </Typography>
                )}
            </Box>
            <ButtonLink
                to={'/login'}
                setWidth={'30vw'}
                setHeight={'2.5em'}
            >
                {nameButtonLink}
            </ButtonLink>
        </>
    );
};

export default HomePage;