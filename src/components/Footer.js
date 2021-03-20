import {makeStyles, Grid, Typography, Link } from '@material-ui/core'

const useStyle = makeStyles({
    footer : {
        backgroundColor : '#935d5d',
        position: 'static',
        width: '100%',
        marginTop: "15px",
        bottom: 0
    },
    subFooter: {
        backgroundColor: '#935d5d',
        marginLeft: '20px'
    },
    img: {
        float: 'right',
        maxWidth: '10%',
        marginRight: '40px',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'system-ui' 
    }
})

const Footer = () => {
    const classes = useStyle()

    return (
        <div className={classes.footer}>
            <Grid container spacing={0} >
                <Grid item xs={6}>
                    <h4 className = {classes.title}>
                        CONTACT US
                    </h4>
                    <div className = {classes.title}>
                        <span property="name">
                            Iut Orsay, Plateau de Moulon
                        </span>
                        <div property="address" typeof="PostalAddress">
                            <span property="streetAddress">
                                Rue Noetzlin
                            </span>
                            <span property="addressLocality" style={{ display: 'block' }}>
                                Orsay, Essone{' '}
                            </span>
                            <span property="postalCode">
                                91400
                            </span>
                        </div>
                        <span property="telephone">
                            01 48 59 78 65
                        </span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <h4 className= {classes.title}>
                        LINKS
                    </h4>
                </Grid>
                <Grid className={classes.subFooter} item xs={12}>
                    <Grid xs={10}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            <Link color="inherit" href="https://material-ui.com/">
                                LUD'di@g
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Grid>
                    <img className={classes.img} src="luddiag.png" alt="Logo luddiag" width="150" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer