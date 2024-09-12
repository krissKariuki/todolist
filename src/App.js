import './main.css'
import './style.css'
import {useState,useEffect} from 'react'
import useStorage from './utils/useStorage'
import timestamp from './utils/timestamp'
import Popup from './components/Popup'


export default function App()
{

const [todos,setTodos,removeTodos]=useStorage('todos',[])
const [todo,setTodo,removeTodo]=useStorage('todo-text','')
const [popupWindow,setPopupWindow]=useState({state:false,message:'are you sure to continue ?'})

//add item
function addTodo()
{
if(todo.trim()=='') return
setTodos([...todos,{completed:false,time:timestamp(),text:todo}])
setTodo('')
}

//toggle checkbox
function checkTodo(id)
{
const modTodos=[...todos]

modTodos[id].completed=!modTodos[id].completed
setTodos(modTodos)
}
//delete item
function deleteTodo(todoId)
{
const modTodos=todos.filter((_,id)=>id!==todoId)
setTodos(modTodos)
}

//request clear of todolist
function promptClear()
{

if(todos.length<=0)return
setPopupWindow({state:true,message:'are you sure to clear todolist?'})
}

//accept clear todolist
function promptClearAccept()
{
removeTodos()
setTodos([])
setPopupWindow({state:false,message:'are you sure to continue'})
}

//deny clear todolist
function promptClearDeny()
{
setPopupWindow({state:false,message:'are you sure to continue'})

}
//render ui
return(
<section className='todo-home'>


{/*popup window*/}
{popupWindow.state && <Popup message={popupWindow.message}acceptPrompt={promptClearAccept}denyPrompt={promptClearDeny}/>}

{/*add task input and button*/}
<div className='todo-header'>
<input  className='todo-write'type='text'placeholder='add todo  here'value={todo}onChange={(e)=>setTodo(e.target.value)}/>
<button className='todo-add'onClick={addTodo}>add</button>
</div>
<button className='todo-clear'onClick={promptClear}>clear</button>
{/*todolist items*/}
<div className='todo-container'>
{
todos.map((todo,id)=>(
<p key={id} className='todo-item'>
<input className='todo-check'type='checkbox'checked={todo.completed}onChange={()=>checkTodo(id)}/>
<span className={!todo.completed?'todo-text':'todo-text completed'}>{todo.text}</span>
<button className='todo-delete'onClick={()=>deleteTodo(id)}>delete</button>
<p className='timestamp'>{todo.time}</p>
</p>
))
}
</div>
</section>

)
}

