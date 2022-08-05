/* import {useSelector} from 'react-redux'

 */
import { useState, useEffect } from "react";
//es useDispatch un hook para llamar a una funcion y no para leer un dato.
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid"; //para generar keys automaticas
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  /*     const StateTask = useSelector(state => state.tasks) */
  /*     console.log(StateTask); */
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task))
    } else {

      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4 mb-2' >
      <label htmlFor="title" className="block text-xs font-bold">Task:</label>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <button className="bg-indigo-600 px-2 py-1">Save</button>
    </form>
  );
}

export default TaskForm;
