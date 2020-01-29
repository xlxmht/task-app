import React from "react";

const TaskCard = ({ task }) => {
  return (
    <React.Fragment>
      <div className="task-card">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            {/* <a href="#" className="card-link">Edit</a><br/> */}
            <a href="#" className="card-link text-warning">Mark In Progress</a><br/>
            <a href="#" className="card-link text-danger">Mark Completed</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TaskCard;
