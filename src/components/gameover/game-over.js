import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../gameover/game_over.css";

const GameOver = (props) => {
  console.log("in game over!!!!");
  console.log(props);
    //initialise the hook
  const dispatch = useDispatch();
  const setRefresh = () => {
    dispatch({ type: "REFRESH" });
  };
  const { word, clue, clueType, meaning, example } = useSelector((state) => ({
    word: state.word,
    clue: state.clue,
    clueType : state.clueType, 
    meaning : state.meaning,
    example : state.example
  }));
  
  return (
    <div className="containerDetails">
      <section className="gameInstructions" style={{ width: "100%" }}>
        {props.pass ? (
          <div style={{ color: "green" }}>
            <p>
              <strong>YOU WON!</strong>
            </p>
            <p style={{ color : "blue"}}>
              Clue : {clue}
            </p>
            <p
              style={{ color: "blue"}}
            >
              Ans : {word}
            </p>
            <p
              style={{ color: "blue"}}
            >
              Meaning : {meaning}
            </p>
            <p
              style={{ color: "blue"}}
            >
              Example Sentence : {example}
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
              style={{ color: "blue", textDecoration: "underline"}}
            >
              Ans : {word}
            </p>
            <p
              style={{ color: "blue"}}
            >
              Meaning : {meaning}
            </p>
            <p
              style={{ color: "blue"}}
            >
              Example Sentence : {example}
            </p>
            <p
               onClick={setRefresh}
               style={{ color: "blue", textDecoration: "underline" , cursor: "pointer"}}
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
