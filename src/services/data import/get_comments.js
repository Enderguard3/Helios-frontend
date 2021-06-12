import moment from 'moment'

const getComments = limit => {
    if (limit === undefined)
        limit = 6

    let comments = []
    for (let i = 0; i < limit; i++)
        comments.push({
            id: i,
            content: 'test long line --------------- ----------------- --------------- ----------------- ------------' +
                '--------------- ----------------- --------------- ----------------- ------------\n' +
                'line 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8',
            user: 'user1',
            date: moment().format()
        })


    return comments
}
export default getComments