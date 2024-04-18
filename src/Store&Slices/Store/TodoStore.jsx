// store 
import { configureStore } from "@reduxjs/toolkit";
import { TodoSlices } from "../Slices/TodoSlices";

const todoStore = configureStore({
  reducer: {
    allToDo: TodoSlices.reducer
  },
});




export { todoStore };