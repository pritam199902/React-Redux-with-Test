import { createStore, applyMiddleware }  from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import middleware from './middleware'


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)) // wraping with devtools and saga middleware
)

sagaMiddleware.run(middleware) // runnig saga middleware

