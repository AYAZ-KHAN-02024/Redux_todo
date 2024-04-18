// slices 
import { createSlice } from "@reduxjs/toolkit";


//this function add todo data in localStorage
function addToLocalStorage(state){
   localStorage.setItem('list',JSON.stringify(state));
};

//this function get data from localStorage which added by user
function getStorageList(){
    let data = JSON.parse(localStorage.getItem('list'));
    if(!Array.isArray(data)){
        return [];
    }else{
        return data;
    }
}

const TodoSlices = createSlice({
    name: 'allToDo',
    initialState: {
        list:getStorageList(),
    },
    reducers: {

        addTask(state, action) {
            state.list.push(action.payload);
            addToLocalStorage(state.list);
        },

        deleteTask(state, action) {
            state.list = state.list.filter((Task) => Task.id !== action.payload)
            addToLocalStorage(state.list)
        },
        checkedTask(state, action) {
            const {id}=action.payload;
            const task = state.list.find(val => val.id === id);            
            if (task){
                task.checkVal =!task.checkVal;
            }
            addToLocalStorage(state.list)
        },

        deleteAllTask(state, action) {
            state.list = action.payload
            addToLocalStorage(state.list)
        }
    }
});

export { TodoSlices }

export const { checkedTask, addTask, deleteAllTask, deleteTask } = TodoSlices.actions;
