import React, {useContext} from 'react';
import {Box, Button, FormControlLabel, Typography} from "@mui/material";
import ButtonLink from "./ui/ButtonLink";
import {ThemeContext} from "../context";
import {MaterialUISwitch} from "./ui/MaterialUISwitch";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logoutInitiate} from "../store/auth/authReducer";

const logo = 'Наш чат';
const linkProfile = 'Профиль';
const linkExit = 'Выход';

const HeaderMessage = ({namePage}) => {
    const {toggleTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate('')

    const logout = () => {
      if(user){
          dispatch(logoutInitiate())
      }
      setTimeout(()=>{
          navigate('/')
      }, 1000)
    }

    return (
        <Box
            sx={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                fontSize={'2rem'}
                color={'#a74826'}
            >
                {logo}
            </Typography>
            <Typography
                fontSize={'1.5rem'}
                color={'#a74826'}
            >
                {namePage}
            </Typography>
            <Box sx={{display: 'flex'}}>
                <ButtonLink to={'/profile'}
                            setWidth={'10vw'}
                            setHeight={'2.5em'}
                            mr={'5px'}
                >
                    {linkProfile}
                </ButtonLink>
                <Button
                    onClick={logout}
                >
                    {linkExit}
                </Button>
                <FormControlLabel
                    onClick={toggleTheme}
                    control={<MaterialUISwitch sx={{m: 1}} defaultChecked/>}
                    label=""
                />
            </Box>
        </Box>
    );
};

export default HeaderMessage;