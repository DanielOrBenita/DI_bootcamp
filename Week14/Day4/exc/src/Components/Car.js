
import { Component } from "react";
import Garage from "./Garage";

class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
  }
  render() {
    return (
      <>
        <h1>
          This car is a {this.state.color} {this.props.carInfo.name}-
          {this.props.carInfo.model}
        </h1>
        <Garage size="small" />
      </>
    );
  }
}

export default Car;