import {TextField, Button, Avatar, CssBaseline, FormControlLabel, Checkbox, Link, Paper, Box, Grid} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {useState} from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

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

    const Copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                LUD'di@g
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        )
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          height: '100vh',
        },
        image: {
          backgroundImage: 'url(https://i.imgur.com/kWmND7h.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        paper: {
          margin: theme.spacing(8, 4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));

      const classes = useStyles();

    return (

        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
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
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
                autoFocus
                onChange={handleChange}
              />
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
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
}

export default Login