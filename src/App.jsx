import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  const [count, setCount] = useState(0);
  function updateMainCount() {
    setCount(count + 1);
  }

  const URL = "http://localhost:3000/tasks/";
  return (
    <div className=" p-4 bg-blue-500 flex min-h-screen flex-col text-white justify-center items-center w-full ">
      <h1 className="font-bold text-2xl tracking-wider mb-2">ReTask[r]</h1>
      <CreateTask callback={updateMainCount} url={URL} />
      <TaskList count={count} callback={updateMainCount} url={URL} />
    </div>
  );
}

export default App;
