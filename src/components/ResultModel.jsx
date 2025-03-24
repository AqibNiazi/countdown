import React, { useImperativeHandle, useRef } from "react";

const ResultModel = ({ ref, targetTime, remainingTime, resetTime }) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog className="result-modal" ref={dialog}>
      {userLost && <h2>You Lost</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={resetTime}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModel;
