import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  Button,
  Form,
  FormGroup,
  FormControl
} from 'react-bootstrap';

import PropTypes from 'prop-types';
import './style.css';

class CreateTask extends Component {
  constructor () {
    super();

    this.state = {
      name: '',
      description: ''
    };
  }

  _resetForm () {
    this.setState({ name: '', description: '' });
  }

  createTask (e) {
    const data = {
        name: this.state.name,
        description: this.state.description
    };

    this.props.onCreateTask(data);
    this._resetForm();
  }

  getValidationState() {
    const length = this.state.name.length;
    if (length > 0) return 'success';
    else if (length > 0) return 'error';
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render () {
    return (
      <Form
        className={`CreateTask ${this.props.className}`}
        onSubmit={(e) => e.preventDefault()}
        horizontal
      >
        <FormGroup
          controlId="CreateTask-name"
          validationState={this.getValidationState()}
        >
          <Col componentClass={ControlLabel} xs={12} md={3}>
            Name
          </Col>
          <Col xs={12} md={9}>
            <FormControl
              className="CreateTask__input"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
            <FormControl.Feedback />
          </Col>
        </FormGroup>

        <FormGroup
          controlId="CreateTask-description"
        >
          <Col componentClass={ControlLabel} xs={12} md={3}>
            Description
          </Col>
          <Col xs={12} md={9}>
            <FormControl
              className="CreateTask__input"
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange.bind(this)}
            />
          </Col>
        </FormGroup>

        <Col xs={12} mdOffset={3}>
            <Button
              className="CreateTask__button"
              type="submit"
              bsStyle="primary"
              disabled={!(this.getValidationState() === 'success')}
              onClick={this.createTask.bind(this)}
            >
              Create task
            </Button>
          </Col>
      </Form>
    );
  }
}

CreateTask.propTypes = {
    className: PropTypes.string,
    onCreateTask: PropTypes.func.isRequired
};

CreateTask.defaultProps = {
    className: ''
};

export default CreateTask;
