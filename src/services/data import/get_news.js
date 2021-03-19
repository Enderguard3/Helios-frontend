import moment from 'moment'

const getNews = limit => {
    /*
    return axios.get('URL_BACK', {
            editor: editor name jointure vers id de la table editor
            limit: limit
        })
     */

    let news = []
    for (let i = 0; i < limit; i++)
        news.push({
            id: i,
            title: 'Titre ' + i,
            content: 'test long line --------------- ----------------- --------------- ----------------- ------------' +
                '--------------- ----------------- --------------- ----------------- ------------\n' +
                'line 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8',
            CompanyName: '© 2021 Hasbro',
            date: moment().format()
        })

    return news
}
export default getNews