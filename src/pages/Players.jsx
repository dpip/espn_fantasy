import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import AppContext from "../AppContext";
import Card from "../components/card";
import "../assets/styles/players.scss";
const allPlayersURL = "http://data.nba.net/10s/prod/v1/2021/players.json";

const Players = (props) => {
  const { allPlayers, userFantasy, setPlayers } = useContext(AppContext);

  const getAllPlayers = async () => {
    try {
      let players = await axios.get(allPlayersURL);
      setPlayers(players.data.league.standard);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <>
      <div className={"players"}>
        <div className={"all-players"}>
          {allPlayers.map((player, index) => {
            return (
              <Card
                player={player}
                key={index}
                id={player.personId}
                firstName={player.firstName}
                lastName={player.lastName}
                position={player?.teamSitesOnly?.posFull}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Players;
