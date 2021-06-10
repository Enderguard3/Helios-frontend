import React, {useState} from 'react';
import {Button, makeStyles, Dialog, DialogTitle, DialogContent, TextField,IconButton}
    from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox'
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

const PopupProfile = ({from, title_init, content_init, id}) => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(title_init)
    const [content, setContent] = useState(content_init)
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        updateProfile(title, content, id)
        history.push({
            pathname: 'Profile',
            state: {id}
        })
        handleClose()
    }

    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}

    return (
        <div>
            <IconButton
                variant="contained"
                className={classes.button}
                onClick={handleOpen}>
                {from === 'news' ? <AddBox /> : <EditIcon />}
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle>Add news</DialogTitle>
                <DialogContent>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Title"
                                label="Title"
                                name="Title"
                                autoComplete="Title"
                                autoFocus
                                value={title_init}
                                onChange={event => setTitle(event.target.value)} />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                multiline
                                name="Content"
                                label="Content"
                                type="Content"
                                id="Content"
                                autoComplete="current-password"
                                value={content}
                                onChange={event => setContent(event.target.value)}  />
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