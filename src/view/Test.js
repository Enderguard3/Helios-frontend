import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import News from '../components/News'
import {makeStyles} from "@material-ui/core";


const style = makeStyles(theme => ({
    news: {
        marginTop: '5%',
    }
}))

const Test = () => {

    const classes = style()

    return <div>
        <Navbar name={"Test"} />
        <News className={classes.news} />

        <Footer />
    </div>
}

export default Test