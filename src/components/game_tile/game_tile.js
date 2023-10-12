import React from 'react';
import "./game_tile.css"
import { useSelector, useDispatch } from 'react-redux';

function GameTile(props) {
    
   console.log("props game_tile");
   console.log(props);
   
   let realWord = props.realword;

   const current = useSelector((state)=>{
    return state.current;
   });
   console.log("current" + current);
  //initialise the hook
   const dispatch = useDispatch();
   const setkeycolor = (letter, color) => {
      dispatch({ type: "SET_KEYCOLOR", key: letter, color: color })
   };

   function replaceChar(origString, replaceChar, index)
    {
        let firstPart = origString.slice(0, index);
         
        let lastPart = origString.slice(index + 1);
     
        let newString =
            firstPart + replaceChar + lastPart;
         
        return newString;
    };

   const checkvalidity = (index) => 
    {
      console.log("in checkvalidity");
      console.log("index : " + index);
      console.log("current , props.row" , current, props.row);
      console.log("real word : " + props.realword + ", word : " + props.word);
    if (current > props.row) {
      if (props.word.toLowerCase()[index] === realWord.toLowerCase()[index]) {
        console.log("green");
        setkeycolor(props.word[index], "#6aaa64");
        realWord = replaceChar(realWord, ' ', index);
        return "tile green";
      } else if (realWord.toLowerCase().includes(props.word.toLowerCase()[index])) {
        console.log("yellow");
        setkeycolor(props.word[index], "#c9b458");
        return "tile yellow";
      } else {
        console.log("grey");
        setkeycolor(props.word[index], "#787c7e");
        return "tile grey";
      }
    }
    console.log("tile");
    return "tile";
  };
  return (
      <section>
        <div className={props.word[0] ? checkvalidity(0) : "tile"}>
          {props.word ? props.word[0] : null}
        </div>
        <div className={props.word[1] ? checkvalidity(1) : "tile"}>
          {props.word ? props.word[1] : null}
        </div>
        <div className={props.word[2] ? checkvalidity(2) : "tile"}>
          {props.word ? props.word[2] : null}
        </div>
        <div className={props.word[3] ? checkvalidity(3) : "tile"}>
          {props.word ? props.word[3] : null}
        </div>
        <div className={props.word[4] ? checkvalidity(4) : "tile"}>
          {props.word ? props.word[4] : null}
        </div>
      </section>
    // <div>
    //     <div className={props.word[0] ? checkvalidity(0) : "tile"}>
    //       {props.word ? props.word[0] : null}
    //     </div>
    //     <div className={props.word[1] ? checkvalidity(1) : "tile"}>
    //       {props.word ? props.word[1] : null}
    //     </div>  
    //     <div className={props.word[2] ? checkvalidity(2) : "tile"}>
    //       {props.word ? props.word[2] : null}
    //     </div>
    //     <div className={props.word[3] ? checkvalidity(3) : "tile"}>
    //       {props.word ? props.word[3] : null}
    //     </div>
    //     <div className={props.word[4] ? checkvalidity(4) : "tile"}>
    //       {props.word ? props.word[4] : null}
    //     </div>
    //     <div className={props.word[5] ? checkvalidity(5) : "tile"}>
    //       {props.word ? props.word[5] : null}
    //     </div>
    //     <div className={props.word[6] ? checkvalidity(6) : "tile"}>
    //       {props.word ? props.word[6] : null}
    //     </div>
    //     <div className={props.word[7] ? checkvalidity(7) : "tile"}>
    //       {props.word ? props.word[7] : null}
    //     </div>
    // </div>
  )
}

export default GameTile
