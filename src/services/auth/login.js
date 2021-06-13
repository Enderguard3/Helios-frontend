import axios from 'axios'

const login_auth_token = async (company, login, password) => {
    let res = (await axios.post("http://localhost:8080/account_editor/connection", {
        editor_name: company,
        login: login,
        password: password
    }).catch(() => {return 0})).data

    if (res !== undefined) {
        localStorage.setItem('id_editor', res.id_editor)
        return 0
    }

    return -1
}

export default login_auth_token
