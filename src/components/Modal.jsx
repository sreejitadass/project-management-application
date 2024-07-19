import { createPortal } from "react-dom";
import { useImperativeHandle, forwardRef, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));

  return createPortal(
    <dialog ref={dialog} className="bg-red-100 backdrop:bg-stone-900/90 px-16 py-10 text-center rounded-md shadow-md">
      {children}
      <form method="dialog">
        <button className="mt-8 text-stone-700 hover:text-red-500 px-3.5 py-2">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
