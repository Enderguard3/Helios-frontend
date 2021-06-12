import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {useHistory} from "react-router-dom";
import getGamesDetail from "../services/data import/get_game_detail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GameComponent from "../components/GameComponent";
import PopupGame from "../components/PopupGame";

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
                <PopupGame title_init={game[0].title} desc_init={game[0].desc} price_init={game[0].price}
                           category_init={game[0].category} nbPLayer_init={game[0].nbPlayer} age_init={game[0].age}
                           duration_init={game[0].duration} id={id} />
            </div>

            <Footer />
        </div>
    )
}

export default Game_detail