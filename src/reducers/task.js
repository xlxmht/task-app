import { CREATE_TASK, UPDATE_TASK, DELETE_TASK } from '../actions';

const taskStatus = {
  new: 'New',
  in_progress: 'In Progress',
  completed: 'Completed'
};

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: action.desc,
          status: taskStatus.new
        }
      ];
    case UPDATE_TASK:
      return state.map(item =>
        (item.id === action.id) ? { ...item, status: taskStatus[action.status] } : item
      );
    case DELETE_TASK:
      return [];
    default:
      return state;
  }
}

export default taskReducer;