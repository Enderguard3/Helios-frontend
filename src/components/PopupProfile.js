import React, {useState} from 'react';
import {Button, makeStyles, Dialog, DialogTitle, DialogContent, TextField,IconButton}
    from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom'
import updateProfile from "../services/data import/update_profile";

const useStyle = makeStyles(theme => ({
    button : {
        color: '#935d5d',
        justifyContent: 'center'
    },

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        width: '900px',
        height: '700px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderRadius: '10px'
    },
    form: {
        width: '90%',

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        marginTop:'50%',
    },

}))

const PopupProfile = ({from, email_init, id}) => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState(email_init)
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        updateProfile( email, id)
        history.push({
            pathname: 'Profile',
            state: {id}
        })
        handleClose()
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <IconButton
                variant="contained"
                className={classes.button}
                onClick={handleOpen}>
                {from === 'profile' ? <EditIcon /> : <EditIcon />}
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle>Modify profile </DialogTitle>
                <DialogContent>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                multiline
                                name="email"
                                label="Email"
                                type="mail"
                                id="email"
                                autoComplete="current-email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}  />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit} >
                                submit
                            </Button>
                        </form>
                </DialogContent>
            </Dialog>
        </div>
      )
}

export default PopupProfile