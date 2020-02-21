import React, {Component} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import './item.css'



export default class extends Component{ // Item

    render() {

        const { uniqStyle,
                label,
                important,
                done,
                onDeleted,
                onToggleDone,
                onToggleImportant
        } = this.props

        const classStyle = uniqStyle.replace(/ /g, '-').toLocaleLowerCase()

        let todoListItem = 'todo-list-item'
        const changeImportant = important ? ' important' : ''
        const changeDone = done ? ' done' : ''


        return <li className={`list-group-item ${classStyle}`}>
                   <span
                         className={todoListItem  + changeImportant + changeDone}
                         onClick={onToggleDone}
                    >
                        { label }
                    </span>

                    <span>
                        <button
                            type="button"
                            className={`btn btn-outline-success btn-sm float-right`}
                            onClick={onToggleImportant}
                    >
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm float-right"
                            onClick={onDeleted}
                        >
                            <FontAwesomeIcon icon={faTrash} />

                        </button>
                    </span>
        </li>
    }
}






/*
 if(done){
            this.setState({
                done: true
            })
        }else if(done){
            this.setState({
                done: false
            })
        }


const  Item = ({ label, uniqStyle, important = false }) => {

    let classStyle = uniqStyle.replace(/ /g, '-').toLocaleLowerCase()

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return <li
        className={`list-group-item ${classStyle}`}
        style={style}
    >
        { label }
        <span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation"
            />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o" />
            </button>
        </span>
    </li>
}
export default Item

*/
