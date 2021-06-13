import { makeStyles, Container, Grid, Paper} from "@material-ui/core"
import React from 'react'
import logo from "../assets/brandlogo/logoAsmodee.png"
import { useHistory } from "react-router-dom"
import PopupProfile from "./PopupProfile"

const useStyle = makeStyles({
    box:{
        display:'flex',
        width:'100%',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        width:'700px',
        height:'600px',
        backgroundColor: 'white',
        borderRadius:'10px',
        boxShadow:'10px 1px 10px 1px black'

    },
    upperContainer:{
        heigt:'100px',
        background:'linear-gradient(to left,#2d00F7,#ff0291)'

    },
    imageContainer: {
        background:'white',
        width:'100px',
        height:'100px',
        borderRadius:'50%',
        padding:'5px',
        marginLeft:'auto',
        marginRight:'auto',
        border:'2px solid #8e00b9',
    },

    lowerContainer: {
        margintop:'100px',
        height:'300px',
        backgroundColor:'white',
        textAlign:'center'
    },
    btn:{
        margin:'auto',
        color:'#2f2d2e',
        font:'bold',
        backgroundColor:'white',
        border:'2px solid #8e00b9',
        padding:'auto'
    },
    lowerBox:{
        paddingTop:'100px',
        paddingBottom:'30px'
    },
    spacing:{
        paddingTop:'20px'
    }
})

const ProfileComponent = () => {
    const classes = useStyle()
    const history = useHistory()
    
    const handleClickPage = (id) => {
        history.push({
            pathname: 'Profile',
            state: {id}
        })
    }

    return (
        <Container fi>
            <div className={classes.box}>
                <div className={classes.card}>
                    <div className={classes.upperContainer}>
                        <div className={classes.imageContainer}>
                            <img src={logo} alt="profile img" height="100px" width="100px"/>
                        </div>
                    </div>
                    <div className={classes.lowerContainer}>
                        <Grid container spacing={6}>
                            <Grid item xs={12}>
                                <Paper>
                                    Nom entreprise
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper
                                elevation={3}
                                variant="outlined">
                                    Posts
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper
                                elevation={3}
                                variant="outlined">
                                    Commentaire
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper
                                elevation={3}
                                variant="outlined">
                                    nbPosts
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper
                                elevation={3}
                                variant="outlined">
                                    nbCommentaires
                                </Paper>
                            </Grid>
                        </Grid>
                        <div className={classes.lowerBox}>
                            <div className={classes.spacing}>Mail</div>
                        </div>
                        <PopupProfile />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProfileComponent
