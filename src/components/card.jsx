import React, { useContext, useEffect, useState } from "react";
import "../assets/styles/card.scss";
import AppContext from "../AppContext";

import Button from "./button";
import Remove from "../assets/images/remove";
import DefaultPlayerImage from "../assets/images/default-player.png";

const Card = (props) => {
  const { setUserSelection, removeUserSelection, userFantasy, limit } =
    useContext(AppContext);
  const [isFantasy, setIsFantasy] = useState(false);

  const addPlayer = () => {
    setUserSelection(props.player);
  };

  const handleImgError = (e) => {
    e.target.src = DefaultPlayerImage;
  };

  useEffect(() => {
    let checkIfUserIsInFantasy = userFantasy.some((el) => {
      return el.personId === props.player.personId ? true : false;
    });
    setIsFantasy(checkIfUserIsInFantasy);
  }, [userFantasy]);

  return (
    <div className={`card ${props.type}`}>
      <img
        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.id}.png`}
        onError={handleImgError}
        className="card__img"
        alt={`${props.firstName} ${props.lastName}`}
      />
      <div className="card__body">
        <div className={"card__player-info"}>
          <h2 className="card__title">
            {props.type === "user-fantasy-banner__card"
              ? `${props.firstName.substring(0, 1)}.`
              : `${props.firstName}`}
            &nbsp;
            {props.lastName}
          </h2>
          <h2 className="card__title card__title-position">
            {props?.position}
          </h2>
        </div>
        <div className={"card__actions"}>
          {isFantasy ? (
            <Button
              action={() => removeUserSelection(props.player)}
              className="card__btn"
              text={
                props.type === "user-fantasy-banner__card" ? null : "Remove"
              }
              icon={
                props.type === "user-fantasy-banner__card" ? <Remove /> : null
              }
            />
          ) : null}
          {!isFantasy ? (
            <Button
              action={addPlayer}
              disabled={limit || isFantasy ? true : false}
              className="card__btn"
              text="Add"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Card;
