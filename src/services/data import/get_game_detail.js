import moment from "moment";

const getGamesDetail = id => {
    let games = []
    games.push({
        id,
        title: 'Title' + id,
        desc: 'test long line --------------- ----------------- --------------- ----------------- ------------' +
            '--------------- ----------------- --------------- ----------------- ------------\n' +
            'line 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8\nline 8\nline 8\nline 8\nline 8\nline 8\nline 8',
        price: 10,
        category: "category",
        date: moment().format(),
        nbPlayers: 3,
        age: [9, 99],
        duration: "1 hour"
    })
    return games
}
export default getGamesDetail