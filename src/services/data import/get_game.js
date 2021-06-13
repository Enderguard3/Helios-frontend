import moment from "moment";

const getGames = limit => {
    if (limit === undefined)
        limit = 10

    let games = []
    for (let i = 0; i < limit; i++)
        games.push({
            id: i,
            title: 'Title' + i,
            price: 10,
            category: "category",
            date: moment().format()
        })


    return games
}
export default getGames