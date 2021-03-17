import {makeStyles, Grid, Typography, Link } from '@material-ui/core'
import { fontFamily, fontWeight, grid } from '@material-ui/system'


const useStyle = makeStyles(theme => ({

    footer : {
        backgroundColor : '#935d5d',
        position: 'absolute',
        width: '99%',
    },
    subFooter: {
        backgroundColor: '#935d5d',
        padding: '8px 16px 8px 16px',
        marginTop: '8px'
    },
    img: {
        float: 'right',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'system-ui' 
    }

}))

const Footer = () => {


    const classes = useStyle()

    return (
        <div className ={classes.footer}>
            <Grid
            container
            spacing = {0}
            >
                <Grid item xs={6}>
                    <h4 className = {classes.title}>CONTACT US</h4>
                    <div className = {classes.title}>
                    <span property="name">Iut Orsay, Plateau de Moulon</span>
                        <div property="address" typeof="PostalAddress">
                            <span property="streetAddress">Rue Noetzlin</span>
                            <span property="addressLocality" style={{ display: 'block' }}>
                            Orsay, Essone{' '}
                            </span>
                            <span property="postalCode">91400</span>
                        </div>
                        <span property="telephone">01 48 59 78 65</span>
                    </div>
                </Grid>

                <Grid item  xs={6}>
                    <h4 className= {classes.title}>LINKS</h4>

                </Grid>

                <Grid className={classes.subFooter} item xs={12}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://material-ui.com/">
                            LUD'di@g
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                    <img className= {classes.img} src="../../assets/icons/luddiag.png" alt="Logo luddiag" width="150"></img>
                </Grid>
            </Grid>


        </div>
    )
}

export default Footer