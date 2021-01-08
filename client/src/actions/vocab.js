import { ADD_WORD } from "./actionTypes";

import { getFormBody } from "../helpers/utils";
import { APIUrls } from "../helpers/urls";

// export function fetchPosts() {
//   return (dispatch) => {
//     const url = APIUrls.fetchPosts();
//     fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log('data', data);
//         // to add to store
//         dispatch(updatePosts(data.data.posts));
//       });
//   };
// }

// action creater
export function addWordToList(word) {
  return (dispatch) => {
    const url = APIUrls.addword();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ word }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          dispatch(
            addVocab(word, data.newVocab.meaning, data.newVocab.category)
          );
        }
      });
  };
}

export function addVocab(word, meaning, category) {
  return {
    type: ADD_WORD,
    word,
    meaning,
    category,
  };
}
