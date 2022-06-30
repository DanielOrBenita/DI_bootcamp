import { Component } from "react";

class Garage extends Component {
  render() {
    return <h2>Who lives in my {this.props.size} Garage?</h2>;
  }
}

export default Garage;