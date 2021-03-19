import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import News from '../components/News'
import PopupNews from '../components/PopupNews';

const Test = () => {
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
