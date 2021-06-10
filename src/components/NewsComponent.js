import {Card, CardActionArea, CardContent, Typography, makeStyles, Divider} from "@material-ui/core"
import React from 'react'
import moment from 'moment'
import {useHistory} from "react-router-dom"

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
    company: {
        float: 'left',
        marginLeft: 20
    },
    date: {
        float: 'right',
        marginRight: 20
    }
}))

const NewsComponent = ({news, detail}) => {
    const classes = useStyle(detail)
    const history = useHistory()

    const handleClickPage = (id) => {
        history.push({
            pathname: 'News_details',
            state: {id}
        })
    }

    return (
        <div>
            {news.map(item =>
                <Card key={item.id}>
                    <CardActionArea onClick={() => handleClickPage(item.id)}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="pre"
                                            className={classes.content}>
                                    {item.content}
                                </Typography>
                                <div className={classes.info}>
                                    <p className={classes.company}>{item.CompanyName}</p>
                                    <p className={classes.date}>{moment(item.date).fromNow()}</p>
                                </div>
                            </CardContent>
                    </CardActionArea>
                    <Divider />
                </Card>
            )}
        </div>   
    )
}

export default NewsComponent
