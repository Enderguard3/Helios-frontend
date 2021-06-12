const getGames = limit => {
    if (limit === undefined)
        limit = 10

    let games = []
    for (let i = 0; i < limit; i++)
        games.push({
            id: i,
            title: 'Title' + i,
            desc: 'test long line --------------- ----------------- --------------- ----------------- ------------' +
                '--------------- ----------------- --------------- ----------------- ------------\n' +
                'line 2\nline 3\nline 4\nline 5\nline 6\nline 7\nline 8',
        })


    return games
}
export default getGames