import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import ButtonLink from "../components/ui/ButtonLink";
import {Box, Button, TextField, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {db} from "../services/firebase";

const buttonName = 'Сохранить';
const nameLink = 'Выйти';
const addressLink = '/';
const nameButtonLink = 'Вернуться на страницу сообщений';
const initialState = {
    name: '',
    email: '',
    dateOfBirth: '',
    city: '',
}
const ProfilePage = () => {

    const user = useSelector(state => state.user.currentUser);
    const [data, setData] = useState(initialState);
    useEffect(() => {
        db.child('profile').on('value', (snap) => {
            if (snap.val() !== null) {
                setData({...snap.val()})
            } else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [])

    if (data.name === '') {
        setData({name: user.displayName, email: user.email})
    }
const handleChange = (event) =>{
        const {name, value} = event.target;
    console.log(event.target.name)
        setData({...data, [name]:value})

}
   const registerProfile =(event)=>{
       console.log(data)
        event.preventDefault();
        db.child('profile').push(data,(error)=>{
            if(error){
                console.log(error)
            }
        })
   }
    return (
        <>
            <Header
                nameLink={nameLink}
                addressLink={addressLink}
            />

            <Box
                component={'form'}
                onSubmit={registerProfile}
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
                    Редактирование профиля
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
                        label={'Ваше имя'}
                        name={'name'}
                        variant={'standard'}
                        onChange={handleChange}
                        sx={{marginBottom: '5px', width: '70%'}}
                    />

                    <TextField
                        label={'Ваш email'}
                        name={'email'}
                        variant={'standard'}
                        onChange={handleChange}
                        sx={{marginBottom: '5px', width: '70%'}}
                    />
                    <TextField
                        label={'Ваш год рождения'}
                        name={'dateOfBirth'}
                        variant={'standard'}
                        onChange={handleChange}
                        sx={{marginBottom: '5px', width: '70%'}}
                    />
                    <TextField
                        label={'Ваш город'}
                        name={'city'}
                        variant={'standard'}
                        onChange={handleChange}
                        sx={{marginBottom: '5px', width: '70%'}}
                    />
                    <Box sx={{display: 'flex', columnGap: '3rem'}}>
                        <Button
                            variant={'contained'}
                            type={'submit'}
                        >
                            {buttonName}
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ButtonLink
                to={'/messages'}
                setWidth={'30vw'}
                setHeight={'2.5em'}
            >
                {nameButtonLink}
            </ButtonLink>
        </>
    );
};

export default ProfilePage;