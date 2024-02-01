import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy",
      },
    };

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/meetprajapati10");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP!");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @meetprajapati</h3>
      </div>
    );
  }
}

export default UserClass;
