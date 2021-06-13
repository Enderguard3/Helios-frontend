import Navbar from '../components/Navbar'
import {Divider, FormControl, Grid, InputLabel, Link, MenuItem, Select, Typography} from "@material-ui/core"
import {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import getGames from "../services/data import/get_games"
import Barchart from "../components/Chart/Barchart";
import Footer from "../components/Footer";
import {useHistory} from "react-router-dom";
import CommentComponent from "../components/CommentComponent";
import getComments from "../services/data import/get_comments";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    title: {
        marginTop: '3%',
        marginBottom: '2.2%',
    }
}));

const Rating = () => {
    const classes = useStyles()
    let games = getGames()
    let [game, setGame] = useState(games[0])
    const history = useHistory()
    const comments = getComments(3)

    let handleGameChange = (event) => {
        setGame(event.target.value);
    }

    return <div>
        <Navbar name={"Rating"} />

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
            <Grid item xs={8}>
                <Barchart from={"rating"} game={game}/>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h4" className={classes.title}>
                    <Link onClick={() => {history.push('Comments')}}>
                        Comments :
                    </Link>
                </Typography>
                <CommentComponent comments={comments} />
            </Grid>
        </Grid>

        <Footer />
    </div>
}

export default Rating