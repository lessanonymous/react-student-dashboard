import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

function ListItemLink(props) {
  const { avatar, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemAvatar>
          <Avatar alt={primary} src={avatar} />
        </ListItemAvatar>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default ListItemLink;
