import React, { Component } from "react";
import TaskCard from "./taskcard";

class TaskColumn extends Component {
  render() {
    return (
      <div className="col-md-4 border task-column-spacing">
        <div className="task-column text-center border-bottom">
          <strong>{this.props.template.title}</strong>
        </div>
        <div className="task-column">
          <TaskCard />
        </div>
      </div>
    );
  }
}

export default TaskColumn;
