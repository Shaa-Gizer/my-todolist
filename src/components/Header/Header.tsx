import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

const Header = () => {

    const style = {
        background: '#2ca46a'
    }

    return (
        <AppBar position="fixed" style={style} color="secondary">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <Menu/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    TODOLISTS
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;