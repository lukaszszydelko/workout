import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ExerciseList from "./ExerciseList";
import ExerciseModal from "./ExerciseModal";


import axios from "axios";

import { EXERCISE_URL } from "../constants";

class Home extends Component {
  state = {
    exercises: []
  };

  componentDidMount() {
    this.resetState();
  }

  getExercises() {
    axios.get(EXERCISE_URL).then(res => 
      this.setState({ exercises: res.data }, function () {
        console.log(this.state)}));
  }
  
  resetState = () => {
    this.getExercises();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ExerciseList
              exercises={this.state.exercises}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ExerciseModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;