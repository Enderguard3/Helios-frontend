import {Divider, FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommentsComponent from '../components/CommentComponent'
import getComments from "../services/data import/get_comments";
import getGames from "../services/data import/get_games";

const style = makeStyles(theme => ({
    comment: {
        marginTop: '1%',
    },
    action: {
        marginTop: '1%',
        textAlign: 'center'
    },
    btnAdd: {
        textAlign: 'right'
    },
    btnLoad: {
        color: '#935d5d'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

const Comments = () => {
    const classes = style()
    const allComments = getComments()
    const [nbCommentShows, setNbCommentShown] = useState(5)
    const nbComment = allComments.length
    let games = getGames()
    let [game, setGame] = useState(games[0])

    let handleGameChange = (event) => {
        setGame(event.target.value);
    }

    const handleClickMoreNews = () => {
        if (nbCommentShows+5 > nbComment)
            setNbCommentShown(nbComment)
        else
            setNbCommentShown(nbCommentShows+5)
    }

    return <div>
        <Navbar name={"Comments"} />

        <Grid container>
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="selectGame">Game</InputLabel>
                    <Select labelId="selectGame" value={game} onChange={handleGameChange}>
                        { games.map(x => <MenuItem value={x}>{x}</MenuItem>) }
                    </Select>
                </FormControl>
                <Divider />
            </Grid>
        </Grid>
        <div className={classes.comment}>
            <CommentsComponent comments={allComments.splice(0, nbCommentShows)}/>
        </div>
        <Grid container className={classes.action}>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <IconButton className={classes.btnLoad} onClick={handleClickMoreNews}>
                    {nbCommentShows >= nbComment ? null : <ExpandMoreIcon />}
                </IconButton>
            </Grid>
            <Grid item xs={4} />
        </Grid>

        <Footer />
    </div>
}



export default Comments