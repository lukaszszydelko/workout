import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";

import Button from "@mui/material/Button";

import axios from "axios";

import { WORKOUT_URL } from "../constants";

function addHours(date, hours) {
  date = new Date(date).setTime(
    new Date(date).getTime() + hours * 60 * 60 * 1000
  );
  return new Date(date).toISOString();
}

class SaveWorkoutButton extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  SendWorkout = () => {
    console.log("I am here");
    let workout_date = this.props.date;
    workout_date = addHours(workout_date, 12);
    let data = {
      workout_date: workout_date,
      comments: this.props.comments,
      series: this.props.activities,
    };

    console.log("I am here ", data);
    axios.post(WORKOUT_URL, data).then(() => {
      this.toggle();
    });
  };
  render() {
    return (
      <Fragment>
        <Button onClick={() => this.toggle()}>Save Workout</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you wanna save workout?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.SendWorkout()}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default SaveWorkoutButton;
