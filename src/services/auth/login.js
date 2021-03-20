const login_auth_token = (company, login, password) => {
    /*
    res = axios.post('URL_BACK_AUTH', {
        company,
        login,
        password
    })
     */

    let res = {}
    if(company === 'company' && login === 'login' && password === 'password')
        res = {
            token: 'ioerffjizoefijzpefjzeoijqzoefjqzeo'
        }

    if (res.token === undefined)
        return 1

    localStorage.setItem('token', res.token)
    localStorage.setItem('company', company)
    return 0
}

export default login_auth_token
