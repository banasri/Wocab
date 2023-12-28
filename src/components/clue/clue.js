import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import "./clue.css";
function Clue(props) {

  const clue = useSelector((state)=>{
    //console.log("inside clue useSelector");
    return state.clue;
   });

   const wordIndex = useSelector((state)=>{
    //console.log("inside wordIndex useSelector");
    return state.wordIndex;
   });

   const todayWords = useSelector((state) => {
    return state.todayWords;
   })

  //initialise the hook
  const dispatch = useDispatch();

  useEffect(() => {
    if (todayWords && todayWords.length > 0) {
      dispatch({type:'SET_WORD'});
    }
  }, [todayWords, dispatch]);


  return (
    <div>
      <h2 className="clue">Word {wordIndex + 1} of 3, Clue : {clue}</h2>
    </div>
  )
}

export default Clue
