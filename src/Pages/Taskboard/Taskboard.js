import "./Taskboard.css"  
import { BsAlignMiddle } from "react-icons/bs";
import ListItem from "../../Components/Taskboard/ListItem";
import { useEffect, useState } from "react";
import Header from "../../Components/Taskboard/Header";
const App = () => {

    const [todo, setTodo] = useState("")
    const [allTodos, setAllTodos] = useState([])

    const addTodo = (e) => {
        e.preventDefault()

        const todoItem = {
            id: new Date().getTime(),
            text: todo,
            isChecked: false
        }

        if(todo !== ""){
            setAllTodos([...allTodos].concat(todoItem).reverse())
            setTodo("")
        }

        console.log(allTodos)
    }

    

    const getAllTodos = () => {
        let stored = JSON.parse(localStorage.getItem("todo"))

        if(stored) {
            setAllTodos(stored)
        }
    }


    const toggleChecked = (id) => {
        let updatedTodos = [...allTodos].map(todo => {
            if(todo.id === id){
                todo.isChecked = !todo.isChecked
            }

            return todo
        })

        setAllTodos(updatedTodos)
    }



    const deleteTodo = (id) => {
        const filteredTodo = allTodos.filter(todo => todo.id !== id)
        setAllTodos(filteredTodo)
    }


    useEffect(() => {
        getAllTodos()
    }, [])


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(allTodos))
    }, [allTodos])
    

  return (
    
    <div className="container">
        <Header></Header>
        <div className="App_todo ">
            
            <div className="App_todo_list layout">
           <div className="heading">My tasks!</div>

            <form className="App_input_wrapper" onSubmit={addTodo} >
                <input type={"text"} className="App_input" value={todo} onChange={(e) => setTodo(e.target.value)} />
                    {/* <BsAlignMiddle size={24} /> */}
                <button className="App_input_button" onClick={addTodo}>+</button>
            </form>
            
                {
                    allTodos.map(todo => (
                        <ListItem key={todo.id} deleteTodo={() => deleteTodo(todo.id)} text={todo.text} isChecked={todo.isChecked} toggleChecked={() => toggleChecked(todo.id)} />
                    ))
                }

                {
                    allTodos.length === 0 && (
                        <p className="empty"></p>
                    )
                }
            </div>
        </div>
        <div>
            <button className="button_main">+</button>
        </div>
    </div>
    
  )
}

export default App