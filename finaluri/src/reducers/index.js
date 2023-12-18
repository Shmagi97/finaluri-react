import { combineReducers } from "redux";
// import setItems from "./setItems";

import counter from "./setMasiv";

const allrediusers = combineReducers({
  //   items: setItems,

  count: counter,
});

export default allrediusers;
