import React from "react";
import { connect } from 'react-redux';
import { create, toggleForm } from "../actions";

// class TaskForm extends Component {
const TaskForm = ({ dispatch }) => {

  const initialState = {
    tname: '',
    tdesc: ''
  };

  const [ stateObj, setTaskState ] = React.useState(initialState);

  const handleBinding = e => {
    setTaskState({
      ...stateObj,
      [e.target.name]: e.target.value
    });
  }

  const onFormSubmit = () => {
    dispatch(create(stateObj))
    dispatch(toggleForm())
  };

  // render () {
  return (
    <form>
      <div className="form-group">
        <label>Task Name</label>
        {/* <input type="text" name='tname' onChange={this.handleBinding} className="form-control" placeholder="Task Name" /> */}
        <input type="text" name='tname' onChange={handleBinding} className="form-control" placeholder="Task Name" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          name='tdesc'
          onChange={handleBinding}
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
  // }
};

export default connect()(TaskForm);
