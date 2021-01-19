import React from 'react'
import Typed from 'react-typed'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Avatar,
    Grid,
    Box
} 
from '@material-ui/core'
import dhrubo from '../images/dhrubo.jpg'


//CSS Styles

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: 'tomato'
    },
    subtitle: {
        color: '#BCE0F8',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    },
}))

function Header() {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src= {dhrubo} alt='Dhrubo Talukder' />
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={['Dhrubo Talukder']} typeSpeed={40}/>
            </Typography>
            <br />
            <Typography className={classes.subtitle}  variant='h5'>
                <Typed strings={['Software Engineering','Full Stack Web Development', 'Ruby on Rails', 'JavaScript', 'React', 'Redux']} 
                typeSpeed={40}
                backSpeed={80}
                loop
            />
            </Typography>
        </Box>
    )
}

export default Header
