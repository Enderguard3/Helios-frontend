import moment from "moment";

const updateGame = (title, desc, price, category, nbPlayer, age, duration, id) => {
    return {
        title: title + id,
        desc,
        date: moment().format(),
        price,
        category,
        nbPlayer,
        age,
        duration
    }
}

export default updateGame
