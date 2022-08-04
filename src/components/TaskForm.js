/* import {useSelector} from 'react-redux'

 */
import { useState } from "react";
//es useDispatch un hook para llamar a una funcion y no para leer un dato.
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
function TaskForm() {
  /*     const StateTask = useSelector(state => state.tasks) */
  /*     console.log(StateTask); */
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch= useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
