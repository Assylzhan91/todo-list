import React, { Component } from 'react';

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../StatusFilter";
import TodoList  from "../TodoList";
import AddFromTodo  from "../AddFromTodo";

import './index.css'

export default class extends  Component{ //App
    cnt = 1

    state = {
        todoData : [
            this.creatTodoItem('Learn React'),
            this.creatTodoItem('Build Awesome App'),
            this.creatTodoItem('Do something')
        ]
    }

    creatTodoItem (label){
        return{
         id: this.cnt++,
         label,
         important: false,
         done: false
        }
    }

    toggleProperty(arr, id, propName){

        let index = arr.findIndex( i => i.id === id) // i === array Element

        let oldItem = arr[index]
        const newItem = { ...oldItem, [propName]: !oldItem[propName]}

        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1),
        ]
    }

    onDeletedTodo = id =>{
        this.setState(({todoData}) => {
            let newArr = [...todoData]
            let index = newArr.findIndex( item => item.id === id)
            newArr.splice(index, 1)

            return{
                todoData: newArr
            }
        })
    }

    onAddedTodo = text =>{
        const newTodo = this.creatTodoItem(text)
        let newArrList =  [...this.state.todoData, newTodo]
        this.setState({
            todoData: newArrList
        })
    }


    onToggleImportant = id =>{
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = id =>{

        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }

        })
    }

    statusDoneList = (e) =>{
        let done =  this.state.todoData
        let newArrDone = [...done]

        let arrDone = newArrDone.filter(item => !item.done)

        this.setState({
            todoData: arrDone
        })
    }

    statusAllList = (e) =>{
        let all =  this.state.todoData
        console.log(all)

/*        let  newArrAll = [...all, done: true]

        this.setState({
            todoData: newArrAll
        })*/
    }

    render() {
        const { todoData } =  this.state
        const doneCount = todoData.filter(i => i.done).length //i === array element
        const todoCount = todoData.length - doneCount

        return(
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter
                        statusDoneList={this.statusDoneList}
                        statusAllList={this.statusAllList}
                    />
                </div>
             <TodoList myTodos = { todoData }
                          onDeleted = {this.onDeletedTodo}
                          onToggleDone = {this.onToggleDone}
                          onToggleImportant = {this.onToggleImportant}
                />

                <AddFromTodo
                    onAddedTodo={this.onAddedTodo}
                />
            </div>
        )
    }

}