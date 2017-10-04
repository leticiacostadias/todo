import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';
import './style.css';

class TaskList extends Component {
  render () {
    return (
      <ul className={`TaskList ${this.props.className}`}>
        {
          this.props.tasks.map((task, key) => {
            return (
              <TaskItem
                onDeleteTask={this.props.onDeleteTask}
                onUpdateTask={this.props.onUpdateTask}
                task={task}
                key={key}
              />
            );
          })
        }
      </ul>
    );
  }
}

TaskList.propTypes = {
    className: PropTypes.string,
    tasks: PropTypes.array,
    onDeleteTask: PropTypes.func.isRequired,
    onUpdateTask: PropTypes.func.isRequired
};

TaskList.defaultProps = {
    className: '',
    tasks: []
};

export default TaskList;
