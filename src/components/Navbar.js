import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import SideBarSlider from '@material-ui/core/Drawer'
import Footer from './Footer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box, 
    ListItemIcon
} from '@material-ui/core'
import { 
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';
import dhrubo from '../images/dhrubo.jpg'


// CSS styles

const useStyles = makeStyles( theme => ({
    sideBar: {
        width: 250,
        background: '#142335',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(10),
        height: theme.spacing(10)
    },
    listItem: {
        color: 'tan'
    }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Experiences',
        listPath: '/experiences'
    },
    {
        listIcon: <DescriptionIcon />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <InfoIcon />,
        listText: 'About Me',
        listPath: '/about'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contact Me',
        listPath: '/contact'
    }


]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles()

    const sideBar = slider => (
    <Box className={classes.sideBar} component='div' onClick={() => toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src={dhrubo} alt='D' />
        <Divider />
        <List>
            {menuItems.map((lsItem, index) => (
                <ListItem button key={index} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText} /> 
                </ListItem>
            ))}
        </List>
    </Box>
    )

    return (
        <>

        <Box component='nav'>
            <AppBar position='static' color="transparent" elevation={0}>
                <Toolbar>
                    <Box flexGrow={1}>
                        <Typography variant='h5' style={{ color: 'tan', textDecoration: 'none'}}  component={Link} to={'/'}>
                            Dhrubo's Portfolio
                        </Typography>
                    </Box>
                    <Typography variant='h5' style={{ color: 'tan', textDecoration: 'none', marginLeft: '2rem'}} component={Link} to={'/resume'}>
                            Resume
                    </Typography>
                    <Typography variant='h5' style={{ color: 'tan', textDecoration: 'none', marginLeft: '2rem'}} component={Link} to={'/about'}>
                            About Me
                    </Typography>
                    <IconButton onClick={() => toggleSlider('right', true)} >
                        <MenuIcon style={{ color: 'tomato', marginLeft: '2rem' }} fontSize='large'/>
                    </IconButton>
                    <SideBarSlider 
                        anchor='right' 
                        open={state.right}
                        onClose={() => toggleSlider('right', false)}
                    >
                        {sideBar('right')}
                        <Footer />
                    </SideBarSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
