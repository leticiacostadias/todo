import Task from './../models/task';

export default function reducer (state = {
  tasks: [],
  status: 'STANDBY'
}, action) {
  switch (action.type) {
    case 'FETCH_REJECTED': {
      console.error(action.payload);
      state = {...state, status: 'ERROR'};
      break;
    }
    case 'FETCH_FULFILLED': {
      const tasks = [];

      action.payload.forEach((task) => {
        tasks.push(new Task(task));
      });

      tasks.sort((a, b) => {
        if (!a.completed && b.completed)
          return -1;

        if (a.completed && !b.completed)
          return 1;

        return 0;
      });

      state = {...state, tasks: tasks, status: 'STANDBY'};
      break;
    }

    case 'CREATE_REJECTED': {
      console.error(action.payload);
      state = {...state, status: 'ERROR'};
      break;
    }
    case 'CREATE_FULFILLED': {
      state = {...state, status: 'STANDBY'};
      break;
    }

    case 'DELETE_REJECTED': {
      console.error(action.payload);
      state = {...state, status: 'ERROR'};
      break;
    }
    case 'DELETE_FULFILLED': {
      state = {...state, status: 'STANDBY'};
      break;
    }

    case 'UPDATE_REJECTED': {
      console.error(action.payload);
      state = {...state, status: 'ERROR'};
      break;
    }
    case 'UPDATE_FULFILLED': {
      state = {...state, status: 'STANDBY'};
      break;
    }
    default: {
      return state;
    }
  }

  return state;
}
