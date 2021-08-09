import initState from './init-state'
import { ADD_TODO, COMP_TODO, DELETE_TODO, IMP_TODO } from './action'
import shortid from 'shortid'



function saveDataToBrowser(state) {
    window.localStorage.setItem('todo-list', JSON.stringify(state))
}


const reducer = (state = initState, action) => {
    switch (action.type) {

        // add new todo
        case ADD_TODO: {

            const { title } = action.payload
            const newTodoItem = {
                id: shortid(),
                title,
                description: '',
                important: false,
                completed: false
            }
            const newState = {
                ...state,
                todos: [
                    ...state.todos, newTodoItem

                ]
            }

            saveDataToBrowser(newState)

            return newState
        }

        // compelete todo toggle
        case COMP_TODO: {

            const { id } = action.payload
            const newTodos = state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            const newState = {
                ...state,
                todos: newTodos
            }
            saveDataToBrowser(newState)

            return newState
        }


        case IMP_TODO: {

            const { id } = action.payload
            const newTodos = state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.importent = !todo.importent
                }
                return todo
            })

            const newState = {
                ...state,
                todos: newTodos
            }
            saveDataToBrowser(newState)

            return newState
        }


        case DELETE_TODO: {
            const { id } = action.payload
            const newTodos = state.todos.filter(todo => todo.id !== id)
            const newState = {
                ...state,
                todos: newTodos
            }
            saveDataToBrowser(newState)

            return newState
        }




        default:
            return state
    }
}

export default reducer