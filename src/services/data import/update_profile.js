import moment from "moment";

const updateProfile = (title, content, id) => {
    /*
    axios.update('URL_BACK_NEWS/' + id + '/', {
        title,
        content
    })
     */

    return {
        title: title + ' ' + id,
        content: content,
        CompanyName: '© 2021 Hasbro',
        date: moment().format()
    }
}

export default updateProfile
