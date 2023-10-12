import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'

function Clue(props) {

  const clue = useSelector((state)=>{
    console.log("inside clue useSelector");
    return state.clue;
   });

   const word = useSelector((state)=>{
    return state.word;
   });

  //initialise the hook
  const dispatch = useDispatch();
  const setWord = () => {
    dispatch({type:'SET_WORD'});
  };

  useEffect(() => {
    // console.log("props");
    // console.log(props);
    console.log("clue.js - in useEffect ");
    setWord();
  }, []);


  return (
    <div>
      <h2>Clue : {clue}</h2>
      {/* <h2>Word : {word}</h2> */}
    </div>
  )
}

export default Clue
