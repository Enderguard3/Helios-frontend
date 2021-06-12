import React from 'react'
import {Card, CardActionArea, CardContent, Divider, makeStyles, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import moment from "moment";

const useStyle = makeStyles(detail => ({
    content: {
        lineHeight: 1,
        height: detail ? '' : '7em',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap'
    },
    info: {
        fontSize: 15,
        marginLeft: 20
    },
    left: {
        float: 'left',
        marginLeft: 20
    },
    right: {
        float: 'right',
        marginRight: 20
    }
}))

const GameComponent = ({games, detail}) => {
    const classes = useStyle(detail)
    const history = useHistory()

    const handleClickPage = (id) => {
        history.push({
            pathname: 'Game_detail',
            state: {id}
        })
    }

    return (
        <div>
            {games.map(item =>
                <Card key={item.id}>
                    <CardActionArea onClick={() => {if (!detail) {handleClickPage(item.id)}}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            {   detail
                                ? <div>
                                    <Typography variant="body2" color="textSecondary" component="pre" className={classes.content}>
                                        {item.desc}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="pre" className={classes.content}>
                                        <p>Price : {item.price}</p>
                                        <p>Players : {item.nbPlayers}</p>
                                        <p>Age : {item.age[0] + '-' + item.age[1]}</p>
                                        <p>Duration : {item.duration}</p>
                                    </Typography>
                                    <div className={classes.info}>
                                        <p className={classes.left}>{item.category}</p>
                                        <p className={classes.right}>{moment(item.date).fromNow()}</p>
                                    </div>
                                </div>
                                : <div>
                                    <Typography variant="body2" color="textSecondary" component="pre" className={classes.content}>
                                        <p>Price : {item.price}</p>
                                        <p>{item.category}</p>
                                    </Typography>
                                    <div className={classes.info}>
                                        <p className={classes.right}>{moment(item.date).fromNow()}</p>
                                    </div>
                                </div>
                            }
                        </CardContent>
                    </CardActionArea>
                    <Divider />
                </Card>
            )}
        </div>
    )
}

export default GameComponent