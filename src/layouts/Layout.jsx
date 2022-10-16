import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Container} from "@mui/material";
import Footer from "../components/Footer";
import {ThemeContext, themes} from "../context";

const Layout = () => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        console.log('work')
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }
    return (
        <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
            <Container
                maxWidth="false"
                sx={{
                    padding: '5px',
                    height: '100vh',
                    background: 'linear-gradient(145deg, #1a5251 45%, #529898 90%)',
                }}
            >
                <Container
                    sx={{
                        padding: '5px',
                        height: 'calc(100vh - 10px)',
                        borderRadius: '30px',
                        background: theme.background,
                    }}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '5px',
                            height: 'calc(100vh - 20px)',
                            borderRadius: '30px',
                            background: 'linear-gradient(180deg, #244e4d 40%, #529898 90%)',
                        }}
                    >
                        <Outlet/>

                        <Footer/>

                    </Container>
                </Container>
            </Container>
        </ThemeContext.Provider>
    );

};

export default Layout;