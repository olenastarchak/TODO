import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import AddItem from "./additem";

const Header = ({ onCreate }) => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h4'>
                    Menu
                </Typography>
                <AddItem onItemCreate={onCreate}/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
