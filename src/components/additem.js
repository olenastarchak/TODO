import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const AddItem = ({ onItemCreate }) => {
    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState({id:'', text:'', description:'', weight:''});

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleChanges = (e) => {
        const { name, value: targetValue } = e.target;
        setValue({
            ...value,
            id:uuidv4(),
            [name]: targetValue
        })
    }

    const onFormSubmit = () => {
        onItemCreate(value);
        setOpen(false);
        setValue({id:'', text:'', description:'', weight:''});
    }

    return (
        <>
            <Button onClick={handleOpenModal}>
                <AddCircleOutlinedIcon></AddCircleOutlinedIcon>
            </Button>
            <Dialog
                open={open}
                onClose={handleCloseModal}>
                <DialogTitle>
                    Create new dish
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
                    <Button onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddItem;
