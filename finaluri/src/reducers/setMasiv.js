import { useState } from "react";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DICREMENT":
      return state - 1;
    default:
      return state;
  }
};

// const getMasiv = (value) => {
//   //   const [getInfo, setGetinfo] = useState([]);
//   //   setGetinfo(value);
//   console.log(value);
// };

export default counter;
