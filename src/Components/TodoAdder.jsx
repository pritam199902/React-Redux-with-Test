import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, makeStyles, Snackbar } from "@material-ui/core"
import { ADD_TODO } from '../redux/action'


// class styles
const useStyles = makeStyles((theme) => ({
    boxHeight: {
        height: 55,
        margin: 2
    },
}));




function TodoAdder() {

    // Make style component
    const classes = useStyles();
    const dispatch = useDispatch()


    const [title, setTitle] = useState('')
    const [infoOpen, setInfoOpen] = useState(false)
    const [info, setInfo] = useState()



    const handleOnTextChange = txt => {
        setTitle(txt)
    }

    const addTodoItem = () => {
        if (title.length === 0) {
            setInfo( "Add New Todo is empty!")
            return setInfoOpen(true)
        }
        dispatch({
            type: ADD_TODO,
            payload: {
                title
            }
        })

        setInfo( "Add New Todo added!")
        setInfoOpen(true)
        setTitle('')
    }


    return (
        <Box>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={infoOpen}
                autoHideDuration={2000}
                onClose={() => { setInfoOpen(!infoOpen) }}
                message={info}
            />
            <TextField className={classes.boxHeight} label="Add New Todo" variant="outlined" value={title} onChange={(e) => { handleOnTextChange(e.target.value) }} />
            <Button className={classes.boxHeight} variant="contained" onClick={addTodoItem} color="primary" >Add</Button>
        </Box>
    )
}

export default TodoAdder
