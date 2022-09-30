import React from "react";

const Buttton = (props) => {
  const { setBreak, breakdata } = props;

  return (
    <div>
      <button
        onClick={() => setBreak(breakdata)}
        className="rounded-full text-xl text-slate-50 p-2 bg-gray-600"
      >
        {breakdata.time}s
      </button>
    </div>
  );
};

export default Buttton;
