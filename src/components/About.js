import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton, Tooltip } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyle = makeStyles( theme => ({
    cardContainer: {
        color: '#9CCDEB',
        margin: '2rem auto',
        background: '#142335',
        width: '80%',
        opacity: 0.9,
        [theme.breakpoints.down('md')]: {
            width: '90%'
        }
    },
    title: {
        color: 'orangeRed',
        textAlign: 'center',
    },
    subheader: {
        color: 'tomato',
        textAlign: 'center',
    },

    icon: {
        fill: '#BCE0F8',
        fontSize: '2rem',
        marginTop: '0',
        marginBottom: '1rem',
        marginLeft: '2rem',
        '&:hover': {
            fill: 'tomato',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '0.5rem'
        }
    }

}))

const About = () => {
    const classes = useStyle()
    return (
        <>
        <Navbar />
        <Card className={classes.cardContainer}>
            <CardHeader classes={{title: classes.title, subheader: classes.subheader}} title={'Dhrubo Talukder'} subheader={'New York | Email: dhrubo.dh@gmail.com'} />
            <CardContent>
                <Typography style={{fontSize: '12pt', padding:'2rem'}}paragraph>
                    Hello! I'm Dhrubo Talukder, a full stack web developer & software engineer, currently living on the East Coast and always open to exploring new places to live. <br /><br />
                    I enjoy bringing ideas to life, whether that be websites, applications, music 
                    or anything in between. My goal is to build applications with strong user 
                    interface (UI), user experience (UX), and responsive design.<br /><br /> 
                    I am a recent graduate of Flatiron School's Software Engineer curriculum, and I am excitingly waiting for the
                    opportunity to apply my new-found expertise in Ruby on Rails and JavaScript as a software developer. <br /> <br />
                    Some of my hobbies and interests include: traveling (17 states so far and counting...), playing guitar and learning new skills.
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{justifyContent: 'center'}}>
                <Tooltip title='LinkedIn' placement="top">
                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/dhrubo-talukder')}>
                        <LinkedInIcon className={classes.icon} />  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Facebook' placement="top">
                    <IconButton onClick={() => window.open('https://www.facebook.com/Shohorbondi/')}>
                        <Facebook className={classes.icon} />  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Twitter' placement="top">
                    <IconButton onClick={() => window.open('https://twitter.com/Dhowate')}>
                        <Twitter className={classes.icon} />  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Github' placement="top">
                    <IconButton onClick={() => window.open('https://github.com/Dhrubot')} >
                        <GitHubIcon className={classes.icon} />  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Resume' placement="top" >
                    <IconButton onClick={() => window.location.href = '/resume'}>
                        <DescriptionIcon className={classes.icon} />  
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
        </>
    )
}

export default About
