import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Twitter from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'tomato',
                fontSize: '1.8rem'
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width='auto' style={{background: '#222'}}>
            <BottomNavigationAction className={classes.root} style= {{ padding: 0 }} icon={<LinkedInIcon />} onClick={() => window.open('https://www.linkedin.com/in/dhrubo-talukder-1895261b3/')} />
            <BottomNavigationAction className={classes.root} style= {{ padding: 0 }} icon={<Twitter />} onClick={() => window.open('https://twitter.com/Dhowate')}/>
            <BottomNavigationAction className={classes.root} style= {{ padding: 0 }} icon={<GitHubIcon />} onClick={() => window.open('https://github.com/Dhrubot')} />
        </BottomNavigation>
    )
}

export default Footer
