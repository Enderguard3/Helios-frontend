import {Grid, IconButton, makeStyles} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsComponent from '../components/NewsComponent'
import PopupNews from '../components/PopupNews'

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
    // TODO : load 5 by 5 management (maybe load all in memory and show time by time)
    const classes = style()

    return <div>
        <Navbar name={"News"} />

        <div className={classes.news}>
            <NewsComponent nbNews={5}/>
        </div>
        <Grid container className={classes.action}>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <IconButton className={classes.btnLoad}>
                    <ExpandMoreIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className={classes.btnAdd}>
                <PopupNews from='news' />
            </Grid>
        </Grid>

        <Footer />
    </div>
}

export default News