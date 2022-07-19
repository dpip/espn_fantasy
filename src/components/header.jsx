import React, { useContext, useEffect, useState } from "react";

import AppContext from "../AppContext";
import "../assets/styles/header.scss";

import Button from "./button";
import Chip from "./chip";
import Remove from "../assets/images/remove";

const Header = (props) => {
  const { mobileNav, setMobileNav, userFantasy, removeUserSelection } =
    useContext(AppContext);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {}, []);

  return (
    <header className={"header"}>
      <div className={"header__container-main"}>
        <div className={"header__logo-container"}>
          <img
            className="header__logo"
            src="https://media.contentapi.ea.com/content/dam/eacom/en-us/common/october-ea-ring.png"
            alt="Electronics Arts Home"
          ></img>
          <span>NBA Fantasy</span>
        </div>
        <Button action={() => handleMobileNav()} className="card__btn">
          <div className={"mobile-menu___open"}>
            <span />
            <span />
            <span />
          </div>
        </Button>
      </div>
      <div className={"user-fantasy__desktop"}>
        {userFantasy.map((player, index) => {
          const img = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`;
          return (
            <Chip
              type={"chip__user-fantasy-nav-desktop"}
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
    </header>
  );
};

export default Header;
