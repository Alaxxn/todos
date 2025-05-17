import './App.css'
import Todo from "./components/Todo.tsx";
import AddTaskForm from "./components/AddTaskForm.tsx";
import Modal from "./components/Modal.tsx"; 
import {useState} from 'react';
import { nanoid } from "nanoid";


interface AppProps {
    tasks: Array<{id: string, name: string, completed:boolean}>;
  }

function App(props : AppProps) {

    const [taskList, setTaskList] = useState(props.tasks);
    const [isOpen, setOpen] = useState(false);

    function addTask(name : string){
        const newTask = {id: `todo-${nanoid()}`, name, completed:false}
        setOpen(false)
        setTaskList([...taskList, newTask])
    }
    

    function toggleTaskCompleted(id : string) {
        const updatedTasks = taskList.map((task) => {
          // if this task has the same ID as the edited task
          if (id === task.id) {
            // use object spread to make a new object
            // whose `completed` prop has been inverted
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTaskList(updatedTasks);
    }

    function deleteTask(id : string){
        const remainingTasks = taskList.filter((task) => id !== task.id);
        setTaskList(remainingTasks);
    }

    function onCloseRequested(){
        setOpen(false);
    }
    
    function toggleModal(){
        setOpen(true);
    }

    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            
            <button onClick={toggleModal} className="bg-blue-500 p-1 rounded-sm text-white h-1/2 hover:bg-blue-700" > Add task </button>

            <section className="flex-column">
                <h1 className="text-xl font-bold">To do</h1>
                <ul className="">
                {taskList.map((task) => (
                    <Todo
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    toggleTaskCompleted={toggleTaskCompleted}
                    deleteTask={deleteTask}
                    />
                ))}
                </ul>
            </section>
            
            <Modal headerLabel={"New Task"} isOpen={isOpen} onClose={onCloseRequested}>
                <AddTaskForm onNewTask={addTask}/>
            </Modal>
            
        </main>
    );

}

export default App;