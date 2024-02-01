import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP!");
    }, 1000);

    // console.log("useEffect called!");

    return () => {
      clearInterval(timer);
      // console.log("useEffect Return");
    };
  }, []);

  // console.log("render");
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Ahmedabad</h3>
      <h4>Contact: meet@gmail.com</h4>
    </div>
  );
};

export default User;
