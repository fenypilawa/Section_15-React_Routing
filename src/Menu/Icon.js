import React, {useState} from 'react'

const Icon = ({todo}) => {
  const [icon, setIcon] = useState({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  });

  const[checkedIcon, setCheckedIcon] = useState (false)
  
    return (
    <div key={icon.id} className='icon'>
        <div className='icon-centang'>
            <input type="checkbox" checked = {icon.completed ? true : false}/>
        </div>
        <div className='icon-title'>
            <p className={icon.completed ? 'todo todo-fix' : 'todo-title'}>{icon.title}</p>
        </div>
        <div className='icon-btn'>
            <button className='btn-delete'> Delete </button>
        </div>
    </div>
  )
}

export default Icon