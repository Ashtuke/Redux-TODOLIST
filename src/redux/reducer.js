import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addtodosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {

    //   addtodos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    // removetodo
    removetodos: (state,action) =>{
        return state.filter(item =>item.id!== action.payload )
    },

    // Update
    Updatetodos: (state,action) =>{
        return state.map(todo => {
            if(todo.id === action.payload.id){
                return{
                    ...todo,
                    item: action.payload.item,
                } 
            }
            return todo;
        });

    } ,

    // Completedtodos 
    completetodos: (state,action) =>{
        return state.map(todo => {
            if(todo.id === action.payload){
                return{
                    ...todo,
                    completed:true,
                } 
            }
            return todo;
        });

    } ,
  },
});

export const { addTodos,removetodos, Updatetodos,completetodos } = addtodosReducer.actions;
export const reducer = addtodosReducer.reducer;
