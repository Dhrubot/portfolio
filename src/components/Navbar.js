import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideBarSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
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
  ListItemIcon,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
// import DescriptionIcon from "@material-ui/icons/Description";
import dhrubo from "../images/dhrubo.jpg";
import logo from "../images/logo.jpg";

// CSS styles

const useStyles = makeStyles((theme) => ({
  sideBar: {
    width: 250,
    background: "#0c1829fb",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  listItem: {
    color: "#9CCDEB",
    "&:hover": {
      color: "tomato",
    },
  },
  logo: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <InfoIcon />,
    listText: "About Me",
    listPath: "/about",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Experiences",
    listPath: "/experiences",
  },
  // {
  //   listIcon: <DescriptionIcon />,
  //   listText: "Resume",
  //   listPath: "/resume",
  // },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideBar = (slider) => (
    <Box
      className={classes.sideBar}
      component="div"
      onClick={() => toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={dhrubo} alt="D" />
      <Divider />
      <List>
        {menuItems.map((lsItem, index) => (
          <ListItem button key={index} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Box flexGrow={1}>
              {/* <Typography variant='h6' style={{ color: 'tan', textDecoration: 'none'}}  component={Link} to={'/'}>
                            Dhrubo
                        </Typography> */}
              <Avatar
                alt="Dhrubo"
                src={logo}
                variant="square"
                className={classes.logo}
                component={Link}
                to={"/"}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                style={{ color: "#BCE0F8", textDecoration: "none" }}
                component={Link}
                to={"/resume"}
              >
                Resume
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={() => toggleSlider("right", true)}>
                <MenuIcon
                  style={{
                    color: "tomato",
                    marginLeft: "1.5rem",
                    fontSize: 30,
                  }}
                />
              </IconButton>
            </Box>
            <SideBarSlider
              anchor="right"
              open={state.right}
              onClose={() => toggleSlider("right", false)}
            >
              {sideBar("right")}
              <Footer />
            </SideBarSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
