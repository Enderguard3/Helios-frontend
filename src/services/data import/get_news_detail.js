import moment from "moment";

const getNewsDetail = id => {
    /*
    return axios.get('URL_BACK_NEWS_DETAIL/' + id + '/')
     */

    return {
        title: 'Titre ' + id,
        content: 'test long line --------------- ----------------- --------------- ----------------- ------------' +
            '--------------- ----------------- --------------- ----------------- ------------\n' +
            'line 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8',
        CompanyName: '© 2021 Hasbro',
        date: moment().format()
    }
}

export default getNewsDetail
