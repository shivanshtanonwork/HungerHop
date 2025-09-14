import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://github.com/shivanshtanonwork",
        login: "dummy-usrname",
      },
    };
  }

  async componentDidMount() {
    // console.log("Child Component is called");
    const data = await fetch("https://api.github.com/users/shivanshtanonwork");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
