import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

function ToDo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.text} />
      </ListItem>
    </List>
  );
}

export default ToDo;
