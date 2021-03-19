import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const News_details = props => {
    let id = props.location.state.id

    return <div>
        <Navbar name={"News_details"} />
        {id}
        <Footer />
    </div>
}

export default News_details