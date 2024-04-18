// TaskInput 

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, deleteAllTask } from "../Store&Slices/Slices/TodoSlices";
import ToDo from "./TaskList";

function TaskInput() {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');

    ///task adding 
    function taskAdded() {
        if (newTask.trim().length > 0) {
            const todoData = {
                task: newTask,
                id: newTask + Math.floor(Math.random() * 100),
                checkVal:false,
            }
            dispatch(addTask(todoData));
            setNewTask('')
        }
        else {
            alert('task empty')
        }
    };


    // submission by enter key
    function HandleClick(e) {
        if (e.key === 'Enter') {
            taskAdded();
        }
    };

    return (
        <>
            <div className=' bg-indigo-300 flex flex-col items-center justify-center rounded-md p-4 shadow-indigo-950 shadow-md scale-90 sm:scale-100'>
                <h1 className=" text-blue-950 text-2xl">ToDo</h1>

                <div className='flex flex-row items-center justify-center p-3 bg-blue-400 rounded-md shadow-sm shadow-slate-800'>

                    <input type="text" placeholder='Add New Task....' className=' placeholder:text-zinc-700 p-3 rounded-md mr-2 max-w-64 '
                        value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => HandleClick(e)}
                    />
                    <button className=' p-3 rounded-md bg-slate-800 active:scale-95 '
                        onClick={(e) => taskAdded(e)} >➕</button>

                </div>

                {/* tasklist here */}
                <ToDo />

                <button className='shadow-sm shadow-slate-800 p-3 rounded-md bg-blue-600 active:scale-95 '
                    onClick={() => dispatch(deleteAllTask([]))}  > Delete All</button>
            </div>
            
            <p className=" text-sm text-slate-800 text-center m-1">
                Developed by Ayaz khan at 18/04/2024
            </p>
        </>

    )
}

export default TaskInput
