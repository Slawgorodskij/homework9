import React from 'react';
import {Box} from "@mui/material";
import {Link} from "react-router-dom";

const linkStyle = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.01em',
    color: '#f4eae1',
};

const ButtonLink = ({to, children, setWidth, setHeight, mr = 0}) => {
    return (
        <Box
            sx={{
                marginRight: mr,
                padding: '0 5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: setWidth,
                height: setHeight,
                borderRadius: '5px',
                backgroundColor: '#94b6b7',
                '&:hover': {
                    backgroundColor: '#87a0a1',
                },
            }}
        >
            <Link
                to={to}
                style={linkStyle}
            >
                {children}
            </Link>
        </Box>
    );
};

export default ButtonLink;