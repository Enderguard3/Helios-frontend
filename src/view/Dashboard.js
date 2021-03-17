import {Grid, Typography} from "@material-ui/core"
import {makeStyles, Link} from "@material-ui/core";
import {useHistory} from "react-router-dom"


import Navbar from '../components/Navbar'
import Barchart from "../components/Chart/Barchart"
import News from "../components/News"

const style = makeStyles(theme => ({
    barchart: {
        marginTop: '5%'
    },
    news: {
        marginTop: '5%',
    }
}))

const Dashboard = () => {
    const classes = style()
    const history = useHistory()


    return (
        <div>
            <Navbar name={"Dashboard"} />
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="h4">
                        Ratings :
                    </Typography>
                    <Barchart className={classes.barchart} />
                </Grid>
                <Grid item xs >
                    <Typography variant="h4">
                        <Link onClick={() => {history.push('News')}}>
                        News :
                        </Link>
                    </Typography>
                    <News className={classes.news} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
