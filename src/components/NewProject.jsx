import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onCancelNewProject, onSaveNewProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueRef = useRef();
  const modal = useRef();

  function handleSave() {
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueRef.current.value
    };

    if (
      newProject.title.trim() === '' ||
      newProject.description.trim() === '' ||
      newProject.dueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onSaveNewProject(newProject);
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-2xl uppercase font-bold text-stone-700 mb-2">Invalid input</h2>
        <p>You forgot to enter a value...!</p>
      </Modal>
      <div className="w-[35rem] mt-16 ml-48">
        <menu className="flex items-center justify-end gap-6 my-16">
          <li>
            <button onClick={handleSave} className="bg-green-800 px-3 py-3 rounded-lg text-stone-200 hover:bg-green-700">
              Save Changes
            </button>
          </li>
          <li>
            <button onClick={onCancelNewProject} className="text-stone-700 hover:text-red-700">
              Cancel
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" isTextArea={true} />
          <Input ref={dueRef} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
