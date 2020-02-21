import React, {Component} from "react";

export  default class extends Component{ //ItemStatusFilter

    render() {
         const {statusDoneList, statusAllList} = this.props
        return  <div className="btn-group">
            <button type="button"
                    className="btn btn-info"
                    onClick={statusAllList}
            >
                All
            </button>
            <button type="button"
                    className="btn btn-outline-secondary"
            >
                Active
            </button>
            <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={statusDoneList}
                    >
                Done
            </button>
        </div>
    }

}
