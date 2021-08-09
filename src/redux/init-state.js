const initState = JSON.parse( window.localStorage.getItem('todo-list')) || {
    todos: [
        {
            id: 0,
            title: "Buy Milk",
            detail: 'Buy milk description.',
            completed: true,
            important: false
        },
        {
            id: 1,
            title: "Go to jim",
            detail: 'Go to jim description.',
            completed: false,
            important: false
        },
        {
            id: 2,
            title: "Join meeting",
            detail: 'Join meeting description.',
            completed: false,
            important: true
        }
    ]
}


export default initState