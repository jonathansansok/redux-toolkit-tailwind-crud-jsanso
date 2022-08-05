import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
/* import {useSelector} from 'react-redux'; */
import TaskForm from "./components/TaskForm.js";
import TaskList from "./components/TaskList.js";

function App() {
  /*   const taskState= useSelector(state => state.tasks)
  console.log(taskState); */
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
