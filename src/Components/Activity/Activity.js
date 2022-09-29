import React, { useEffect, useState } from "react";
import Lesson from "../Lesson/Lesson";

const Activity = () => {
  const [lessons, setLessions] = useState([]);

  useEffect(() => {
    fetch("lesson.json")
      .then((res) => res.json())
      .then((data) => setLessions(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 w-10/12 m-auto">
        <div className=" col-span-3">
          <h1 className="text-start text-3xl font-mono underline mb-10">
            select your lesson: {lessons.length}
          </h1>
          <div className="grid grid-cols-3  m-auto">
            {lessons.map((lesson) => (
              <Lesson key={lesson.id} lesson={lesson}></Lesson>
            ))}
          </div>
        </div>
        <div title="session" className="col-span-1">
          <h1 className="text-end text-3xl font-mono underline mb-10">
            session
          </h1>
          <h2>add exercise</h2>
          <div className="flex justify-between items-center rounded-xl border-2 my-4 border-gray-300">
            <p className="p-2">exercise time:</p>
            <p className="p-2">
              0.00 <span>minuites</span>
            </p>
          </div>
          <h2>tired! take a break</h2>

          <div className="flex justify-between items-center rounded-xl border-2 my-4 border-gray-300">
            <p className="p-2">break time:</p>
            <p className="p-2">
              0.00 <span>minuites</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
