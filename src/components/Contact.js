import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
    form: {
        top: '50%',
        left: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button: {
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }
}))

const InputField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'tomato',
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tan'
            }
        },
    },
})(TextField)

const Contact = () => {

    const classes = useStyles()
    return (
        <>
            <Box component='div' style={{ background: '#142335', height: '100vh'}}>
            <Navbar />
                <Grid container justify='center'>
                    <Box component='form' className={classes.form}>
                        <Typography variant='h5' style={{ color: 'orangeRed', textAlign: 'center', textTransform: 'uppercase'}}>
                            Get In Touch
                        </Typography>
                        <Typography variant='h6' style={{ color: 'tomato', textAlign: 'center'}}>
                            Send a message here or email me at dhrubo.dh@gmail.com to talk about a project collaboration or a job prospect
                        </Typography>
                        <InputField fullWidth={true} label='Name' variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium' /> <br />
                        <InputField fullWidth={true} label='Email' variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium'/> <br />
                        <InputField fullWidth={true} label='Company Name' variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium'/> <br />
                        <InputField fullWidth={true} label='Message' multiline rows={4} variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium'/> <br />
                        <Button fullWidth={true} variant='outlined'endIcon={ <SendIcon />}  className={classes.button}>
                            Contact me
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contact
