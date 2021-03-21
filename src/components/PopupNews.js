import React, {useState} from 'react';
import {Button, makeStyles, Modal, Backdrop, Container, CssBaseline, Typography, TextField, IconButton}
    from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox'
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom'
import postNews from "../services/data import/post_news"
import updateNews from "../services/data import/update_news";

const useStyle = makeStyles(theme => ({
    button : {
        color: '#935d5d',
        justifyContent: 'center'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_body: {
        color: '',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        width: '500px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '10px'
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}))

const PopupNews = ({from, title_init, content_init, id}) => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(title_init)
    const [content, setContent] = useState(content_init)
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()

        if (from === 'news') {
            let res = postNews(title, content)
            if (res !== -1)
                history.push({
                    pathname: 'News_details',
                    state: {
                        id: res
                    }
                })
        }
        else {
            updateNews(title, content, id)
            history.push({
                pathname: 'News_details',
                state: {
                    id
                }
            })
        }

        handleClose()
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        // TODO : Alan, /!\ modal give a warning : findDOMNode is deprecated in StrictMode
        // TODO : content textarea multiline & taille fix & taille modale plus grande
        <div>
            <IconButton
                variant="contained"
                className={classes.button}
                onClick={handleOpen}>
                {from === 'news' ? <AddBox /> : <EditIcon />}
            </IconButton>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }} >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                          Add news
                        </Typography>
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
                    </div>
                </Container>
            </Modal>
        </div>
      );
}

export default PopupNews