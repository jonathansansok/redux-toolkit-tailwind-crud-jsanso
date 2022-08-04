
import './App.css';
/* import {useSelector} from 'react-redux'; */
import TaskForm from './components/TaskForm.js';
import TaskList from './components/TaskList.js';

function App() {
/*   const taskState= useSelector(state => state.tasks)
  console.log(taskState); */
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm />
      <TaskList />

    </div>
  );
}

export default App;
