import {TextField, Button} from "@material-ui/core"
import {useState} from "react"
import { useHistory } from "react-router-dom"

const Login = () => {
    const [company, setCompany] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()

        console.log("company : " + company)
        console.log("login : " + login)
        console.log("password : " + password)

        // TODO : appel a l'api pour check le compte

        setCompany("")
        setLogin("")
        setPassword("")

        history.push('/Dashboard')
    }

    const handleChange = event => {
        switch (event.target.id) {
            case "company":
                setCompany(event.target.value)
                break
            case "login":
                setLogin(event.target.value)
                break
            case "password":
                setPassword(event.target.value)
                break
            default:
                break
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="company" label="Company" onChange={handleChange} />
                <TextField id="login" label="Login" onChange={handleChange} />
                <TextField id="password" label="Password" type="password" onChange={handleChange} />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Login