import { makeAutoObservable, runInAction } from "mobx";
import { getWords, Word } from "../api/getWords";

class CardsStore {
  cards: Word[] = [];
  topics: string[] = ["animal", "life", "money", "travel", "food"];
  activeTopic: string = "sdfsd";
  activeCard: Word = {
    word: "hello",
    spelling:
      "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
    id: "1",
  };

  set activeCardAction(card: Word) {
    this.activeCard = card;
  }
  topicAction(topic: string) {
    debugger;
    this.activeTopic = topic;
  }

  constructor() {
    makeAutoObservable(this);
  }

  getWordsAction = async () => {
    try {
      const res: Word[] = await getWords();
      runInAction(() => {
        this.cards = res;
      });
    } catch {
      console.log("Error fetching words");
    }
  };
}

export default new CardsStore();
