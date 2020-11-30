import React from 'react'
import {Avatar, Paper} from '@material-ui/core';
import './home.css'
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  homeCard_h1: {
      color: "#6ab04c",
  },
  Paper: {
    padding: "10px"
  },
  V1:{
    color:"red"
  }
}));
const Home = () => {
    const classes= useStyles()
    return (
        <div className="home" id="home">
            <div className="home_content">
            <div className="home_card">
            <Paper variant="outlined" elevation={2} className={classes.Paper}>
                <h1 className={classes.homeCard_h1}>Im Danny Jo</h1>
                <h2>doing graphic designing for 4 years now <span> Visionary Visuals</span> 
                </h2>
            </Paper>
            </div>
            
            {/* <img src="https://i.pinimg.com/736x/83/f4/51/83f4519e99736cf03bcb9f45e5e8c929.jpg" alt="" /> */}
            <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/83/f4/51/83f4519e99736cf03bcb9f45e5e8c929.jpg" className={classes.large} />
            
            </div>
        </div>
    )
}

export default Home
