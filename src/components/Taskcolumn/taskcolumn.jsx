import React from "react";
import TaskCard from "../Taskcard/Taskcard.container";

const TaskColumn = ({ template, tasks }) => {
  return (
    <div className="col-md-4 border task-column-spacing">
      <div className="task-column text-center border-bottom">
        <strong>{template.title}</strong>
      </div>
      {
        tasks.map(item => {
          return (
            <div key={item.id} className="task-column">
              <TaskCard task={item} />
            </div>
          )
        })
      }
    </div>
  );
}

export default TaskColumn;
