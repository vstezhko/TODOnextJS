import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: TODOItem[] = [
    {
        id: "1234567",
        value: "Send email",
        done: false,
    },
    {
        id: "124567",
        value: "Bake cake",
        done: true,
    },
];

export const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        add: (state, action: PayloadAction<TODOItem>) => {
            state.unshift(action.payload);
        },
        delete: (state, action: PayloadAction<TODOItem["id"]>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        edit: (state, action: PayloadAction<TODOItem>) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        value: action.payload.value
                    }
                }
                return todo
            })
        },
        toggleDone: (state, action: PayloadAction<TODOItem["id"]>) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        },
    }
});

/* Types */

export interface TODOItem {
    id: string;
    value: string;
    done: boolean;
}
