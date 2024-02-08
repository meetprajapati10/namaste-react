import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page!!</h1>
        <div>
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </userContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series 🚀</h2>
        <UserClass name={"First"} location={"Ahmedabad (class)"} />
        {/* <User /> */}
      </div>
    );
  }
}

export default About;
