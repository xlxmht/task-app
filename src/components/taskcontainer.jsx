import React, { Component } from "react";
import TaskColumn from './Taskcolumn/Taskcolumn.container'

const taskTemplates = [
  {
    id: 1,
    title: "New"
  },
  {
    id: 2,
    title: "In Progress"
  },
  {
    id: 3,
    title: "Completed"
  }
];

class TaskContainer extends Component {
  state = {};
  render() {
    return (
      <div className="row no-gutters">
        {taskTemplates.map(template => {
          return (
            <TaskColumn key={template.id} template={template}/>
          );
        })}
      </div>
    );
  }
}

export default TaskContainer;
