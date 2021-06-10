import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import getNewsDetail from '../services/data import/get_news_detail'
import PopupNews from "../components/PopupNews"
import NewsComponent from '../components/NewsComponent'
import {useHistory} from "react-router-dom"
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    body: {
        position: 'relative',
        minHeight: '76.4vh'
    }
})

const News_details = props => {
    let classes = useStyle()
    let history = useHistory()

    if (props.location.state === undefined){
        history.push('News')
        return <div/>
    }


    let id = props.location.state.id
    let news = getNewsDetail(id)

    return <div>
        <div className={classes.body}>
            <Navbar name={'News'} />
            <NewsComponent news={news} detail={true}/>
            <PopupNews title_init={news[0].title} content_init={news[0].content} id={id} />
        </div>

        <Footer />
    </div>
}

export default News_details