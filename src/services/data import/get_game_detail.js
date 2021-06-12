const getGamesDetail = id => {
    let games = []
    games.push({
        id,
        title: 'Title' + id,
        desc: 'test long line --------------- ----------------- --------------- ----------------- ------------' +
            '--------------- ----------------- --------------- ----------------- ------------\n' +
            'line 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8',
    })
    return games
}
export default getGamesDetail