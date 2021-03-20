const postNews = (title, content) => {
    /*
    res = axios.post('URL_BACK_POST_NEWS', {
        title,
        content,
        company: localStorage.getItem('company'),
        date: moment().format()
    })
     */
    let res = {}
    if (title !== undefined && content !== undefined)
        res = {
            id: 1
        }

    if (res.id === undefined)
        return -1

    return res.id
}

export default postNews