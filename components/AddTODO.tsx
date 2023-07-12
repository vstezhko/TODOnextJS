import React from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { TODOItem } from "@/lib/redux/todoListSlice/todoSlice";

type AddTodoType = {
  editCard: string;
  newTODO: TODOItem;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTODO: () => void;
};

const AddTodo = ({
  editCard,
  newTODO,
  handleInputChange,
  handleAddTODO,
}: AddTodoType) => {

  return (
    <div className="flex justify-between flex-nowrap gap-3">
      <TextField
        className="w-full"
        id="outlined-multiline-static"
        label="type new todo here..."
        multiline
        maxRows={3}
        fullWidth={true}
        value={!editCard ? newTODO.value : ""}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        onClick={handleAddTODO}
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
