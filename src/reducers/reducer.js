import wordsClues from "../../src/wordsClues.json";
import validWords from "../../src/validWords.json";

const initialState = {
    clue : "",
    clueType : "",
    meaning : "",
    example : "",
    wordLength : 5,
    current : 1,
    word : "",
    words : {
      word1: "",
      word2: "",
      word3: "",
      word4: "",
      word5: ""
    },
    alert: false,
    pass: false,
    tryAgain: false,
    gameOver: false,
    letterColors: {
        Q: null,
        W: null,
        E: null,
        R: null,
        T: null,
        Y: null,
        U: null,
        I: null,
        O: null,
        P: null,
        A: null,
        S: null,
        D: null,
        F: null,
        G: null,
        H: null,
        J: null,
        K: null,
        L: null,
        Z: null,
        X: null,
        C: null,
        V: null,
        B: null,
        N: null,
        M: null,
      }

};

// const clueReducer = createReducer(initialState, (builder) => {
//     console.log(builder);
//     builder.addCase('SET_WORD', (state, action) =>{
//         console.log("inside SET_WORD");
//         const index = Math.round((Math.random() * 4));
//         state.clue = wordsClues[0]["clues"][index].clue;
//         state.word = wordsClues[0]["clues"][index].word;

//     });
//     builder.addDefaultCase((state, action) => {
//        return state; 
//     });
// })
const clueReducer = (state = initialState, action) => {
  console.log("state ");
  console.log(state);
    switch(action.type) {
        case 'SET_WORD' : 
            const clueSize = wordsClues[0]["clues"].length;
            console.log("clueSize", clueSize);
            console.log("inside clueReducer : SET_WORD");
            const index = Math.floor((Math.random() * clueSize));
            console.log("index : " + index);
            console.log(wordsClues[0]);
            return { 
                ...initialState,
                clue : wordsClues[0]["clues"][index].clue,
                word : wordsClues[0]["clues"][index].word,
                clueType : wordsClues[0]["clues"][index].clueType,
                meaning : wordsClues[0]["clues"][index].meaning,
                example : wordsClues[0]["clues"][index].example,
                wordLength : wordsClues[0]["clues"][index].word.length
            };
        case 'EDIT_WORD' :
          console.log("inside clueReducer : EDIT_WORD"); 
        if (!state.pass) {
            let pos = "word" + state.current;
            console.log("pos - " + pos);
            console.log("action.letter - " + action);
            console.log(action);
            console.log("state.wordLength - " + state.wordLength);
            if (action.payload === "DEL") {
              return {
                ...state,
                words: {
                  ...state.words,
                  [pos]: state.words[pos].slice(0, -1)
                }  
              };
            }
            if (state.words[pos].length !== state.wordLength) {
              console.log("action");
              console.log(action);
              console.log("action.payload");
              console.log(action.payload);
              console.log(state.words[pos]);
              let newword = state.words[pos] + action.payload;
              console.log("word - " + newword);
              
              return {
                ...state,
                words: {
                  ...state.words,
                  [pos]: newword,
                }
              };
            }
          }
          return {
            ...state,
          };
          case "CHECK_WORD":
            console.log("inside Reducer : CHECK_WORD");
            let keyyy = "word" + state.current;
            console.log("state.words", state.words)
            keyyy = state.words[keyyy].toLowerCase().trim();
            if (validWords[0]["words"].includes(keyyy)) {
              console.log("valid word");
              console.log("CHECK_WORD, keyyy.length, state.wordLength, keyyy",
               keyyy.length, state.wordLength, keyyy);
              if ((keyyy.length === state.wordLength) & (keyyy === state.word.toLowerCase())) {
                return {
                  ...state,
                  pass: true,
                  gameOver: true,
                  current: state.current + 1,
                };
              } else if (keyyy.length >= 4 && keyyy.length <= state.wordLength) {
                if (state.current === 5) {
                  return {
                    ...state,
                    gameOver: true,
                    current: state.current + 1,
                  };
                }
                return {
                  ...state,
                  pass: false,
                  current: state.current + 1,
                };
              }
            } else {
              console.log("here 11111111111111111");
              return {
                ...state,
                alert: true,
              };
            };
            // console.log("here 222222222222222222");
            // return {
            //   ...state,
            //   alert: true,
            // };
        case "SET_KEYCOLOR":
          console.log("in SET_KEYCOLOR");
          console.log("action", action)
          const key = action.key;
          console.log("action.key, action.color", action.key, action.color);
          console.log("letterColors[action.key]", state.letterColors[action.key]);
          if( state.letterColors[action.key] === "#6aaa64") {
            return {
              ...state
            };
          } else if (state.letterColors[action.key] === "#c9b458" && 
          action.color === "#787c7e") {
            return {
              ...state
            };
          } else {
            return {
              ...state,
              letterColors: {
                ...state.letterColors,
                [key]: action.color,
              },
            };
          }
          
        case "CLEAR_ALERT":
          return {
            ...state,
            alert: false,
          };
        case "REFRESH":
          return {
            ...initialState,
            tryAgain: !state.tryAgain,
          };
        default:
            return state;
    };
}
export default clueReducer;