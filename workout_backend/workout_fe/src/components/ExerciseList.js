import React, { Component } from "react";
import { Table } from "reactstrap";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import ExerciseModal from "./ExerciseModal";

class ExerciseList extends Component {
  render() {
    const exercises = this.props.exercises;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {!exercises || exercises.length <= 0 ? (
            <tr>
              <td colSpan="1" align="center">
                <b>Ops, nothing here yet</b>
              </td>
            </tr>
          ) : (
            exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.name}</td>

                <td align="center">
                  <ExerciseModal
                    create={false}
                    exercise={exercise}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={exercise.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ExerciseList;
