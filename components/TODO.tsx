"use client";

import React, { useState } from "react";
import AddTodo from "@/components/AddTODO";
import { TODOItem, todoListSlice } from "@/lib/redux/todoListSlice/todoSlice";
import TodoItemCard from "@/components/TODOItemCard";
import { useDispatch, useSelector } from "@/lib/redux/store";
import { selectToDoList } from "@/lib/redux/todoListSlice/selectors";

export const TODO = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectToDoList);
  const [newTODO, setNewTODO] = useState<TODOItem>({
    id: "",
    value: "",
    done: false,
  });
  const [editCard, setEditCard] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTODO((prevTODO) => ({
      ...prevTODO,
      value: event.target.value,
    }));
  };

  const handleAddTODO = () => {
    newTODO.value &&
      dispatch(
        todoListSlice.actions.add({
          ...newTODO,
          id: Date.now().toString(),
        }),
      );
    setNewTODO({ id: "", value: "", done: false });
  };

  const handleToggleEditTODO = (id: TODOItem["id"]) => {
    if (editCard === "") {
      setEditCard(id);
      const editingTODO = todoList.find((todo) => todo.id === id);
      if (editingTODO) {
        setNewTODO(editingTODO);
      }
    } else {
      dispatch(todoListSlice.actions.edit(newTODO));
      setNewTODO({ id: "", value: "", done: false });
      setEditCard("");
    }
  };

  return (
    <div className="w-full md:max-w-2xl bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">TODO app</h1>
      <AddTodo
        editCard={editCard}
        newTODO={newTODO}
        handleInputChange={handleInputChange}
        handleAddTODO={handleAddTODO}
      />

      <div className="flex flex-col justify-start gap-3">
        {todoList.map((todoItem: TODOItem) => (
          <TodoItemCard
            key={todoItem.id}
            todoItem={todoItem}
            editCard={editCard}
            newTODO={newTODO}
            handleInputChange={handleInputChange}
            handleToggleEditTODO={handleToggleEditTODO}
          />
        ))}
      </div>
    </div>
  );
};

export default TODO;
