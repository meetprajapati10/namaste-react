import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    // console.log("useEffect called");
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      //   console.log("addEvent called");
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
      //   console.log("addEvent called");
    });
  }, []);

  //   console.log(onlineStatus + " " + "render");

  return onlineStatus;
};

export default useOnlineStatus;
