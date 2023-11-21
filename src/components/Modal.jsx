import { motion } from "framer-motion";
import axios from "axios";
const Modal = (props) => {
  const open = props.open;
  const URL = "http://localhost:3000/tasks/";

  async function handleSubmit(ev) {
    ev.preventDefault();
    const inputText = ev.target.firstChild;
    if (inputText.value != "") {
      try {
        let res = await axios.patch(URL + props.id, {
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
        <motion.div
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.2 }}
          initial={{ scale: 0 }}
          className="flex justify-center items-center  w-screen h-screen fixed top-0 left-0 bottom-0 right-0 bg-slate-600"
        >
          <div className=" flex flex-col bg-white p-2 gap-2 rounded-lg w-1/2 ">
            <h2 className="text-slate-900">{props.content}</h2>
            <form
              className="w-full flex justify-center items-center"
              onSubmit={handleSubmit}
              action=""
            >
              <input
                placeholder="New text"
                className="bg-sky-700 text-white rounded-lg p-2 m-1"
                type="text"
              />
              <button
                type="submit"
                className="fa-solid fa-circle-check text-green-600 mr-1 ml-1 text-2xl"
              ></button>
              <button
                onClick={props.toggle}
                className="fa-solid fa-circle-xmark text-red-600 mr-1 ml-1 text-2xl"
              ></button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
