import React, { Component } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import {
  CreateTask,
  TaskList
} from './components';
import './App.css';

export default class App extends Component {
  componentDidMount () {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Row>
            <Col xs={12} mdOffset={4} md={4}>
              <h1 className="App__title">To Do List</h1>
              <CreateTask onCreateTask={this.props.createTask}/>
            </Col>
          </Row>
        </header>

        <article>
          <Row>
            <Col xs={12} mdOffset={4} md={4}>
              <TaskList
                tasks={this.props.tasks}
                onDeleteTask={this.props.deleteTask}
                onUpdateTask={this.props.updateTask}
              />
            </Col>
          </Row>
        </article>
      </div>
    );
  }
}
