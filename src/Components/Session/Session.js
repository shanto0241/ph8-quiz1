import React from "react";

const Session = (props) => {
  const { sendSession } = props;
  console.log(sendSession);
  const showTime = sendSession.reduce((a, b) => a + b, 5);

  return (
    <div>
      <div title="session" className="col-span-1">
        <h1 className="text-end text-3xl font-mono underline mb-10">session</h1>
        <h2>add exercise</h2>
        <div className="flex justify-between items-center rounded-xl border-2 my-4 border-gray-300">
          <p className="p-2">exercise time:</p>
          <p className="p-2">
            {showTime} <span>minuites</span>
          </p>
        </div>
        <h2>tired! take a break</h2>

        <div className="flex justify-between items-center rounded-xl border-2 my-4 border-gray-300">
          <p className="p-2">break time:</p>
          <p className="p-2">
            <span>minuites</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Session;
