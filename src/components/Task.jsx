import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import Modal from "./Modal";

const Task = (props) => {
  const URL = "http://localhost:3000/tasks/";
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("Stai aprendo/chiudendo il modal");
  };

  useEffect(() => {
    let posts = document.querySelectorAll(".post");
    posts.forEach((item) => {
      if (item.dataset.completed == "true") {
        item.classList.add("line-through");
        item.parentElement.classList.add("bg-green-400");
        item.parentElement.classList.remove("bg-white");
      } else if (item.dataset.completed == "false") {
        item.classList.remove("line-through");
        item.parentElement.classList.remove("bg-green-400");
        item.parentElement.classList.add("bg-white");
      }
    });
  }, [props.count]);

  async function handleClick(ev) {
    if (ev.target.dataset.completed === "false") {
      ev.target.dataset.completed = true;
      let complete = await axios.patch(URL + ev.target.dataset.id, {
        completed: true,
      });
      props.callback();
    } else {
      ev.target.dataset.completed = false;
      let incomplete = await axios.patch(URL + ev.target.dataset.id, {
        completed: false,
      });
      props.callback();
    }
  }

  return (
    <div className=" bg-white break-words p-2 rounded-lg">
      <h2
        onClick={handleClick}
        data-completed={props.completed}
        data-id={props.id}
        className="post text-slate-900 cursor-pointer"
      >
        {props.content}
      </h2>
      <Button open={modal} callback={props.callback} text="Delete" />
      <Button toggle={toggleModal} callback={props.callback} text="Edit" />
      <Modal callback={props.callback} open={modal} toggle={toggleModal} />
    </div>
  );
};

export default Task;