import { observer } from "mobx-react-lite";
import { useState } from "react";
import cardsStore from "../../stores/cards-store";

export const Topics = observer(() => {
  let { topics, activeTopic } = cardsStore;
  const [start, setStart] = useState(false);
  console.log("active topic: ", activeTopic, start);
  return (
    <div className="  ">
      <div className="text-lg">Let's chose your topic!</div>
      {topics.map((topic) => (
        <div
          onClick={() => {
            cardsStore.topicAction(topic);
            setStart(true);
          }}
        >
          {topic}
        </div>
      ))}
      <div>Topics</div>
    </div>
  );
});
