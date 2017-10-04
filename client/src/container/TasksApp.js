import { connect } from 'react-redux';
import {createTask, fetchTasks, updateTask, deleteTask} from './../actions/taskActions';
import App from './../App';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    status: state.status
  };
}

 const mapDispatchToProps = (dispatch) => {
   return {
     fetchTasks: () => fetchTasks()(dispatch),
     createTask: (data) => createTask(data)(dispatch),
     updateTask: (task) => updateTask(task)(dispatch),
     deleteTask: (taskId) => deleteTask(taskId)(dispatch)
   };
 }

export default connect(mapStateToProps, mapDispatchToProps)(App);
