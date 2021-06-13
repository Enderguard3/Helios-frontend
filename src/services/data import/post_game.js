const postGame = (title, desc, price, category, nbPlayer, age, duration) => {
    let res = {}
    if (title !== undefined && desc !== undefined && price !== undefined && category !== undefined && nbPlayer !== undefined && age !== undefined && duration !== undefined)
        res = {
            id: 1
        }

    if (res.id === undefined)
        return -1

    return res.id
}

export default postGame