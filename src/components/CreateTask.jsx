import axios from "axios";

const CreateTask = (props) => {
  let d = new Date();
  async function handleSubmit(ev) {
    ev.preventDefault();
    let text = ev.target.firstChild;
    if (text.value != "") {
      try {
        const res = await axios.post(props.url, {
          content: text.value,
          creationDate: d,
          epoch: Date.now(),
          completed: false,
        });
        props.callback();
      } catch (error) {
        console.log(error);
      }
    }
    text.value = "";
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-4 border-white rounded-t border-4 w-1/2"
    >
      <input
        placeholder="Your task here"
        className="w-full p-2 text-slate-800 rounded-l placeholder-slate-400"
        type="text"
      />
      <button className="border-2 text-sm p-2 rounded-r hover:bg-slate-600">
        Submit
      </button>
    </form>
  );
};

export default CreateTask;
