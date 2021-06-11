import {Grid, IconButton, makeStyles} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsComponent from '../components/NewsComponent'
import PopupNews from '../components/PopupNews'
import getNews from "../services/data import/get_news"

const style = makeStyles(theme => ({
    news: {
        marginTop: '1%',
    },
    action: {
        marginTop: '1%',
        textAlign: 'center'
    },
    btnAdd: {
        textAlign: 'right'
    },
    btnLoad: {
        color: '#935d5d'
    }
}))

const News = () => {
    const classes = style()
    const allNews = getNews()
    const [nbNewsShown, setNbNewsShown] = useState(5)
    const nbNews = allNews.length

    const handleClickMoreNews = () => {
        if (nbNewsShown+5 > nbNews)
            setNbNewsShown(nbNews)
        else
            setNbNewsShown(nbNewsShown+5)
    }

    return <div>
        <Navbar name={"News"} />

        <div className={classes.news}>
            <NewsComponent news={allNews.splice(0, nbNewsShown)}/>
        </div>
        <Grid container className={classes.action}>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <IconButton className={classes.btnLoad} onClick={handleClickMoreNews}>
                    {nbNewsShown >= nbNews ? null : <ExpandMoreIcon />}
                </IconButton>
            </Grid>
            <Grid item xs={4} className={classes.btnAdd}>
                <PopupNews from='news' title_init={''} content_init={''}/>
            </Grid>
        </Grid>

        <Footer />
    </div>
}



export default News