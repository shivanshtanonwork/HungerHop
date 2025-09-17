// import User from "./User";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component, useContext } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("Parent Component is called");
  }

  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 px-6 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            About HungerHop 🍴
          </h1>
          <h2 className="text-lg text-gray-600 mb-6">
            Welcome to{" "}
            <span className="font-semibold text-purple-600">HungerHop</span>,
            your one-stop destination for discovering and ordering delicious
            meals from the best restaurants around you.
          </h2>

          <div className="border-t border-gray-200 my-6"></div>

          {/* User Info Card (centered) */}
          <div className="flex justify-center">
            <UserClass name={"Shivansh Tandon"} location={"Jabalpur, MP"} />
          </div>
          <div>
            <UserContext.Consumer>
              {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Built with ❤️ using React, Tailwind, and modern web technologies.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
