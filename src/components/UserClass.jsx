import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://avatars.githubusercontent.com/u/0?v=4",
        login: "dummy-username",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivanshtanonwork");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Unmount");
  }

  render() {
    const { name, location, avatar_url, login } = this.state.userInfo;

    return (
      <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-6 w-80 hover:shadow-xl transition-shadow duration-300">
        {/* Avatar */}
        <img
          src={avatar_url}
          alt="avatar"
          className="w-28 h-28 rounded-full border-4 border-purple-600 shadow-md mb-4"
        />

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

        {/* Location */}
        <h3 className="text-sm text-gray-500">{location || "Not Available"}</h3>

        {/* Contact (GitHub username) */}
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors"
        >
          @{login}
        </a>
      </div>
    );
  }
}

export default UserClass;
