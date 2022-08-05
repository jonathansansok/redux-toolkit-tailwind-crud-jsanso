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
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
      />
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
