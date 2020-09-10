import React,{useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';
import Task from "./Task.js";


const TaskList = () => {
    const{tasks}=useContext(TaskListContext)

    return <div> 
        <ul className="list">
            {tasks.map((tasks)=>{ 
                return <Task/>
            })}

        </ul>
    </div>
    
}

export default TaskList
