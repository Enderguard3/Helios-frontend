import { TextField, Typography, Button, Box, Grid} from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import login_auth_token from '../services/auth/login'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://i.imgur.com/kWmND7h.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const [company, setCompany] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        login_auth_token(company, login, password).then(res => {
            if (res === 0)
                history.push('/Dashboard')
        })
    }

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5}>
                <div className={classes.paper}>
                    <Typography component="h1">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="company"
                            label="Company"
                            name="company"
                            autoComplete="company"
                            autoFocus
                            onChange={event => setCompany(event.target.value)} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            autoComplete="login"
                            onChange={event => setLogin(event.target.value)} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={event => setPassword(event.target.value)} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit} >
                            Sign In
                        </Button>
                        <Box mt={5}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                Copyright © LUD'di@g {new Date().getFullYear()}
                            </Typography>
                        </Box>
                    </form>
                </div>
            </Grid>
      </Grid>
    );
}

export default Login