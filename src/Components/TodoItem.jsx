import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, ListItem, ListItemSecondaryAction, Typography } from '@material-ui/core'
import { Delete, StarBorder, Star } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { COMP_TODO, DELETE_TODO, IMP_TODO } from '../redux/action'

function TodoItem({ id, title, description, completed, importent }) {
    const dispatch = useDispatch()

    const toggleCheckBox = () => {
        dispatch({
            type: COMP_TODO,
            payload: {
                id
            }
        })
    }

    const handleDelete = () => {
        dispatch({
            type: DELETE_TODO,
            payload: {
                id
            }
        })
    }


    const handleImportent =() =>{
        dispatch({
            type: IMP_TODO,
            payload: {
                id
            }
        })
    }



    return (
        <ListItem dense >
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={completed}
                            onChange={toggleCheckBox}
                            name={title}
                            color="primary"
                        />
                    }
                    label={
                        <Typography style={{
                            textDecoration: completed && 'line-through'
                        }} >{title}</Typography>
                    }
                >

                </FormControlLabel>
            </FormGroup>
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete} >
                    <Delete />
                </IconButton>

                <IconButton onClick={handleImportent} >
                    {
                        importent ? <Star color="primary" /> : <StarBorder />
                    }

                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TodoItem
