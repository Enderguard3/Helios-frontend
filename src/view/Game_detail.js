import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {useHistory} from "react-router-dom";
import getGamesDetail from "../services/data import/get_game_detail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GameComponent from "../components/GameComponent";

const useStyle = makeStyles({
    body: {
        position: 'relative',
        minHeight: '76.4vh'
    }
})

const Game_detail = props => {
    let classes = useStyle()
    let history = useHistory()

    if (props.location.state === undefined){
        history.push('Game')
        return <div/>
    }

    let id = props.location.state.id
    let game = getGamesDetail(id)


    return (
        <div>
            <div className={classes.body}>
                <Navbar name={'Games'} />
                <GameComponent games={game} detail={true}/>
            </div>

            <Footer />
        </div>
    )
}

export default Game_detail