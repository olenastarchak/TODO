import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const EditItem = (props) => {
    const { onEdit, item } = props;
    const [ open, setOpen ] = useState(false);
    const { id, text, description, weight } = item;
    const [ value, setValue ] = useState({
        id,
        text,
        description,
        weight
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChanges = (e) => {
        // const { name, value } = e.target;
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const onFormSubmit = () => {
        onEdit(value);
        setOpen(false);
    }

    return (
        <>
            <Button onClick={handleClickOpen}>
                <EditIcon style={{ padding: 15, fontSize: 30 }}></EditIcon>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>
                    Edit dish
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="normal"
                        label="Name"
                        name="text"
                        value={value.text}
                        onChange={handleChanges}
                        fullWidth
                    />
                    <TextField
                        margin="normal"
                        label="Description"
                        name="description"
                        value={value.description}
                        onChange={handleChanges}
                        fullWidth
                    />
                    <TextField
                        margin="normal"
                        label="Weight"
                        name="weight"
                        value={value.weight}
                        onChange={handleChanges}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onFormSubmit} color="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EditItem;