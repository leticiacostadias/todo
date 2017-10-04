export default class Task {
  constructor (task) {
    this.id = task && task._id !== null ? task._id : '';
    this.name = task && task.name !== null ? task.name : '';
    this.description = task && task.description !== null ? task.description : '';
    this.completed = task && task.completed !== null ? task.completed : false;
  }
}
