import axios from "axios";

const Button = (props) => {
  const URL = "http://localhost:3000/tasks/";
  async function handleClick(ev) {
    const btn = ev.target;
    const task = ev.target.parentElement.firstChild;

    if (btn.textContent == "Edit") {
      console.log("Stai editando");
      console.log("Parent: ", ev.target.parentElement.firstChild.textContent);
      props.toggle();
    } else if (btn.textContent == "Delete") {
      const res = await axios.delete(URL + task.dataset.id);
      props.callback();
    }
  }

  return (
    <button
      onClick={handleClick}
      className="mt-2 active:bg-sky-700 hover:bg-sky-600 p-1 text-sm m-1 bg-sky-500"
    >
      {props.text}
    </button>
  );
};
export default Button;
