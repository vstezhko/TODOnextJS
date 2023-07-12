import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardProps,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { TODOItem, todoListSlice } from "@/lib/redux/todoListSlice/todoSlice";
import { useDispatch } from "@/lib/redux/store";

interface StyledCardProps extends CardProps {
  editable?: boolean;
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, editable }) => ({
  border: editable
    ? `1px solid ${theme.palette.secondary.main}`
    : `1px solid ${theme.palette.primary.main}`,
}));

type TodoItemCardType = {
  todoItem: TODOItem;
  editCard: string;
  newTODO: TODOItem;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleEditTODO: (id: TODOItem["id"]) => void;
};
const TodoItemCard = ({
  todoItem,
  editCard,
  newTODO,
  handleInputChange,
  handleToggleEditTODO,
}: TodoItemCardType) => {
  const dispatch = useDispatch();

  const handleToggleDone = (id: TODOItem["id"]) => {
    dispatch(todoListSlice.actions.toggleDone(id));
  };

  const handleDeleteTODO = (id: TODOItem["id"]) => {
    dispatch(todoListSlice.actions.delete(id));
  };

  return (
    <StyledCard
      key={todoItem.id}
      variant="outlined"
      editable={editCard === todoItem.id}
    >
      <CardContent>
        <div className="flex">
          <Checkbox
            checked={todoItem.done}
            onChange={() => handleToggleDone(todoItem.id)}
            inputProps={{ "aria-label": "controlled" }}
          />

          {editCard != todoItem.id && (
            <Typography
              sx={{
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                marginBottom: "0",
              }}
              color="text.secondary"
              gutterBottom
            >
              {todoItem.value}
            </Typography>
          )}

          {editCard === todoItem.id && (
            <div className="w-full">
              <TextField
                id="standard-basic"
                variant="standard"
                fullWidth={true}
                multiline
                value={editCard && newTODO.value}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant={editCard === todoItem.id ? "contained" : "text"}
          color={editCard === todoItem.id ? "secondary" : "primary"}
          onClick={() => handleToggleEditTODO(todoItem.id)}
        >
          {editCard === todoItem.id ? "Save" : "Edit"}
        </Button>
        <Button size="small" onClick={() => handleDeleteTODO(todoItem.id)}>
          Delete
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default TodoItemCard;
