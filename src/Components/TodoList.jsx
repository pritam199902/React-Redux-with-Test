import React from 'react'
import { useSelector } from 'react-redux'
import { Box, makeStyles, Grid, Typography, Divider, List, ListItem } from "@material-ui/core"
import TodoItem from './TodoItem'


const useStyle = makeStyles(theme => ({
    root: {
        margin: 20,
        marginTop: 50,
        padding: 20,
        backgroundColor: '#eee'
    }
}))



function TodoList() {

    const classes = useStyle()


    const todos = useSelector(state => state.todos)

    const reorderedTodos = (() => {
        const imp = []
        const nonimp = []
        todos.forEach(todo => {
            if (todo.importent) {
                imp.push(todo)
            }
            else {
                nonimp.push(todo)
            }
        });
        return imp.concat(nonimp)
    })()


    return (
        <Box className={classes.root} >
            <Grid container spacing={2} >
                <Grid item xs={6} >
                    <Typography align='left' variant='h5'  >My Todos</Typography>
                    <Divider />
                    <List>
                        {reorderedTodos.filter(d => !d.completed).length > 0 ? reorderedTodos.filter(d => !d.completed).map((todo, i) => {
                            return (
                                <TodoItem key={i} {...todo} />
                            )
                        })
                            : <Typography color="textSecondary" >-- Empty --</Typography>
                        }
                    </List>
                </Grid>
                <Grid item xs={6} >
                    <Typography align='left' variant='h5'  >Completed</Typography>
                    <Divider />
                    <List>
                        {
                            reorderedTodos.filter(d => d.completed).length > 0 ? reorderedTodos.filter(d => d.completed).map((todo, i) => {
                                return (
                                    <TodoItem key={i} {...todo} />
                                )
                            })
                                : <Typography color="textSecondary" >-- Empty --</Typography>
                        }
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TodoList
