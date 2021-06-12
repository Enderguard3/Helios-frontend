import React, {useState} from 'react';
import {Button, makeStyles, Dialog, DialogTitle, DialogContent, TextField, IconButton, Grid} from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox'
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom'
import postGame from "../services/data import/post_game";
import updateGame from "../services/data import/update_game";

const useStyle = makeStyles(theme => ({
    button : {
        color: '#935d5d',
        justifyContent: 'center'
    },
    form: {
        width: '90%',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

const PopupGame = ({from, title_init, desc_init, id, price_init, category_init, nbPLayer_init, age_init, duration_init}) => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(title_init)
    const [desc, setDesc] = useState(desc_init)
    const [price, setPrice] = useState(price_init)
    const [category, setCategory] = useState(category_init)
    const [nbPlayer, setNbPlayer] = useState(nbPLayer_init)
    const [age, setAge] = useState(age_init)
    const [duration, setDuration] = useState(duration_init)
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()

        if (from === 'games') {
            let res = postGame(title, desc, price, category, nbPlayer, age, duration)
            if (res !== -1)
                history.push({
                    pathname: 'Game_detail',
                    state: {
                        id: res
                    }
                })
        }
        else {
            updateGame(title, desc, price, category, nbPlayer, age, duration, id)
            history.push({
                pathname: 'Game_detail',
                state: {id}
            })
        }

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
                {from === 'games' ? <AddBox /> : <EditIcon />}
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true}>
                <DialogTitle>{ from === 'games' ? 'Add game' : 'Update game'}</DialogTitle>
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
                            value={title}
                            onChange={event => setTitle(event.target.value)} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            name="Desc"
                            label="Description"
                            type="Content"
                            id="Desc"
                            autoComplete="current-password"
                            value={desc}
                            onChange={event => setDesc(event.target.value)}  />
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Category"
                                    label="Category"
                                    name="Category"
                                    autoComplete="Category"
                                    autoFocus
                                    value={category}
                                    onChange={event => setCategory(event.target.value)} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Price"
                                    label="Price"
                                    name="Price"
                                    autoComplete="Price"
                                    autoFocus
                                    value={price}
                                    onChange={event => setPrice(event.target.value)} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="Duration"
                                    label="Duration"
                                    name="Duration"
                                    autoComplete="Duration"
                                    autoFocus
                                    value={duration}
                                    onChange={event => setDuration(event.target.value)} />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="nbPlayer"
                                    label="nbPlayer"
                                    name="nbPlayer"
                                    autoComplete="nbPlayer"
                                    autoFocus
                                    value={nbPlayer}
                                    onChange={event => setNbPlayer(event.target.value)} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="AgeMin"
                                    label="Age minimum"
                                    name="AgeMin"
                                    autoComplete="AgeMin"
                                    autoFocus
                                    value={age[0]}
                                    onChange={event => setAge([event.target.value, age[1]])} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="AgeMax"
                                    label="Age maximum"
                                    name="AgeMax"
                                    autoComplete="AgeMax"
                                    autoFocus
                                    value={age[1]}
                                    onChange={event => setAge([age[0], event.target.value])} />
                            </Grid>
                        </Grid>
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

export default PopupGame