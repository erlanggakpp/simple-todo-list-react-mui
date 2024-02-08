import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({ todo, deleteTodo, changeStatus }) {
    const labelId = `label-for-${todo.id}`;
    return (
        <ListItem
            secondaryAction={
                <IconButton onClick={deleteTodo} edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={changeStatus} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.status == "completed" ? true : false}
                        tabIndex={-1}
                        disableRipple={false}
                        inputProps={{ "aria-labelledby": labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.name} />
            </ListItemButton>
        </ListItem>
    );
}
