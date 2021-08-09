import {ADD_TODO} from './action'
import { takeEvery } from '@redux-saga/core/effects'


export function* addTodo(){
    yield takeEvery(ADD_TODO, function* (){
        // here we can perform async function
    })
}


export default function* (){
    yield* addTodo() 
}