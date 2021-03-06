import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaEdit, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Typography,
  Divider,
  IconButton,
  Box,
  CardActionArea,
  Tooltip
} from "@material-ui/core";

import UnknownImage from "../../images/images.png";
import ProfilePicture from "../../images/images4.png";
import { MyCard } from "../Card/Card";
import LinkIcon from "../Icon/LinkIcon";

dayjs.extend(relativeTime);

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FRIEND" });
  }, []);

  const { credentials } = useSelector(state => state.friend);

  const handleLogout = () => {
    dispatch({ type: "UNSET_AUTH" });
  };

  const handleImageChange = e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    dispatch({ type: "UPLOAD_IMAGE", payload: formData });
  };

  const handleImageClick = () => {
    let selectInput = document.getElementById("userImage");
    selectInput.click();
  };

  let friendMarkup;
  if (credentials.name) {
    friendMarkup = (
      <>
        <MyCard>
          <MyCard.Media>
            <img
              src={credentials.userImage}
              alt="profile-img"
              className="image"
            />
          </MyCard.Media>

          <MyCard.Content>
            <Typography variant={"h6"} gutterBottom>
              Name: {credentials.name}
            </Typography>
            <Typography variant="body1">Email: {credentials.email}</Typography>
            <Typography variant="body1">
              User Name: {credentials.userName}
            </Typography>
          </MyCard.Content>

          <Divider />
          <input
            type="file"
            id="userImage"
            onChange={handleImageChange}
            hidden="hidden"
          />

          <MyCard.Actions>
            <Box flexGrow={1}>
              <Tooltip title="Log out">
                <IconButton onClick={handleLogout}>
                  <FaSignOutAlt />
                </IconButton>
              </Tooltip>
            </Box>

            <Box flexGrow={1}>
              <Tooltip title="Edit Photo" placement="top">
                <IconButton onClick={handleImageClick}>
                  <FaEdit />
                </IconButton>
              </Tooltip>
            </Box>
          </MyCard.Actions>
        </MyCard>
      </>
    );
  } else {
    friendMarkup = (
      <MyCard>
        <CardActionArea>
          <MyCard.Media>
            <img src={UnknownImage} alt="sss" className="image" />
          </MyCard.Media>
        </CardActionArea>
        <MyCard.Actions>
          <Box flexGrow={1}>
            <LinkIcon title="Login" pathLocation="/login">
              <FaSignInAlt />
            </LinkIcon>
          </Box>

          <Box flexGrow={1}>
            <LinkIcon title="Sign up" pathLocation="/signup">
              <FaUserPlus />
            </LinkIcon>
          </Box>
        </MyCard.Actions>
      </MyCard>
    );
  }
  return (
    <Grid item sm={5} style={{ padding: "20px" }}>
      {friendMarkup}
    </Grid>
  );
};

export default Profile;
