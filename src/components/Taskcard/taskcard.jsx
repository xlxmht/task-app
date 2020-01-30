import React from "react";

const TaskCard = ({ task, moveTask }) => {
  return (
    <React.Fragment>
      <div className="task-card">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            {
              task.status === 'New' &&
              <React.Fragment>
                <a href="#" onClick={() => moveTask(task, 'in_progress')} className="card-link text-success">Mark In Progress</a> <br />
                <a href="#" onClick={() => moveTask(task, 'completed')} className="card-link text-danger">Mark Completed</a>
              </React.Fragment>
            }
            {
              task.status === 'In Progress' &&
              <React.Fragment>
                <a href="#" onClick={() => moveTask(task, 'new')} className="card-link text-success">Mark As New</a> <br />
                <a href="#" onClick={() => moveTask(task, 'completed')} className="card-link text-danger">Mark Completed</a>
              </React.Fragment>
            }
            {
              task.status === 'Completed' &&
              <React.Fragment>
                <a href="#" onClick={() => moveTask(task, 'new')} className="card-link text-success">Mark As New</a> <br />
                <a href="#" onClick={() => moveTask(task, 'in_progress')} className="card-link text-success">Mark In Progress</a>
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TaskCard;
