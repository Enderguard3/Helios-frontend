import moment from "moment";

const getCommentsDetail = id => {
    let news =[]
    news.push({
        id,
        content: 'test long line --------------- ----------------- --------------- ----------------- ------------' +
            '--------------- ----------------- --------------- ----------------- ------------\n' +
            'line 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8',
        user: 'user1',
        date: moment().format()
    })
    return news
}

export default getCommentsDetail
