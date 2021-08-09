import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Box, Container, Paper } from "@material-ui/core"
import { PlaylistAddCheck } from '@material-ui/icons'

// import AppBars from './Components/AppBar';
import TodoAdder from './Components/TodoAdder';
import TodoList from './Components/TodoList';




// class styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingLeft: '15px'
  },
  appContainer: {
    marginTop: '20px',
    padding: '0 100px'
  },
  wrapper: {
    textAlign: 'center'
  }
}));





function App() {


  // Make style component
  const classes = useStyles();



  return (
    <Box className={classes.root} >
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" > */}
          <PlaylistAddCheck />
          {/* </IconButton> */}
          <Typography variant="h5" color="inherit" className={classes.title} >
            Todos
          </Typography>
        </Toolbar>
      </AppBar>


      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0} >

          {/* Todo Adder Component */}
          <TodoAdder />

          {/* Todo List */}
          <TodoList />
          
        </Paper>
      </Container>


    </Box>
  );
}

export default App;
