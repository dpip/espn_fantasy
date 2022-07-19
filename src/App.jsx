import React, { useState } from "react";

import "./App.css";
import AppContext from "./AppContext";
import { Routes, Route } from "react-router-dom";
import Players from "./pages/Players";
import Header from "./components/header";
import MobileNav from "./components/mobileNav";

const App = (props) => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [userFantasy, setUserFantasy] = useState([]);
  const [limit, setLimit] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const setPlayers = (playersList) => {
    setAllPlayers(playersList);
  };
  const setUserSelection = (player) => {
    const userCopy = [...userFantasy, player];
    const copy = Array.from(new Set(userCopy));
    if (copy.length >= 5) {
      setLimit(true);
    } else {
      setLimit(false);
    }
    setUserFantasy(copy);
  };
  const removeUserSelection = (item) => {
    let removedArray = userFantasy.filter((obj) => {
      return obj.personId !== `${item.personId}`;
    });
    setUserFantasy(removedArray);
    setLimit(false);
  };

  return (
    <AppContext.Provider
      value={{
        allPlayers,
        userFantasy,
        limit,
        mobileNav,
        setPlayers,
        setUserSelection,
        removeUserSelection,
        setMobileNav,
      }}
    >
      <Header />
      <MobileNav />
      <Routes>
        <Route path={"/"} element={<Players {...props} />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
