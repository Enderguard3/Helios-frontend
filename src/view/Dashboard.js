import {Grid, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core";

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
                        News :
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
