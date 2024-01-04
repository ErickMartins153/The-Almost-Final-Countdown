import { forwardRef, useImperativeHandle, useRef } from "react";
//it forwards a ref from one component to another
//in order to use it we need to wrap the component as following

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  //besides the prop this now also recieves a second argument, and its the ref
  //this happens because we wrapped this component with forwardRef
  ref
) {
  const dialog = useRef(); //we need a ref for this comonent itself in order to use it in the imperative hook

  //this hook is used to define properties and methods that should be accessable
  //on this component from outside. This hook isnt used that often because in most cases
  //its better to work with props, but for use cases like this, this can be really useful
  //in order to make this component more stable and reusable
  useImperativeHandle(ref, () => {
    return {
      open() {
        //so when this open() method is called, the showModal
        //of this dialog will be called
        dialog.current.showModal();
        //the result will be the same as before but now we detached the timeChallange from the dialog element
      },
    };
  });
  //first parameter must be a ref, this hook must work together with forwardRerf
  //second value must be a function that return an object that groups what should be exposed
  //by this component to other components
  return (
    //and we should use this new ref created above here
    <dialog ref={dialog} className="result-modal">
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
