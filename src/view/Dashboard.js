import {Grid, Typography} from "@material-ui/core";

import Navbar from '../components/Navbar'
import Barchart from "../services/charts/Barchart";

const Dashboard = () => {
    return (
        <div>
            <Navbar name={"Dashboard"} />
            <Grid container >
                <Grid item xs={9}>
                    <Typography variant="h4">
                        Ratings :
                    </Typography>
                    <Barchart />
                </Grid>
                <Grid item xs>
                    <Typography variant="h4">
                        News :
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard