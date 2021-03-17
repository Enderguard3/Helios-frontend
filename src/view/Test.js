import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import News from '../components/News'
import {makeStyles} from "@material-ui/core";


const style = makeStyles(theme => ({

}))

const Test = () => {

    const classes = style()

    return <div>
        <Navbar name={"Test"} />
        <News/>
        <Footer />
    </div>
}

export default Test