import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#0c1829fb;",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #9CCDEB",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #BCE0F8",
    position: "relative",
    margin: "1rem, 3rem, 1rem, 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    // '&:before': {
    //     content: "''",
    //     position: 'absolute',
    //     right: '-0.625rem',
    //     top: 'calc(50% - 5px)',
    //     borderStyle: 'solid',
    //     borderColor: 'tomato tomato transparent transparent',
    //     borderWidth: '0.625rem',
    //     transform: 'rotate(45deg)'
    // },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#9CCDEB",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timelineYear: {
    textAlign: "center",
    maxWidth: "10.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.4rem",
    background: "#062B53",
    opacity: 0.7,
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#BCE0F8",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Experiences = () => {
  const classes = useStyles();
  //experiences
  const experiences = [
    {
      year: "2023 - Current",
      designation: "Full Stack Software Engineer",
      companyName: "Citigroup",
      responsibilities: [
        "Developed and managed an internal platform using Node.js and React, enabling seamless data exchange between various internal teams.",
        "Expanded and maintained infrastructure utilizing Spring Boot microservices, which accelerated collaboration between teams and ensured data quality across multiple platforms.",
        "Leveraged Kubernetes for deploying and managing containerized applications, enhancing scalability and reliability of the platform.",
        "Implemented CI/CD pipelines using Jenkins, streamlining the deployment process and reducing downtime.",
        "Conducted code reviews and optimized backend services for performance and scalability, ensuring high availability and consistent processing performance."
      ],
    },
    {
      year: "2021 - 2023",
      designation: "Full Stack Software Engineer",
      companyName: "Revature INC",
      responsibilities: [
        "Developed and maintained web applications for clients using Spring Boot microservices and React.",
        "Implemented RESTful APIs using Spring Boot to handle data transactions and business logic.",
        "Manage and update UI using Angular and Angular Material for increased responsiveness and more interactive site.",
        "Oversee backend service to provide support for database and storage using Angular Firebase and Angular Firestore.",
      ],
    },
    {
      year: "2021 - 2021",
      designation: "Software Engineer Intern",
      companyName: "Student Opportunity Center",
      responsibilities: [
        "Design and write the API documentation for the app from scratch using HTML, CSS and jQuery.",
        "Transfer the existing backend admin console written in Python to a Google Firebase serverless API, utilizing microservices and cloud functions.",
        "Manage and update UI using Angular and Angular Material for increased responsiveness and more interactive site.",
        "Oversee backend service to provide support for database and storage using Angular Firebase and Angular Firestore.",
      ],
    },
    {
      year: "2015 - 2019",
      designation: "Rideshare Driver",
      companyName: "Uber",
      responsibilities: [
        "Provided transportation services in a courteous and professional manner, consistently maintaining a 4.95/5.0 rating.",
        "Averaged 13 trips per day, taking customers to respective destinations as quickly as possible around New York City, as well as parts of New York State, New Jersey, and Connecticut.",
        "Learned about and drove shortest routes to destinations city-wide, getting passengers to destinations on time.",
      ],
    },
    {
      year: "2016 - 2017",
      designation: "IT Administrator",
      companyName: "Apparel Production Inc.",
      responsibilities: [
        "Updated company website and social media pages to show new products and related data, often using Adobe Photoshop; collaborated with server provider to resolve backend issues.",
        "Avoided losses to the company by regularly managing databases with 45 clients and 15 suppliers, updating files and product information and troubleshooting issues within one day on average.",
        "Supported and resolved issues for 20 workstations by troubleshooting hardware and software problems, reaching out to product experts for any changes or updates, and communicating on an ongoing basis with 15+ employees.",
      ],
    },
  ];
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Navbar />
        <Typography variant="h4" align="center" className={classes.heading}>
          Work Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          {experiences.map((experienceObj, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h2"
                className={`${classes.timelineYear} ${classes.timeLineItem}`}
              >
                {experienceObj.year}
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  {experienceObj.designation}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ color: "tomato" }}
                >
                  @{experienceObj.companyName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  style={{ color: "#9CCDEB" }}
                >
                  <List>
                    {experienceObj.responsibilities?.map(
                      (responsibility, index) => (
                        <ListItem>
                          <ListItemIcon>
                            <ArrowForwardIcon
                              style={{ color: "tomato", fontSize: "large" }}
                            />
                          </ListItemIcon>
                          <ListItemText key={index} primary={responsibility} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Typography>
              </Box>
              <br />
            </React.Fragment>
          ))}
          <br />
        </Box>
      </Box>
    </>
  );
};

export default Experiences;
