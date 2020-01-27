import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { create, update } from "../actions";

// class TaskForm extends Component {
const TaskForm = () => {
  // render() {
  // const dispatch = useDispatch();
  const onFormSubmit = () => {
    // e.preventDefault();
    console.log("Submitted");
    // dispatch.create();
  };
  return (
    <form>
      <div className="form-group">
        <label>Task Name</label>
        <input type="text" className="form-control" placeholder="Task Name" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="form-control"
          rows="3"
          cols="100"
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={onFormSubmit}>
        Submit
      </button>
    </form>
  );
  // }
};

export default TaskForm;
