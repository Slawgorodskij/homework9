import React, {useContext} from 'react';
import {Box, FormControlLabel, Typography} from "@mui/material";
import {MaterialUISwitch} from "./ui/MaterialUISwitch";

import ButtonLink from "./ui/ButtonLink";
import {ThemeContext} from "../context";

const logo = 'Наш чат'
const Header = ({addressLink, nameLink}) => {
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <>
            <Box
                sx={{
                    width: '80%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography fontSize={'2rem'} color={'#a74826'}>{logo}</Typography>
                <Box
                sx={{
                    display: 'flex',
                }}
                >
                    <ButtonLink to={addressLink} setWidth={'10vw'} setHeight={'2.5em'}> {nameLink} </ButtonLink>
                    <FormControlLabel
                        onClick={toggleTheme}
                        control={<MaterialUISwitch sx={{m: 1}} defaultChecked/>}
                        label=""
                    />
                </Box>
            </Box>

        </>
    );
};

export default Header;