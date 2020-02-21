import React, {Component} from "react";
import Item from './Item';


export default class extends Component { //TodoList
    render() {

        const {
            myTodos,
            onDeleted,
            onToggleDone,
            onToggleImportant
        } = this.props

        const items = myTodos.map( (item) => {
            const {id, ...data} = item;

            return <Item
                key={ id }
                uniqStyle ={ item.label }
                { ...data }
                onDeleted = { () => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() =>onToggleImportant(id)}
            />
        })

        return <ul className='list-group'>
            { items }
        </ul>
    }
}