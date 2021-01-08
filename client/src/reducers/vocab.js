import { ADD_WORD } from "../actions/actionTypes";

const initialVocabState = {
  vocab: [],
};

console.log(initialVocabState, "initial");
export default function vocab(state = initialVocabState, action) {
  switch (action.type) {
    case ADD_WORD:
      return {
        vocab: [...state.vocab, action.word, action.meaning, action.category],
      };

    default:
      return state;
  }
}
