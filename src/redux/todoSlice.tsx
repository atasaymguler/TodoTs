import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState, TodoType } from "../types/Types";

// 1) Payload Action dışarıdan veri aldığımız da tipini belirtmemize yardımcı olur.
// 2) initialState'in tipini belirtiriz bu yorum satırına aldığım kodda ama ben daha global yerde tanımlıyaam tiplerimi types klasörü altında
// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }
const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (
      state: TodoInitialState,action: PayloadAction<TodoType>) => {
        state.todos = [...state.todos , action.payload]
        console.log(state.todos)
    },
  },
});

export const {createTodo} = todoSlice.actions;

export default todoSlice.reducer;
