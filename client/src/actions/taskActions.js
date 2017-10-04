import axios from 'axios';

export function createTask(data, fetchAll) {
  return function(dispatch) {
    axios.post('http://localhost:3001/tasks', {name: data.name, description: data.description})
      .then((response) => {
        dispatch({type: 'CREATE_FULFILLED', payload: response.data});
        fetchTasks()(dispatch);
      })
      .catch((err) => {
        dispatch({type: 'CREATE_REJECTED', payload: err});
      }
    );
  };
};

export function fetchTasks() {
  return function(dispatch) {
    axios.get('http://localhost:3001/tasks')
      .then((response) => {
        dispatch({type: 'FETCH_FULFILLED', payload: response.data});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_REJECTED', payload: err});
      }
    );
  };
};

export function updateTask(task) {
  return function(dispatch) {
    axios.put(`http://localhost:3001/tasks/${task.id}`, {completed: !task.completed})
      .then((response) => {
        dispatch({type: 'UPDATE_FULFILLED', payload: response.data});
        fetchTasks()(dispatch);
      })
      .catch((err) => {
        dispatch({type: 'UPDATE_REJECTED', payload: err});
      }
    );
  };
};

export function deleteTask(id) {
  return function(dispatch) {
    axios.delete(`http://localhost:3001/tasks/${id}`)
      .then((response) => {
        dispatch({type: 'DELETE_FULFILLED', payload: response.data});
        fetchTasks()(dispatch);
      })
      .catch((err) => {
        dispatch({type: 'DELETE_REJECTED', payload: err});
      }
    );
  };
};
