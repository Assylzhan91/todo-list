import React, { Component } from "react"
import './styles.css'

import { InputGroup, FormControl, Button, Form} from "react-bootstrap"


export default class extends Component { // AddTodo
    state ={
        label: ''
    }

    addTitleTodo = e =>{
        this.setState({
            label: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault()
        if(this.state.label !== ''){
            this.props.onAddedTodo(this.state.label)
            this.setState({
                label: ''
            })
        }
    }

    render() {


        return <>

            <Form className="form"
                  onSubmit={this.onSubmit}
            >
                <InputGroup className="mb-3 add-todo">
                    <FormControl
                        placeholder="to add todo"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.addTitleTodo}
                        value={this.state.label}
                    />
                    <InputGroup.Append>
                        <Button variant="success"
                                onClick={this.onSubmit}>
                            Add Todo
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </>
    }
}



//SetSTATE adding items 09:25