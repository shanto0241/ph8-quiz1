import React from "react";

const Questions = () => {
  return (
    <div className="w-10/12 m-auto mb-10">
      <h1 className="text-3xl text-center font-mono shadow-sm py-2">
        FAQ's related to this assignment...
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg"
      >
        <div className="collapse-title text-xl font-medium">
          How does react work?
        </div>
        <div className="collapse-content">
          <p>
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg"
      >
        <div className="collapse-title text-xl font-medium">
          difference between props and state in react?
        </div>
        <div className="collapse-content">
          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-lg"
      >
        <div className="collapse-title text-xl font-medium">
          what is the uses of useEffect except data loading?
        </div>
        <div className="collapse-content">
          <p>
            useEffect() is for side-effects. A functional React component uses
            props and/or state to calculate the output. If the functional
            component makes calculations that don't target the output value,
            then these calculations are named side-effects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
