import {Card,CardActions,CardActionArea,CardContent,Typography,makeStyles, Divider} from "@material-ui/core"
import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {useHistory} from "react-router-dom"

const useStyle = makeStyles({
    content: {
        textOverflow: "ellipsis"
    },
    info: {
        fontSize: "15px",
        marginLeft: "20px"
    },
    date: {
        float: "right",
        marginRight: "20px"
    }

    
})

const News = () => {

    const classes = useStyle();
    const [news, setNews] = useState([]);
    const history = useHistory()

    const handleClickPage = (id) => {
        history.push('News_details')
    }

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

    const newsList = [
        {id: 1, title:"Test n1", content:"blablablblalablablablablabalbabllablbalablablablbalab\nlablabgbfuzhjsgcsjhdgdfhkjhwfdkjgrshkfgshjfsgjhf", CompanyName: "© 2021 Hasbro", date_: "2021-03-17T16:10"},
        {id: 2, title:"Test n2", content:"blablablblalablablablablabalbabllablbalablablablbalablablab", CompanyName: "© 2021 Hasbro", date_: "2021-03-17T16:10"},
        {id: 3, title:"Test n1", content:"blablablblalablablablablabalbabllablbalablablablbalablablab", CompanyName: "© 2021 Hasbro", date_: "2021-03-17T16:10"},
        {id: 4, title:"Test n1", content:"blablablblalablablablablabalbabllablbalablablablbalablablab", CompanyName: "© 2021 Hasbro", date_: "2021-03-17T16:10"},
        {id: 5, title:"Test n1", content:"blablablblalablablablablabalbabllablbalablablablbalablablab", CompanyName: "© 2021 Hasbro", date_: "2021-03-17T16:10"},
        {id: 6, title:"Test n6", content:"blablablblalablablablablabalbabllablbalablablablbalablablab", CompanyName: "© 2021 Hasbro", date_: "2021-03-18T14:10"},

       ]

    return (
        <div>
            {newsList.map(item => 
                <Card>
                    <CardActionArea onClick={() => handleClickPage(item.id)}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <pre>
                                <Typography variant="body2" color="textSecondary" component="p" >
                                        {item.content}          
                                </Typography>
                                </pre>
                            </CardContent>
                            <div className={classes.info}>
                                <a>{item.CompanyName}</a> 
                                <a className={classes.date}> {moment(item.date_).fromNow()}</a>
                            </div> 

                    </CardActionArea>                
                </Card>
            )}            
        </div>   
    )
}

export default News
