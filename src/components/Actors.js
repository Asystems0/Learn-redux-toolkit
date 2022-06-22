import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { getAllActorsAsync } from "../redux/actors";
import ActorItem from "./ActorItem";

function Actors() {
  const dispatch = useDispatch();

  const [actorNum, setActorNum] = useState(0);

  useEffect(() => {
    return () => dispatch(getAllActorsAsync());
  }, []);

  const actors = useSelector((state) => state.actors.data);

  const [actorsCurrent, serActorsCurrent] = useState([]);

  useEffect(() => {
    serActorsCurrent(actors.slice(actorNum, actorNum + 8));
  }, [actors]);

  useEffect(() => {
    serActorsCurrent(actors.slice(actorNum, actorNum + 8));
  }, [actorNum]);

  return (
    <div className="actorsDiv">
      <div className="btnDiv">
        <button
          className="btn"
          onClick={() => {
            if (actorNum > 7) {
              setActorNum(actorNum - 8);
            }
          }}
        >
          {/* <IoIosArrowBack /> */}
          {/* <MdOutlineArrowBackIosNew /> */}
          Back
        </button>
      </div>
      <div className="actors">
        {actorsCurrent &&
          actorsCurrent.map(
            (actor) => (
              // actor.id <= actorNum ? (
              <ActorItem key={actor.id} actor={actor} />
            )
            // ) : (
            //   ""
            // )
          )}
      </div>
      <div className="btnDiv">
        <button
          className="btn"
          onClick={() => {
            if (actorNum < 48) {
              setActorNum(actorNum + 8);
            }
          }}
        >
          {/* <IoIosArrowForward /> */}
          {/* <MdOutlineArrowForwardIos /> */}
          Next
        </button>
      </div>
    </div>
  );
}

export default Actors;
