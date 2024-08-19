import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ShowResult = forwardRef(function ShowResult(
  { targetTime, remaining },
  ref,
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const time = remaining / 10000;
  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      <h1> Result</h1>
      <p>
        The target Time was <strong> {targetTime} seconds</strong>
      </p>
      <p>
        you stopped the timer <strong>{time} seconds</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default ShowResult;
