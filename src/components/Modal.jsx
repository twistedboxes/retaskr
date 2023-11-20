import axios from "axios";
const Modal = (props) => {
  const open = props.open;
  const URL = "http://localhost:3000/tasks/";

  function editText(ev) {
    const taskText =
      ev.target.parentElement.parentElement.parentElement.firstChild;
    const modalText = ev.target;
    modalText.textContent = taskText.textContent;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const task = ev.target.parentElement.parentElement.parentElement.firstChild;
    const inputText = ev.target.firstChild;
    if (inputText.value != "") {
      try {
        let res = await axios.patch(URL + task.dataset.id, {
          content: inputText.value,
        });
      } catch (error) {
        console.log(error);
      }
      props.toggle();
      props.callback();
    }
  }

  return (
    <>
      {open && (
        <div className="flex justify-center items-center  w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-slate-600">
          <div className=" flex flex-col bg-white p-2 gap-2 rounded-lg w-3/4 ">
            <h2 onClick={editText} className="text-slate-900">
              Click here to show previous text!
            </h2>
            <form className="w-full" onSubmit={handleSubmit} action="">
              <input
                placeholder="New text"
                className="bg-sky-700 text-white rounded-lg p-2 m-1"
                type="text"
              />
              <button
                type="submit"
                className="bg-green-500 p-2 m-1 rounded-lg aspect-square font-bold"
              >
                V
              </button>
              <button
                onClick={props.toggle}
                className="bg-red-500 p-2 rounded-lg m-1 aspect-square font-bold"
              >
                X
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
