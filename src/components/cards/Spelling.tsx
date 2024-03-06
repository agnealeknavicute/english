import { useEffect, useState } from "react";
import cardsStore from "../../stores/cards-store";
import { observer } from "mobx-react-lite";
import "./cards.css";
import { MdNotStarted } from "react-icons/md";
import { Topics } from "./Topics";
import { Outlet } from "react-router-dom";

export const Spelling = observer(() => {
  const { getWordsAction, cards } = cardsStore;

  useEffect(() => {
    getWordsAction();
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  console.log(cards[0]);
  return (
    <div className="text-center">
      <Outlet />
    </div>
  );
});
