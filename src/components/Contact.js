import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'
import emailjs from 'emailjs-com';

const useStyles = makeStyles(theme => ({
    form: {
        top: '50%',
        left: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            marginTop: '1.5rem',
            '& .MuiTypography-root': {
                fontSize: '13pt'
            }
        }
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
            color: '#9CCDEB'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9CCDEB'
            },
            '&:hover fieldset': {
                borderColor: '#9CCDEB'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#9CCDEB'
            }
        },
    },
})(TextField)

const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_bobu5d8', e.target, 'user_39loIN9zjgGb2v3Rlw0Ha')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

const Contact = () => {

    const classes = useStyles()
    return (
        <>
            <Box component='div' style={{ background: '#0c1829fb', height: '100vh'}}>
            <Navbar />
                <Grid container justify='center'>
                    <Box component='form' className={classes.form} onSubmit={sendEmail}>
                        <Typography variant='h5' style={{ color: 'orangeRed', textAlign: 'center', textTransform: 'uppercase'}}>
                            Get In Touch
                        </Typography>
                        <Typography style={{ color: 'tomato', textAlign: 'center'}}>
                            Send a message here or email me at dhrubo.dh@gmail.com to talk about a project collaboration or a job prospect.
                        </Typography>
                        <InputField fullWidth={true} label='Name' name='name' variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium' /> <br />
                        <InputField fullWidth={true} label='Email' name='email' variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium'/> <br />
                        <InputField fullWidth={true} label='Subject' name='subject' variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium'/> <br />
                        <InputField fullWidth={true} label='Message' name='message' multiline rows={4} variant='outlined' inputProps={{style: { color: 'white' }}} margin='dense' size='medium'/> <br />
                        <Button type='submit' fullWidth={true} variant='outlined'endIcon={ <SendIcon />}  className={classes.button}>
                            Contact me
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contact
