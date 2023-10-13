import Instructions from "../instructions/instructions";
import React, { useState } from "react";
import "./game.css";
import Header from "../header/header";
import GameBox from "../game_box/game_box";
import Keyboard from "../keyboard/keyboard";
import Clue from "../clue/clue";
import { useSelector, useDispatch } from "react-redux";
import GameOver from "../gameover/game-over";

const Game = (props) => {
  const [showModal, setShowModal] = useState(true);
  const [showWord, setShowWord] = useState(true);
  const pass = useSelector((state)=>{
    return state.pass;
   });
  const gameOver = useSelector((state)=>{
    return state.gameOver;
   });
  const alert = useSelector((state)=>{
    return state.alert;
   });
  const tryAgain = useSelector((state)=>{
    return state.tryAgain;
   });
  

   const word = useSelector((state)=>{
    console.log("in game.js useSelector :word ");
    console.log("word", state.word);
    return state.word;
   });
  //initialise the hook
  const dispatch = useDispatch();
  const setWord = () => {
    dispatch({type:'SET_WORD'});
  };
  const onChangeAlert = () => {
    dispatch({ type: "CLEAR_ALERT" })
  };

  if (tryAgain) {
    console.log("game.js in tryAgain");
    setWord();
    setShowWord(true);
  }
  // useEffect(() => {
  //   console.log("game.js in use effect");
  //   setWord();
  //   setShowWord(true);
  // }, [tryAgain]);

  if (alert) {
    setTimeout(() => {
      onChangeAlert();
    }, 1000);
  }

  if (gameOver) {
    setTimeout(() => {
      setShowWord(false);
    }, 1000);
  }

  return (
    <main
      className="game"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <Header />
      <Clue row="1"/>
      {alert ? <p className="alert">Not a valid word</p> : null}
      <GameBox />
      <Keyboard />
      {showModal ? <Instructions /> : null}
      {gameOver ? <GameOver pass={pass} /> : null}
      {gameOver & showWord &!pass ? <p className="alert">{word}</p> : null}
    </main>
  );
};

export default Game;
