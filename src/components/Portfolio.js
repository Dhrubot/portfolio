import React from 'react'
import Navbar from './Navbar'
import palmkings from '../images/palmkings.png'
import spaceShooter from '../images/spaceShooter.png'
import circle from '../images/circle.png'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { 
    Box,
    Grid,
    Card,
    CardHeader,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    IconButton
} from '@material-ui/core'

const useStyles = makeStyles({
    mainContainer: {
        background: '#0c1829fb',
        height: '100%'
    },
    cardContainer: {
        background: '#0A2F52',
        maxWidth: 345,
        margin: '5rem auto'
    },
})

const Portfolio = () => {

    const classes = useStyles()
    return (
        <Box component='div' className={ classes.mainContainer }>
            <Navbar />
            <Grid container justify='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={ classes.cardContainer }>
                        <CardHeader title='Circle' style={{color: '#78A9D8'}}
                        action={
                            <>
                            <IconButton aria-label="Github" 
                                style={{color: '#78A9D8'}} 
                                onClick={() => window.open('https://github.com/Dhrubot/circle-frontend')}
                            >
                                <GitHubIcon />
                            </IconButton>
                            <IconButton aria-label="Live" 
                                style={{color: '#78A9D8'}} 
                                onClick={() => window.open('https://dhrubot.github.io/circle-frontend/')}
                            >
                                <LiveTvIcon />
                            </IconButton>
                            </>
                        }/>
                        <CardActionArea>
                            <CardMedia component='img' alt='Circle' height='160' image={circle} />
                            <CardContent>
                                <Typography variant='body1' style={{color: '#4681B9'}} component='p'>
                                    Circle is a social media website that lets it's users to interact with each other
                                    through posts and updates.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{marginLeft: '1rem'}}>
                            <Typography variant='overline' style={{color: '#8B9EAF'}}>
                                Rails React Redux React-Bootstrap
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={ classes.cardContainer }>
                        <CardHeader title='Space Shooter' style={{color: '#78A9D8'}}
                            action={
                                <>
                                <IconButton aria-label="Github" 
                                    style={{color: '#78A9D8'}} 
                                    onClick={() => window.open('https://github.com/Dhrubot/space-shooter-frontend')}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton aria-label="Live" 
                                    style={{color: '#78A9D8'}} 
                                    onClick={() => window.open('https://dhrubot.github.io/space-shooter-frontend/')}
                                >
                                    <LiveTvIcon />
                                </IconButton>
                                </>
                            }/>
                        <CardActionArea>
                            <CardMedia component='img' alt='SpaceShooter' height='160' image={spaceShooter} />
                            <CardContent>
                                <Typography variant='body1' style={{color: '#4681B9'}} component='p'>
                                    Space Shooter is a shooting game where the 
                                    task of user ship is to destroy all the enemy 
                                    before they reach the earth.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{marginLeft: '1rem'}}>
                            <Typography variant='overline' style={{color: '#8B9EAF'}}>
                                Rails Javascript HTML CSS
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6} >
                    <Card className={ classes.cardContainer }>
                        <CardHeader title='Palmkings' style={{color: '#78A9D8'}}
                            action={
                                <>
                                <IconButton aria-label="Github" 
                                    style={{color: '#78A9D8'}} 
                                    onClick={() => window.open('https://github.com/Dhrubot/palmkings')}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton aria-label="Live" 
                                    style={{color: '#78A9D8'}} 
                                    onClick={() => window.open('https://palmkings.herokuapp.com/')}
                                >
                                    <LiveTvIcon />
                                </IconButton>
                                </>
                            }/>
                        <CardActionArea>
                            <CardMedia component='img' alt='Palmkings' height='160' image={palmkings} />
                            <CardContent>
                                <Typography variant='body1' style={{color: '#4681B9'}} component='p'>
                                    Palmkings is a user-driven marketplace for new and used cellphones.
                                    Users can buy and sell cellphone once they create an account.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{marginLeft: '1rem'}}>
                            <Typography variant='overline' style={{color: '#8B9EAF'}}>
                                Rails AWS S3 Bootstrap
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
