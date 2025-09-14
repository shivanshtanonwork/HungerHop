// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log("Parent Component is called");
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is HungerHop about page</h2>
        {/* <User name={"Shivansh Tandon (function)"} /> */}
        <UserClass name={"Shivansh Tandon (class)"} location={"Jabalpur, MP"} />
      </div>
    );
  }
}

export default About;
