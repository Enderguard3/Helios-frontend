import {Grid, Typography} from "@material-ui/core"
import {makeStyles, Link} from "@material-ui/core"
import {useHistory} from "react-router-dom"

import Navbar from '../components/Navbar'
import NewsComponent from "../components/NewsComponent"
import Footer from "../components/Footer"

import getNews from "../services/data import/get_news"

const style = makeStyles(theme => ({
    title: {
        marginTop: '3%',
        marginBottom: '2.2%',
    }
}))

const Dashboard = () => {
    const classes = style()
    const history = useHistory()
    const news = getNews(3)

    return (
        <div>
            <Navbar name={"Dashboard"} />

            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="h4" className={classes.title}>
                        <Link onClick={() => {history.push('Rating')}}>
                            Rating :
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h4" className={classes.title}>
                        <Link onClick={() => {history.push('News')}}>
                            News :
                        </Link>
                    </Typography>
                    <NewsComponent news={news}/>
                </Grid>
            </Grid>

            <Footer />
        </div>
    )
}

export default Dashboard
