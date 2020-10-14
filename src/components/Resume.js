import React from 'react'
import Navbar from './Navbar'
import { Document, Page } from 'react-pdf';
import resumePDF from '../images/resume.pdf';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Link, Tooltip } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    }
})

const Resume = () => {

    const classes = useStyles()

    return (
        
        <>
            <Navbar />
            <Tooltip title='Download Resume' placement='top-end' >
                <Link href={`${process.env.PUBLIC_URL}/resume.pdf`} target='_blank' download >
                        <GetAppIcon style={{color: 'tomato', fontSize: '60', marginLeft: '45%'}}/>
                </Link>
            </Tooltip>

            <Box component='div' className={ classes.mainContainer } >
                <Document file={resumePDF} options={{workerSrc: "pdf.worker.js"}}>
                    <Page pageNumber={1} />
                </Document>
            </Box>
        </>
    )
}

export default Resume




