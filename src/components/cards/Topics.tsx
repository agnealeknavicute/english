import { observer } from "mobx-react-lite";
import { useState } from "react";
import cardsStore from "../../stores/cards-store";
import "./topics.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Topics = observer(() => {
  let transitionNum = 0;

  let { topics, activeTopic } = cardsStore;
  const [start, setStart] = useState(false);
  console.log("active topic: ", activeTopic, start);
  return (
    <div className=" py-20 ">
      <div className="text-2xl ">Let's chose your topic!</div>
      <div className="justify-center flex">
        {topics.map((topic) => (
          <Link to={`topics/${topic}`}>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div
                onClick={() => {
                  cardsStore.topicAction(topic);
                  setStart(true);
                }}
                className=" flex items-center 
            text topicTransition
            justify-center bg-pink 
            my-20 mx-7 rounded-sm 
            bg-gradient-to-r from-indigo-500
            leading-20 w-32 h-32"
              >
                <p className="text-2xl">{topic}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
});
