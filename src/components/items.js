import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import EditItem from "./edititem";

const Items = (props) => {
   const { items, onDelete, onEdit } = props;

    return (
        <Grid container spacing={5} style={{ padding: 20 }}>
            {items.map((item) => (
                <React.Fragment key={item.id}>
                    <Grid item xs={3}>
                        <Paper style={{ padding: 20 }}>{item.text}</Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper style={{ padding: 20 }}>{item.description}</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={{ padding: 20 }}>{item.weight}</Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <EditItem onEdit={onEdit} item={item}/>
                    </Grid>
                    <Grid item xs={1}>
                        <Button onClick={() => {onDelete(item.id)}}>
                            <DeleteForeverIcon style={{ padding: 15, fontSize: 30 }}></DeleteForeverIcon>
                        </Button>
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    )
}

export default Items;
