import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, makeStyles } from "@material-ui/core"
import {PlaylistAddCheck} from '@material-ui/icons'


// class styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));


function AppBars() {

    // Make style component
    const classes = useStyles();


    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" > */}
                <PlaylistAddCheck />
                {/* </IconButton> */}
                <Typography variant="h5" color="inherit">
                    Todos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppBars
