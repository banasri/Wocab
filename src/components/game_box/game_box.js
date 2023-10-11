import React from 'react'
import GameTile from '../game_tile/game_tile';
import { useSelector } from 'react-redux';

function GameBox() {
  const words = useSelector(state => {
    console.log("inside gamebox useSelector");
    return state.words;
  });
  console.log("inside gamebox");
  console.log(words.word, words.word1, words.word2, words.word3, words.word4);
  return (
    <div>
      <GameTile word={words.word1} realword={words.word} row="1" />
      <GameTile word={words.word2} realword={words.word} row="2" />
      <GameTile word={words.word3} realword={words.word} row="3" />
      <GameTile word={words.word4} realword={words.word} row="4" />
    </div>
  )
}

export default GameBox
