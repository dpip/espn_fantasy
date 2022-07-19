import React from "react";

const AppContext = React.createContext({
  allPlayers: [],
  userFantasy: [],
  setPlayers: () => {},
  setUserSelection: () => {},
});

export default AppContext;
