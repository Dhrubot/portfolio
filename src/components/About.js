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
        color: 'tan',
        margin: '2rem auto',
        background: '#142335',
        maxWidth: 800,
        opacity: 0.9,
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
        fill: 'tan',
        fontSize: '2rem',
        marginTop: '0',
        marginBottom: '1rem',
        marginLeft: '2rem',
        '&:hover': {
            fill: 'tomato',
        }
    }

}))

const About = () => {
    const classes = useStyle()
    return (
        <>
        <Navbar />
        <Card className={classes.cardContainer}>
            <CardHeader classes={{title: classes.title, subheader: classes.subheader}} title={'Dhrubo Talukder'} subheader={'New York, New York | 646-875-2316 | dhrubo.dh@gmail.com'} />
            <CardContent>
                <Typography style={{fontSize: '12pt', padding:'2rem'}}paragraph>
                    Hello! I'm Dhrubo Talukder, a full stack web developer & software engineer based on New York, NY. <br /><br />
                    I enjoy bringing ideas to life, whether that be wesbites, applications, music 
                    or anything in between. My goal is to build applications with strong user 
                    interface (UI), user experience (UX), and responsive design.<br /><br /> 
                    I am a recent graduate of Flatiron School's Software Engineer Curriculum and I am excitingly waiting for the
                    opportunity to apply my newfound expertise in Ruby on rails and Javascript as a software developer. <br /> <br />
                    Some of my peronal hobbies and interests include: Travelling (17 states so far and counting...), Playing Guitar and Finding new skills (currently learning piano) to learn.
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{justifyContent: 'center'}}>
                <Tooltip title='LinkedIn' placement="top">
                    <IconButton>
                        <LinkedInIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/dhrubo-talukder-1895261b3/')} />  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Facebook' placement="top">
                    <IconButton>
                        <Facebook className={classes.icon} onClick={() => window.open('https://www.facebook.com/Shohorbondi/')}/>  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Twitter' placement="top">
                    <IconButton >
                        <Twitter className={classes.icon} onClick={() => window.open('https://twitter.com/Dhowate')}/>  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Github' placement="top">
                    <IconButton>
                        <GitHubIcon className={classes.icon} onClick={() => window.open('https://github.com/Dhrubot')} />  
                    </IconButton>
                </Tooltip>
                <Tooltip title='Resume' placement="top" onClick={() => window.location.href = '/resume'}>
                    <IconButton>
                        <DescriptionIcon className={classes.icon} />  
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
        </>
    )
}

export default About
