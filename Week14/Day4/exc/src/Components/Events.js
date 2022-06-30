import { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }
  clickMe = () => {
    alert("I was clicked!");
  };

  handleKeyPress = (e) => {
    if (e.code === "Enter") {
      alert(`The enter key was pressed. Your input is: "${e.target.value}"`);
    }
  };

  logginHandler = () => {
    this.setState((state, props) => {
      return { isToggleOn: !this.state.isToggleOn };
    });
  };
  render() {
    return (
      <div>
        <TextField
          onKeyDown={this.handleKeyPress}
          id="outlined-basic"
          label="Text!"
          variant="outlined"
        />
        <Button
          variant={"contained"}
          onClick={this.clickMe}
          style={{ display: "block", margin: "20px auto" }}
        >
          Click Me!
        </Button>
        <Button variant="outlined" onClick={this.logginHandler}>
          {this.state.isToggleOn ? "On" : "Off"}
        </Button>
      </div>
    );
  }
}

export default Events;