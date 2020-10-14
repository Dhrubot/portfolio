import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Navbar from './Navbar'

const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: '#142335'
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0
        },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% - 1px)',
                right: 'auto'
            }
        }
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem, 3rem, 1rem, 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: 'tan'
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent tomato tomato'
            }
        }
    },
    timelineYear: {
        textAlign: 'center',
        maxWidth: '10.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    }
}))

const Experiences = () => {
    const classes = useStyles()
    return (
        <>
            <Box component='header' className={classes.mainContainer}>
                <Navbar />
                <Typography variant='h4' align='center' className={classes.heading}>
                    Work Experience
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography variant='h2' className={`${classes.timelineYear} ${classes.timeLineItem}`}>
                        2015 - 2019
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            RideShare Driver
                        </Typography>
                        <Typography variant='body1' align='center' style={{color: 'tomato'}}>
                            @Uber
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{color: 'tan'}}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon style={{color: 'tomato', fontSize: 'large'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Provided transportation services in a courteous and professional manner, consistently maintaining a 4.95/5.0 rating." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon style={{color: 'tomato', fontSize: 'large'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Averaged 13 trips per day, taking customers to respective destinations as quickly as possible around New York City, as well as parts of New York State, New Jersey, and Connecticut." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon style={{color: 'tomato', fontSize: 'large'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Learned about and drove shortest routes to destinations city-wide, getting passengers to destinations on time." />
                                </ListItem>
                            </List>
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timelineYear} ${classes.timeLineItem}`}>
                        2016 - 2017
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            IT Administrator
                        </Typography>
                        <Typography variant='body1' align='center' style={{color: 'tomato'}}>
                            Apparent Productions Inc. 
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{color: 'tan'}}>
                            <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowBackIcon style={{color: 'tomato', fontSize: 'large'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Updated company website and social media pages to show new products and related data, often using Adobe Photoshop; collaborated with server provider to resolve backend issues." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowBackIcon style={{color: 'tomato', fontSize: 'large'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Avoided losses to the company by regularly managing databases with 45 clients and 15 suppliers, updating files and product information and troubleshooting issues within one day on average." />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <ArrowBackIcon style={{color: 'tomato', fontSize: 'large'}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Supported and resolved issues for 20 workstations by troubleshooting hardware and software problems, reaching out to product experts for any changes or updates, and communicating on an ongoing basis with 15+ employees." />
                                    </ListItem>
                                </List>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Experiences