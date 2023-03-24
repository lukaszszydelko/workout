import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import axios from "axios";
import { EXERCISE_URL } from "../constants";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SaveWorkoutButton from "./SaveWorkoutButton";

class Workout extends React.Component {
  state = {
    date: dayjs("2022-04-17"),
    comments: "",
    exercises: [],
    activities: [
      {
        exercise: "",
        serie_1: "",
        serie_2: "",
        serie_3: "",
        serie_4: "",
        serie_5: "",
      },
    ],
  };

  componentDidMount() {
    this.resetState();
  }

  async setExercises() {
    await axios.get(EXERCISE_URL).then((res) =>
      this.setState({ exercises: res.data }, function () {
        console.log(this.state);
      })
    );
  }

  resetState = () => {
    this.setExercises();
  };

  _handleTextFieldChange = (e, key1, key2) => {
    const nextExercises = this.state.activities.map((exercise, i) => {
      if (i === key1) {
        let new_exercise = exercise;
        new_exercise[key2] = e.target.value;
        return new_exercise;
      } else {
        return exercise;
      }
    });
    this.setState({ activities: nextExercises });
  };

  _handleCommentsChange = (e) => {
    this.setState({ comments: e.target.value });
  };

  addRow() {
    let new_activity = {
      exercise: "",
      serie_1: "",
      serie_2: "",
      serie_3: "",
      serie_4: "",
      serie_5: "",
    };

    this.setState((previousState) => ({
      activities: [...previousState.activities, new_activity],
    }));
  }

  handleRemove(id) {
    const newActivities = this.state.activities.filter(
      (item) => this.state.activities.indexOf(item) !== id
    );
    this.setState({
      activities: newActivities,
    });
  }

  render() {
    const { response } = this.state;

    if (response === null) {
      return null;
    }
    console.log("QQQQQQQ ", this.state);

    return (
      <React.Fragment>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="Training_date"
              value={this.state.date}
              onChange={(newValue) => () =>
                this.setState({
                  date: newValue,
                })}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Exercise</TableCell>
                <TableCell align="right">Serie 1</TableCell>
                <TableCell align="right">Serie 2</TableCell>
                <TableCell align="right">Serie 3</TableCell>
                <TableCell align="right">Serie 4</TableCell>
                <TableCell align="right">Serie 5</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.activities.map((row) => (
                <TableRow
                  key={this.state.activities.indexOf(row)}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          displayEmpty
                          id="demo-simple-select"
                          value={row.exercise}
                          onChange={(e) =>
                            this._handleTextFieldChange(
                              e,
                              this.state.activities.indexOf(row),
                              "exercise"
                            )
                          }
                          inputProps={{ readOnly: this.props.readOnly }}
                        >
                          {" "}
                          {this.state.exercises.map((exercise) => (
                            <MenuItem key={exercise.id} value={exercise.name}>
                              {" "}
                              {exercise.name}{" "}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="serie_1"
                      label="Serie 1"
                      variant="filled"
                      onChange={(e) =>
                        this._handleTextFieldChange(
                          e,
                          this.state.activities.indexOf(row),
                          "serie_1"
                        )
                      }
                      inputProps={{ readOnly: this.props.readOnly }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="serie_2"
                      label="Serie 2"
                      variant="filled"
                      onChange={(e) =>
                        this._handleTextFieldChange(
                          e,
                          this.state.activities.indexOf(row),
                          "serie_2"
                        )
                      }
                      inputProps={{ readOnly: this.props.readOnly }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="serie_3"
                      label="Serie 3"
                      variant="filled"
                      onChange={(e) =>
                        this._handleTextFieldChange(
                          e,
                          this.state.activities.indexOf(row),
                          "serie_3"
                        )
                      }
                      inputProps={{ readOnly: this.props.readOnly }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="serie_4"
                      label="Serie 4"
                      variant="filled"
                      onChange={(e) =>
                        this._handleTextFieldChange(
                          e,
                          this.state.activities.indexOf(row),
                          "serie_4"
                        )
                      }
                      inputProps={{ readOnly: this.props.readOnly }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      id="serie_5"
                      label="Serie 5"
                      variant="filled"
                      onChange={(e) =>
                        this._handleTextFieldChange(
                          e,
                          this.state.activities.indexOf(row),
                          "serie_5"
                        )
                      }
                      inputProps={{ readOnly: this.props.readOnly }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      diabled={this.props.readOnly}
                      onClick={() =>
                        this.handleRemove(this.state.activities.indexOf(row))
                      }
                    >
                      Delete excercise
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            id="comments"
            label="Comments"
            variant="filled"
            onChange={(e) => this._handleCommentsChange(e)}
            inputProps={{ readOnly: this.props.readOnly }}
          />
        </Box>
      </React.Fragment>
    );
  }
}

export default Workout;
