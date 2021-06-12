import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommentComponent from '../components/CommentComponent'
import {useHistory} from "react-router-dom"
import {makeStyles} from "@material-ui/styles";
import getCommentsDetail from "../services/data import/get_comments_detail";

const useStyle = makeStyles({
    body: {
        position: 'relative',
        minHeight: '76.4vh'
    }
})

const Comments_details = props => {
    let classes = useStyle()
    let history = useHistory()

    if (props.location.state === undefined){
        history.push('Comments')
        return <div/>
    }

    let id = props.location.state.id
    let comments = getCommentsDetail(id)

    return <div>
        <div className={classes.body}>
            <Navbar name={'Comments'} />
            <CommentComponent comments={comments} detail={true}/>
        </div>

        <Footer />
    </div>
}

export default Comments_details