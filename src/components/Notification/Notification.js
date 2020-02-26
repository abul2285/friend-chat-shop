import React from "react";
import { useState } from "react";
import {
  Tooltip,
  IconButton,
  Menu,
  Badge,
  MenuItem,
  Typography
} from "@material-ui/core";
import { FaBell, FaCommentDots, FaThumbsUp } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
dayjs.extend(relativeTime);

const Notification = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const notifications = useSelector(state => state.friend.notifications);
  const dispatch = useDispatch();

  console.log(notifications);

  const handleOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = e => {
    setAnchorEl(null);
  };

  const onEntered = () => {
    let unreadNotificationIds = notifications
      .filter(notification => notification.read === false)
      .map(notification => notification.notificationId);
    dispatch({ type: "READ_NOTIFICATION", payload: unreadNotificationIds });
  };

  let notificationIcon;
  if (notifications && notifications.length > 0) {
    notifications.filter(notification => notification.read === false).length > 0
      ? (notificationIcon = (
          <Badge
            badgeContent={
              notifications.filter(notification => notification.read === false)
                .length
            }
            color="secondary"
          >
            <FaBell />
          </Badge>
        ))
      : (notificationIcon = <FaBell />);
  } else {
    notificationIcon = <FaBell />;
  }
  let notificationsMarkup;
  if (notifications && notifications.length > 0) {
    notificationsMarkup = notifications.map(notification => {
      const type = notification.type;
      const action = type === "like" ? "liked" : "comment on";
      const time = dayjs(notification.createdAt).fromNow();
      const color = notification.read ? "#333" : "#777";
      const icon =
        type === "like" ? (
          <FaThumbsUp color={color} />
        ) : (
          <FaCommentDots color={color} />
        );
      return (
        <MenuItem key={notification.createdAt} onClose={handleClose}>
          {icon}
          <Typography
            component={Link}
            color="secondary"
            variant="body1"
            to={`/friend/${notification.recipient}/post/${notification.postId}`}
          >
            {notification.sender} {action} your post {time}
          </Typography>
        </MenuItem>
      );
    });
  } else {
    notificationsMarkup = (
      <MenuItem onClick={handleClose}>You have no notification..</MenuItem>
    );
  }

  return (
    <>
      <Tooltip title="Notification" placement="right">
        <IconButton
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleOpen}
        >
          {notificationIcon}
        </IconButton>
      </Tooltip>
      <Menu
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onEntered={onEntered}
        anchorEl={anchorEl}
      >
        {notificationsMarkup}
      </Menu>
    </>
  );
};

export default Notification;
