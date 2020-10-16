import React from 'react'
import Navbar from './Navbar'
import { Document, Page } from 'react-pdf';
import resumePDF from '../images/resume.pdf';
import { makeStyles } from '@material-ui/core/styles'
import { Box, Link, Tooltip } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import { SizeMe } from 'react-sizeme'



const useStyles = makeStyles({
    mainContainer: {
        marginTop: '5rem'
    }
})

const Resume = () => {

    const classes = useStyles()

    return (
        
        <>
            <Navbar />
            <Box component='div' className={classes.mainContainer}>
                <Tooltip title='Download Resume' placement='top-end' >
                    <Link href={`${process.env.PUBLIC_URL}/resume.pdf`} target='_blank' download >
                        <GetAppIcon style={{ color:'black', fontSize: '50', marginLeft: '48%', background:'tomato'}}/>
                    </Link>
                </Tooltip>
                <br></br><br></br>
                <SizeMe>
                    {({ size }) => (
                    
                        <Document file={resumePDF} options={{workerSrc: "pdf.worker.js"}}>
                            <Page width={size.width ? size.width : 1} pageNumber={1} />
                        </Document>
                    
                    )}
                </SizeMe>
            </Box>
        </>
    )
}

export default Resume




