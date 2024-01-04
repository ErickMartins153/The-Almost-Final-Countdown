import { forwardRef } from "react";
//it forwards a ref from one component to another
//in order to use it we need to wrap the component as following

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  //besides the prop this now also recieves a second argument, and its the ref
  //this happens because we wrapped this component with forwardRef
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      {/*if we use a form with this method dialog inside a dialog tag
      a button that submits this form will close the dialog */}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

//save it in a variable and export it here bellow
export default ResultModal;
