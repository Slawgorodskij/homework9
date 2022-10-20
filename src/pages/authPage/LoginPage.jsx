import React, {useState} from 'react';
import Header from "../../components/Header";
import {useDispatch} from "react-redux";
import {Box, Button, TextField, Typography} from "@mui/material";
import {loginInitiate, registerInitiate} from "../../store/auth/authReducer";
import ButtonLink from "../../components/ui/ButtonLink";
import {useNavigate} from "react-router-dom";

const nameLink = 'На главную';
const addressLink = '/';
const addressLinkRegister = '/register';
const nameLinkRegister = 'Перейти к регистрации';
const buttonName = 'Войти';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate('');

    const login = (event) => {
        event.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        setTimeout(() => {
            navigate('/messages')
        }, 1000)

    }

    return (
        <>
            <Header
                nameLink={nameLink}
                addressLink={addressLink}/>
            <Box
                component={'form'}
                onSubmit={login}
                sx={{
                    padding: '3rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    width: '80%',
                    background: '#d8d8e0',
                    borderRadius: '15px',
                }}
            >
                <Typography
                    component={'h4'}
                    textAlign={'center'}
                >
                    Войти в приложение
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
                        label={'Ваш email'}
                        value={email}
                        variant={'standard'}
                        onChange={(event) => setEmail(event.target.value)}
                        sx={{marginBottom: '5px', width: '70%'}}
                    />
                    <TextField
                        label={'Ваш пароль'}
                        value={password}
                        variant={'standard'}
                        onChange={(event) => setPassword(event.target.value)}
                        sx={{marginBottom: '5px', width: '70%'}}
                    />

                    <Box sx={{display: 'flex', columnGap: '3rem'}}>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                        >
                            {buttonName}
                        </Button>
                        <ButtonLink to={addressLinkRegister} setWidth={'10vw'}
                                    setHeight={'2.5em'}> {nameLinkRegister} </ButtonLink>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default RegisterPage;