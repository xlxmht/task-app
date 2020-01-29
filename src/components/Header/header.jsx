import React, { Component } from "react";
import TaskForm from "../taskform";

class Header extends Component {
  handleNewTask = () => {
    const { toggleVisibility } = this.props;
    toggleVisibility();
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="task-button-new-task">
              <button type="button" onClick={this.handleNewTask} className="btn btn-primary task-button">
                New task
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="task-button-new-login">
              <button type="button" className="btn btn-success task-button">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {this.props.formVisibility && (
            <div className="col-md-12">
              <TaskForm />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
