import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import News from '../components/News'
import PopupNews from '../components/PopupNews';
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles(theme => {
    
}) 


const Test = () => {

    const classes = useStyle()

    return (
        <div>
            <Navbar name={"Test"} />

                <News/>
                <PopupNews />

            <Footer />
        </div>
    )
}

export default Test
