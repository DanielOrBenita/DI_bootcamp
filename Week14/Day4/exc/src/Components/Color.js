import { Component } from "react";
import Button from "@mui/material/Button";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState((state, props) => {
        return { favoriteColor: "yellow" };
      });
    }, 5000);
  };

  changeColor = () => {
    this.setState((state, props) => {
      return { favoriteColor: "blue" };
    });
  };

  render() {
    return (
      <header
        style={{
          border: "1px solid #000",
          padding: "20px",
          minWidth: "200px",
          display: "inline-block",
          marginTop: "20px",
        }}
      >
        <h3>My favorite color is: {this.state.favoriteColor}</h3>
        <Button
          variant="outlined"
          style={{ letterSpacing: "1px" }}
          onClick={this.changeColor}
        >
          Change color!
        </Button>
      </header>
    );
  }
}

export default Color;