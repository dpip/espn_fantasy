import React, { useContext, useEffect, useState } from "react";

import AppContext from "../AppContext";
import Card from "../components/card";
import "../assets/styles/team.scss";

const Team = (props) => {
  const { userFantasy } = useContext(AppContext);
  return (
    <>
      {userFantasy ? (
        <div className={"user-fantasy-banner"}>
          {userFantasy.map((player, index) => {
            return (
              <Card
                type={"user-fantasy-banner__card"}
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
      ) : null}
    </>
  );
};

export default Team;
