import { createPortal } from "react-dom";
import React, { useImperativeHandle, useRef } from "react";

const ResultModel = ({ ref, targetTime, remainingTime, resetTime }) => {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={resetTime}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
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
    </dialog>,
    document.getElementById("modal")
  );
};

export default ResultModel;
