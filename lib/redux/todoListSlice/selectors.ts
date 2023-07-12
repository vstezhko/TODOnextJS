import {ReduxState} from "@/lib/redux/store";

export const selectToDoList = (state: ReduxState) => state.todoList
