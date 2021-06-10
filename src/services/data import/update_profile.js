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
        email: "email",
        siege:'1 Rue de Paris',
        CompanyName: '© 2021 Hasbro',
        nbPost:"3",
        nbfollower:"48",
        nbCommentaire:"54",

    }
}

export default updateProfile
