import {Card,CardActions,CardActionArea,CardContent,Typography,makeStyles, Button} from "@material-ui/core"
import React, {useEffect, useState} from 'react'

const useStyle = makeStyles({
    news: {
        borderBottom : "1px solid black"
    },
    news_list: {
        borderTop : "1px solid black",
        borderRight : "1px solid black",
        borderLeft : "1px solid black",
    }
})

const News = () => {

    const classes = useStyle();
    const [news, setNews] = useState([]);

    // function GetNEWS()
    /*
    fetch(URL_BACK)
    .then(res => res.json())
    .then(
        (result) => {
            setNews(result)
        }
    )
    */
    useEffect(() => {
        //appel function GetNEWS
    })

    return (
        <div>
            {news.map(item => 
                <Card>
                    <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.content}
                                </Typography>
                            </CardContent>
                    </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>                
                </Card>
            )}            
        </div>   
    )
}

export default News
