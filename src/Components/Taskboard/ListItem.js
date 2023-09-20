import "./listItem.css"
import { AiOutlineCheck } from 'react-icons/ai';


const ListItem = ({text, deleteTodo, isChecked, toggleChecked}) => {
  return (
    <div className="todo">
        <div className={`${isChecked ? "todo_radio" : "todo_radio_unchecked" }`} onClick={toggleChecked}>
            {isChecked && <AiOutlineCheck />}
        </div>

        <div className={` ${isChecked ? "todo_text_checked" : "todo_text"}`}>
            {text}
        </div>
    </div>
  )
}

export default ListItem