import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const EditItem = ({ onEdit, item }) => {
    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState({
        ...item
    });

    const handleModal = (boolean) => {
        setOpen(boolean);
    };

    const handleChanges = (e) => {
        const { name, value: targetValue } = e.target;
        setValue({
            ...value,
            [name]: targetValue
        })
    }

    const onFormSubmit = () => {
        onEdit(value);
        setOpen(false);
    }

    const editIconStyle = {
        padding: 15,
        fontSize: 30
    }

    return (
        <>
            <Button onClick={() => handleModal(true)}>
                <EditIcon style={editIconStyle}></EditIcon>
            </Button>
            <Dialog
                open={open}
                onClose={() => handleModal(false)}>
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
                    <Button onClick={() => handleModal(false)} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EditItem;
