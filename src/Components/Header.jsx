import React from 'react';
import {AppBar, Typography} from '@material-ui/core';
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const classes = {
    header: {
        minHeight: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',  
        alignItems: "center",
        padding: '10px',
        backgroundColor: 'transpaerent',
        top: 0,
        textDecoration: "none",
      },
      headerLinks: {
          color: 'white',
          cursor: "pointer",
          textDecoration: "none"
      },
      header_tabs: { 
          textDecoration: "none",
          fontWeight: 500,
          color: 'white',
          pointer:'cursor',
      },
      
}



const Header = () => {
    //const classes = useStyles()
    return (
        <AppBar style={classes.header} position="sticky">
            <div style={classes.header_tabs}>
            <AnchorLink offset='100' style={classes.headerLinks} className="headerLink" href="#home"  duration={1000}>
            <Typography variant="h6" color="inherit" >
            Home
            </Typography>
            </AnchorLink>           
            </div>

            {/* <div style={classes.header_tabs}>
            <AnchorLink offset='100' className="headerLink"  style={classes.headerLinks} href="#about"  duration={1000}>
            <Typography variant="h6" color="inherit" >
            About
            </Typography>
            </AnchorLink>
            </div> */}

            <div style={classes.header_tabs}>
            <AnchorLink offset='100' className="headerLink" style={classes.headerLinks} href="#gallery"  duration={1000}>
            <Typography variant="h6" color="inherit" >
            Gallery
            </Typography>
            </AnchorLink>

            </div>
            <div style={classes.header_tabs}>
            <AnchorLink offset='100' className="headerLink"  style={classes.headerLinks} href="#booking" duration={1000}>
            <Typography className="header_tabs" variant="h6" color="inherit">
            Bookings
            </Typography>
            </AnchorLink>
            </div>

</AppBar>

)
}

export default Header
