import { useEffect, useState } from "react";
import Task from "./Task";
import axios from "axios";

const TaskList = (props) => {
  const [fetch, setFetch] = useState([]);
  async function getTasks() {
    const res = await axios.get(props.url);
    setFetch([...res.data]);
  }

  useEffect(() => {
    getTasks();
  }, [props.count]);

  const tasks = fetch.map((task) => (
    <Task
      count={props.count}
      callback={props.callback}
      completed={task.completed}
      id={task.id}
      key={task.id}
      content={task.content}
    />
  ));

  return (
    <div className="flex flex-col gap-2 w-1/2 text-center border-white p-4 border-b-4 border-l-4 border-r-4 rounded-b-lg">
      <h1>Your Tasks</h1>
      {tasks}
    </div>
  );
};

export default TaskList;
