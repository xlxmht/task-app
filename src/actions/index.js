import { v4 } from 'uuid';

export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

let taskId = v4();
export const create = (obj) => {
  return {
    type: CREATE_TASK,
    id: taskId,
    title: obj.tname,
    desc: obj.tdesc
  }
}

export const update = (obj) => {
  return {
    id: obj.id,
    type: UPDATE_TASK,
    description: obj.text,
    status: obj.status
  }
}

export const destroy = (taskId) => {
  return {
    type: DELETE_TASK
  }
}

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
})