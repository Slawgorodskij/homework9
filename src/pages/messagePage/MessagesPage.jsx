import React from 'react';
import {Container, Grid} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import TextMessagePage from "../textMessagePage/TextMessagePage";

const MessagesPage = ({nameChat}) => {

    return (
        <Container
            position="fixed"
            maxWidth="false"
            sx={{
                height: 'calc(100vh - 160px)',
            }}>
            <Grid
                container
                columnSpacing={{xs: 1, sm: 2,}}
                sx={{height: '100%'}}
            >
                <Grid
                    item
                    xs={4}
                    sx={{height: '100%'}}
                >
                    <Sidebar nameChat={nameChat}/>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{height: '100%'}}
                >
                    <TextMessagePage />
                </Grid>
            </Grid>
        </Container>
    );
};

export default MessagesPage;