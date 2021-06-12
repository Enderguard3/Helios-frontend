const updateProfile = (title, localisation,email, password,id) => {
    /*
    axios.update('URL_BACK_NEWS/' + id + '/', {
        title,
        content
    })
     */

    return {
        title: title + ' ' + id,
        email: "email",
        localisation:'1 Rue de Paris',
        password: '**********',


    }
}

export default updateProfile
