// TaskList 

import { useDispatch, useSelector } from 'react-redux'
import { checkedTask, deleteTask } from '../Store&Slices/Slices/TodoSlices';

function TaskList() {
   
    const dispatch = useDispatch();
    const todoState = useSelector((state) => state.allToDo);
    const Data = todoState.list;

    //task deleting
    function forDelete(id) {
        dispatch(deleteTask(id));
    };

    //task marking
    function handleCheck(id) {
        dispatch(checkedTask({id}))
    };

    return (

        <div className=' flex flex-col items-center justify-center m-3'>

            { //task show on UI
                Data && Data.map((val, index) => {
                return (
                    <div className='flex flex-row items-center justify-center p-3 bg-blue-400 rounded-md m-1 shadow-sm shadow-slate-800' key={index}>

                        <i className={`text-3xl m-2 cursor-pointer ${val.checkVal ? "fa-solid fa-square-check" : "fa-regular fa-square-check"}`}
                        onClick={() =>{handleCheck(val.id)}}
                        />
                        <input type="text"
                            className={`p-3 rounded-md mr-2 ${val.checkVal ? 'line-through' : 'no-underline'} `}
                            value={ val.task}
                            readOnly/>

                        <button className=' p-3 rounded-md bg-slate-800 active:scale-95 m-2'
                            onClick={() => forDelete(val.id)}>❌</button>

                    </div>
                )
            })
            }

        </div>

    )
}

export default TaskList;
