import React, { useEffect, useState } from "react";
import Lesson from "../Lesson/Lesson";
import Session from "../Session/Session";

const Activity = () => {
  const [lessons, setLessions] = useState([]);
  const [sendSession, setSessions] = useState([]);

  useEffect(() => {
    fetch("lesson.json")
      .then((res) => res.json())
      .then((data) => setLessions(data));
  }, []);
  let time = 0;
  const handleEvent = (lessons) => {
    const { session } = lessons;
    const data = [...sendSession, session];
    setSessions(data);
  };
  return (
    <div>
      <div className="grid grid-cols-4 w-10/12 m-auto">
        <div className=" col-span-3">
          <h1 className="text-start text-3xl font-mono underline mb-10">
            select your lesson
          </h1>
          <div className="grid grid-cols-3  m-auto">
            {lessons.map((lesson) => (
              <Lesson
                key={lesson.id}
                lesson={lesson}
                handleEvent={handleEvent}
              ></Lesson>
            ))}
          </div>
        </div>
        <Session time={time} sendSession={sendSession}></Session>
      </div>
    </div>
  );
};

export default Activity;
