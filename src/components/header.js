import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import AddItem from "./additem";

const Header = (props) => {
    const { onCreate } = props;
    const onAddItem = (item) => {
        onCreate(item);
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h4'>
                    Menu
                </Typography>
                <AddItem onItemCreate={onAddItem}/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
