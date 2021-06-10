import Navbar from '../components/Navbar'
import {Divider, FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core"
import {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import getGames from "../services/data import/get_games"
import Barchart from "../components/Chart/Barchart";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

const Rating = () => {
    const classes = useStyles()
    let games = getGames()
    let [game, setGame] = useState(games[0])


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
                COMMENT
            </Grid>
        </Grid>

        <Footer />
    </div>
}

export default Rating