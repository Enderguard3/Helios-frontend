import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import getNewsDetail from '../services/data import/get_news_detail'
import PopupNews from "../components/PopupNews";
import NewsComponent from '../components/NewsComponent'

const News_details = props => {
    let id = props.location.state.id
    const news = getNewsDetail(id)

    return <div>
        <Navbar name={news.title} />
        <NewsComponent news={news}/>
        <PopupNews title_init={news.title} content_init={news.content} id={id} />

        <Footer />
    </div>
}

export default News_details