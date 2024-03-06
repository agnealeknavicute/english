import cardsStore from "../../stores/cards-store";
import { observer } from "mobx-react-lite";
import "./cards.css";
import { MdNotStarted } from "react-icons/md";
import { useEffect, useState } from "react";

export const Cards = observer(() => {
  const { getWordsAction, cards } = cardsStore;

  useEffect(() => {
    getWordsAction();
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="text-center items-center flex">
      {cards.map((card) => (
        <div key={card.id}>
          <p>{card.word}</p>
          <p>{card.spelling}</p>
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            <MdNotStarted />
          </button>
          {isPlaying && (
            <audio
              className="invisible"
              src={card.spelling}
              autoPlay
              controls
            />
          )}
          {card.word}, {card.spelling}
        </div>
      ))}
    </div>
  );
});
