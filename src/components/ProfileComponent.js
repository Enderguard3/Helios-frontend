import { makeStyles, Container, Grid, Paper, Button} from "@material-ui/core"
import React from 'react'
import logo from "../assets/brandlogo/logoAsmodee.png"

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
    }
})

const ProfileComponent = ({news}) => {
    
    const classes = useStyle();

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
                        <Grid item xs={6} sm={4}>
                            <Paper
                            elevation={3} 
                            variant="outlined">
                                Followers
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Paper                        
                            elevation={3} 
                            variant="outlined">
                                Posts
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Paper                        
                            elevation={3} 
                            variant="outlined">
                                Commentaire
                            </Paper>
                        </Grid>
                    </Grid>
                    <div>Localisation siège sociale</div>
                    <div>Email</div>
                    <div>Mot de passe</div>
                    <Button variant="contained" color="primary">
                        Modifier
                    </Button>
                </div>
            </div>
        </div>
        </Container>
        
    )
}

export default ProfileComponent
