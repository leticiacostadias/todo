import React, { Component } from 'react';
import {
  Checkbox,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.css';

class TaskItem extends Component {
  render () {
    const task = this.props.task;

    return (
      <li className={`TaskItem ${this.props.className}`}>
        <Row>
          <Col xs={12} md={12}>
            <Checkbox
              checked={task.completed}
              onChange={() => this.props.onUpdateTask(task)}
            >
              {task.name}
            </Checkbox>
            {
              task.description ? (
                <p>{task.description}</p>
              ) : null
            }
          </Col>

          <Col xsOffset={8} mdOffset={8}>
            <Button
              className="TaskItem__button"
              bsStyle="warning"
              onClick={() => this.props.onDeleteTask(task.id)}
            >
              Delete task
            </Button>
          </Col>
        </Row>
      </li>
    );
  }
}

TaskItem.propTypes = {
    className: PropTypes.string,
    task: PropTypes.object,
    onUpdateTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
};

TaskItem.defaultProps = {
    className: '',
    task: {}
};

export default TaskItem;
