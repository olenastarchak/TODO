import React, { useState } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@material-ui/core";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const AddItem = ({ onItemCreate }) => {
    const [ open, setOpen ] = useState(false);
    const [ value, setValue ] = useState({id:'', text:'', description:'', weight:''});
    const { errors, register, handleSubmit } = useForm();

    const handleModal = (boolean) => {
        setOpen(boolean);
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
            <Button onClick={() => handleModal(true)}>
                <AddCircleOutlinedIcon></AddCircleOutlinedIcon>
            </Button>
            <Dialog
                open={open}
                onClose={() => handleModal(false)}>
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
                        inputRef={register({ required: "Name is required" })}
                        fullWidth
                    />
                    <ErrorMessage errors={errors} name="text" />
                    <TextField
                        margin="normal"
                        label="Description"
                        name="description"
                        value={value.description}
                        onChange={handleChanges}
                        inputRef={register({ required: "Description is required" })}
                        fullWidth
                    />
                    <ErrorMessage errors={errors} name="description" />
                    <TextField
                        margin="normal"
                        label="Weight"
                        name="weight"
                        value={value.weight}
                        onChange={handleChanges}
                        inputRef={register({ required: "Weight is required" })}
                        fullWidth
                    />
                    <ErrorMessage errors={errors} name="weight" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit(onFormSubmit)} color="primary">
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

export default AddItem;
