import React, { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import CookieConsent from "react-cookie-consent";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Motion, spring } from "react-motion";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://snitch.ie/">
        snitch.ie
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function MyAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            id="positioned-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls="positioned-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="positioned-menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem component="a"  href="https://twitter.com/notmisleading" target="_blank">
              <ListItemIcon>
                <TwitterIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Follow on Twitter</ListItemText>
            </MenuItem>
            <MenuItem component="a"  href="https://github.com/fullergalway/snitch.ie" target="_blank">
              <ListItemIcon>
                <GitHubIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Improve this on Github</ListItemText>
            </MenuItem>
          </Menu>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Safe Neighbourhood Incident Tracking Covid-19 Hotline
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [randX, setRandX] = useState(0);
  const [randY, setRandY] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const move = (e) => {
    e.preventDefault();
    if (!open) {
      setOpen(true);
      const rect = e.target.getBoundingClientRect();
      setOffset({ x: rect.left, y: rect.top });
    }
    setRandX(Math.floor(Math.random() * (window.innerWidth - 200)) - offset.x);
    setRandY(Math.floor(Math.random() * (window.innerHeight - 100)) - offset.y);
  };

  return (
    <>
      <MyAppBar />
      <Container fixed justifyContent="center">
        <Grid container spacing={3} justifyContent="center">
        <Grid item xs={10} sm={9} md={8} lg={6} ><Typography variant="h5" component="h1" gutterBottom>
          Welcome to the public health science violation reporting system.
        </Typography></Grid>
        <Grid item xs={12}></Grid>
          <Grid item xs={10} sm={9} md={8} lg={6} ><Typography variant="body1" component="p">
            In these dangerous times it is especially important that we work together to help keep everyone safe.
          </Typography></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={10} sm={9} md={8} lg={6} >
            <Typography variant="body1" component="p" >
              Public health directives always follow the science.
              Because science evolves over time, the guidance changes frequenly too.
              When the rules make no sense at all, that is when following them becomes most important.
            </Typography></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={10} sm={9} md={8} lg={6} ><Typography variant="body1" component="p" >
            The best way for citizens to keep each other safe is by following and upholding the latest rules, and helping others to do so too.
          </Typography></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={10} sm={9} md={8} lg={6} ><Typography variant="body1" component="p" >
            Blatant violation of the science by anti-vax individuals and businesses following untrusted news sources <em>must be reported</em> to the authorities.
          </Typography></Grid>

        <Grid item xs={12} container justifyContent="center">
          <Motion
            style={{ x: spring(open ? randX : 0), y: spring(open ? randY : 0) }}
          >
            {({ x, y }) => (
              <Fab
                style={{
                  position: "absolute",
                  WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                  transform: `translate3d(${x}px, ${y}px, 0)`,
                }}
                variant="extended"
                color="primary"
                onMouseDown={move}
                onMouseOver={move}
                onTouchStart={move}
              >
                <ReportProblemIcon sx={{ mr: 1 }} />
                Report Non-Compliance
              </Fab>
            )}
          </Motion>
        </Grid>
        </Grid>

      </Container>

      <CookieConsent>
        This website uses cookies to help keep everyone safe.
      </CookieConsent>
    </>
  );
}
