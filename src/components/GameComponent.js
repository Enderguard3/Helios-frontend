import React from 'react'
import {Card, CardActionArea, CardContent, Divider, makeStyles, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const useStyle = makeStyles(detail => ({
    content: {
        lineHeight: 1,
        height: detail ? '' : '7em',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap'
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
                            <Typography variant="body2" color="textSecondary" component="pre"
                                        className={classes.content}>
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Divider />
                </Card>
            )}
        </div>
    )
}

export default GameComponent