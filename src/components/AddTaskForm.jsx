import {useState} from 'react';

function AddTaskForm(props) {

    const [name, setName] = useState("")

    function handleButtonClicked() {
        props.onNewTask(name);
        setName("");
      }

    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value);
    }

    return (
    <div className="flex gap-2 items-center">  
        <input onChange={handleChange} className="bg-grey-200 border-1 rounded-sm p-1" placeholder="New task name"/>
        <button onClick={handleButtonClicked} className="bg-blue-500 p-1 rounded-sm text-white h-1/2 hover:bg-blue-700" >Add task</button>
    </div>
    );

}

export default AddTaskForm;