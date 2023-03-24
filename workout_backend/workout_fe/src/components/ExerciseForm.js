import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { EXERCISE_URL } from "../constants";

class ExerciseForm extends React.Component {
  state = {
    id: 0,
    name: "",
  };

  componentDidMount() {
    if (this.props.exercise) {
      const { id, name } = this.props.exercise;
      this.setState({ id, name });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createExercise = (e) => {
    e.preventDefault();
    axios.post(EXERCISE_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editExercise = (e) => {
    e.preventDefault();
    axios.put(EXERCISE_URL + this.state.id + "/", this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={this.props.exercise ? this.editExercise : this.createExercise}
      >
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <button>Send</button>
      </Form>
    );
  }
}

export default ExerciseForm;
