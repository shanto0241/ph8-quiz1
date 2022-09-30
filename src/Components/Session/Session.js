import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Session = (props) => {
  const { sendSession } = props;
  //   console.log(sendSession);
  const showTime = sendSession.reduce((a, b) => a + b, 0);

  const diffToast = () => toast("You've done well. Cheers m/");

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
        <h2 className="py-2">tired! take a break</h2>
        <div className="flex gap-2">
          <p className="rounded-full text-xl text-slate-50 p-2 bg-gray-600">
            10s
          </p>
          <p className="rounded-full text-xl text-slate-50 p-2 bg-gray-600">
            10s
          </p>
          <p className="rounded-full text-xl text-slate-50 p-2 bg-gray-600">
            10s
          </p>
          <p className="rounded-full text-xl text-slate-50 p-2 bg-gray-600">
            10s
          </p>
          <p className="rounded-full text-xl text-slate-50 p-2 bg-gray-600">
            10s
          </p>
        </div>

        <div className="flex justify-between items-center rounded-xl border-2 my-4 border-gray-300">
          <p className="p-2">break time:</p>
          <p id="break-time" className="p-2">
            <span>minuites</span>
          </p>
        </div>
        <div className="py-2">
          <button
            onClick={diffToast}
            className="btn btn-primary w-full hover:bg-gray-600"
          >
            Completed!
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Session;
