import React, { Component } from "react";
import './SearchPanel.css'

export default class extends Component{ //SearchPanel
    render() {
        return <input
            className='form-control search-input'
            type="text"
            placeholder='type to search'/>
    }

}
