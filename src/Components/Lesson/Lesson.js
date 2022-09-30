import React from "react";

const Lesson = (props) => {
  //   console.log(props.lesson);
  const { img, name, category, description, bpm, session } = props.lesson;
  return (
    <div className="">
      <div className=" col-span-4 mb-10">
        <div title="lesson" className="card w-60 bg-gray-100 shadow-lg ">
          <figure>
            <img src={img} alt="Lesson" className="h-32 w-full" />
          </figure>
          <div className=" items-center text-center">
            <h2 className="text-xl text-slate-800 font-mono p-2">
              {name}-
              <span className="text-slate-700 font-sans">{category}</span>
            </h2>
            <p className="px-2 text-gray-500">
              {description.substring(0, 50)}...
            </p>
            <h4 className="text-md text-center p-2 ">
              tempo: <span className=" font-semibold">{bpm}</span>
            </h4>
            <h4 className="text-xl text-center ">
              session: <span className=" font-gray-800">{session}m</span>
            </h4>

            <div className="py-2">
              <button
                onClick={() => props.handleEvent(props.lesson)}
                className="btn btn-primary w-full hover:bg-gray-600"
              >
                start {name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
