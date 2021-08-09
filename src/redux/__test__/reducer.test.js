jest.mock('../init-state', () => {
    return {
        initState: {
            todos: [],
        }
    }
})


import reducer from '../reducer'

describe("Reducer", () => {


    beforeEach(() => {
        global.window = {
            localStorage: {
                setItem: jest.fn()
            }
        }
    })

    afterEach(() => {
        global.window = null
    })


    // add todo reducer function
    test("Should add a todo item", () => {
        const initState = {
            todos: []
        }
        const action = {
            type: "ADD_TODO",
            payload: {
                id: "123",
                title: "Test Todo Title",
                description: "Test Description",
                importent: false,
                completed: false
            }
        }
        const newState = reducer(initState, action)
        // console.log(newState);
        expect(newState.todos[0].title).toEqual("Test Todo Title")
        expect(newState.todos[0].completed).toBeFalsy()
        expect(newState.todos[0].completed).toBeFalsy()
    })



    test("Should mak todo as completed", () => {
        const initState = {
            todos: [
                {
                    id: "123",
                    title: "Test Todo Title",
                    description: "Test Description",
                    importent: false,
                    completed: false
                }
            ]
        }
        const action = {
            type: "COMP_TODO",
            payload: {
                id: "123",
            }
        }

        const newState = reducer(initState, action)

        expect(newState.todos[0].completed).toBeTruthy()
        


    })



})