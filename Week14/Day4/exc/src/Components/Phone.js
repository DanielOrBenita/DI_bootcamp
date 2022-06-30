import { Component } from "react";
import Button from "@mui/material/Button";

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }

  changeColor = () => {
    this.setState((state, props) => {
      return { color: "blue" };
    });
  };

  render() {
    return (
      <div>
        <h2>My phone is a {this.state.brand}</h2>
        <p style={{ fontSize: "20px" }}>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <Button
          variant="outlined"
          style={{ letterSpacing: "1px" }}
          onClick={this.changeColor}
        >
          Change color!
        </Button>
      </div>
    );
  }
}

export default Phone;