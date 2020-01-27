import React, { Component } from "react";

class TaskCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="task-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Task </h5>
              <p className="card-text">Description</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskCard;
