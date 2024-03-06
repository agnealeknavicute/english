import axios from "axios";
import { useId } from "react";
import uniqid from "uniqid";

export interface Word {
  word: string;
  spelling: string;
  id: string;
}

export const getWords = async () => {
  try {
    let words = await axios
      .get<{ word: string }[]>("https://api.datamuse.com/words?rel_trg=animal")
      .then((res) => res.data.map((obj) => obj.word));
    let wordsWithSpelling = await getWordSpelling([
      words[0],
      words[4],
      words[1],
      words[3],
    ]);
    return wordsWithSpelling.filter((word) => word.spelling !== "");
  } catch (err) {
    return [];
  }
};

const getWordSpelling = (words: string[]) => {
  let promises: Promise<Word>[] = words.map(async (word) => {
    const id = uniqid();
    try {
      const res = await axios.get<any>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const spelling = res.data[0].phonetics[0].audio;
      return { word: word, spelling: spelling, id: id };
    } catch {
      return { word, spelling: "", id: id };
    }
  });
  return Promise.all(promises);
};
