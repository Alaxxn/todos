import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo(props) {

    return (
        <li>
            <label className="todo-label" htmlFor={props.id} >
            <input onChange={() => props.toggleTaskCompleted(props.id)} id={props.id} type="checkbox" defaultChecked={props.completed}/> {props.name}
            </label>
            <button onClick={() => props.deleteTask(props.id)} title='delete' className="text-grey-300 hover:text-grey-500 m-1"> <FontAwesomeIcon icon={faTrash} /> </button>
        </li>
    )


}

export default Todo;