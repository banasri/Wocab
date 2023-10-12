import React from "react";
import { useDispatch } from "react-redux";

const GameOver = (props) => {
  console.log("in game over!!!!");
  console.log(props);
    //initialise the hook
  const dispatch = useDispatch();
  const setRefresh = () => {
    dispatch({ type: "REFRESH" });
  };

  return (
    <div className="container">
      <section className="gameInstructions" style={{ width: "100%" }}>
        {props.pass ? (
          <div style={{ color: "green" }}>
            <p>
              <strong>YOU WON!</strong>
            </p>
            <p
              onClick={setRefresh}
              style={{ color: "blue", textDecoration: "underline" , cursor: "pointer"}}
            >
              Play again
            </p>
          </div>
        ) : (
          <div style={{ color: "red" }}>
            <p>
              <strong>Ooops! Sorry, you lost.</strong>
            </p>
            <p
              onClick={setRefresh}
              style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
            >
              Try again
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default GameOver;
