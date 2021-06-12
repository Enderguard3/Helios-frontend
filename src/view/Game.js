import React, {useState} from 'react'
import {Grid, IconButton, makeStyles} from "@material-ui/core";
import getGames from "../services/data import/get_game";
import Navbar from "../components/Navbar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "../components/Footer";
import GameComponent from "../components/GameComponent";

const style = makeStyles(theme => ({
    comment: {
        marginTop: '1%',
    },
    action: {
        marginTop: '1%',
        textAlign: 'center'
    },
    btnLoad: {
        color: '#935d5d'
    },
}))

const Game = () => {
    const classes = style()
    const allGames = getGames()
    const [nbGameShown, setNbGameShown] = useState(5)
    const nbGame = allGames.length

    const handleClickMoreNews = () => {
        if (nbGameShown+5 > nbGame)
            setNbGameShown(nbGame)
        else
            setNbGameShown(nbGameShown+5)
    }

    return (
        <div>
            <Navbar name={"Games"} />

            <div className={classes.comment}>
                <GameComponent games={allGames.splice(0, nbGameShown)}/>
            </div>
            <Grid container className={classes.action}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <IconButton className={classes.btnLoad} onClick={handleClickMoreNews}>
                        {nbGameShown >= nbGame ? null : <ExpandMoreIcon />}
                    </IconButton>
                </Grid>
                <Grid item xs={4} />
            </Grid>

            <Footer />
        </div>
    )
}

export default Game