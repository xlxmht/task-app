export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

let taskId = 0;
export const create = (text) => {
  return {
    type: CREATE_TASK,
    id: taskId++,
    description: text
  }
}

export const update = (id, text, status) => {
  return {
    id,
    type: UPDATE_TASK,
    description: text,
    status
  }
}

export const destroy = (taskId) => {
  return {
    type: DELETE_TASK
  }
}