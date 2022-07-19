import React, { useContext } from "react";

import AppContext from "../AppContext";
import "../assets/styles/mobilenav.scss";

import Chip from "../components/chip";
import Button from "./button";
import Remove from "../assets/images/remove";

const MobileNav = (props) => {
  const { mobileNav, userFantasy, limit, removeUserSelection } =
    useContext(AppContext);
  return (
    <>
      {mobileNav ? (
        <div className={"mobile-nav"}>
          <h2>
            {userFantasy.length === 0 ? "No players selected" : "Your team"}
          </h2>
          {userFantasy.map((player, index) => {
            const img = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
            return (
              <Chip
                type={"chip__user-fantasy-nav"}
                player={player}
                key={index}
                image={
                  <img
                    src={img}
                    className="chip__img"
                    alt={`${player.firstName} ${player.lastName}`}
                  />
                }
                text={`${player.firstName.charAt(0)}. ${player.lastName}`}
                subtext={player?.teamSitesOnly?.posFull}
                btn={
                  <Button
                    action={() => removeUserSelection(player)}
                    icon={<Remove />}
                  />
                }
                id={player.personId}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;
