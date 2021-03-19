import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsComponent from '../components/NewsComponent'
import PopupNews from '../components/PopupNews';

const Test = () => {
    return (
        <div>
            <Navbar name={"Test"} />

                <NewsComponent/>
                <PopupNews />

            <Footer />
        </div>
    )
}

export default Test
