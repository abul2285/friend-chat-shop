import React from "react";
import { Divider, Typography } from "@material-ui/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { MyCard } from "../Card/Card";
import PostCreator from "../../images/images2.png";

dayjs.extend(relativeTime);

const StaticProfile = ({ profile }) => {
  return (
    profile && (
      <MyCard>
        <MyCard.Media>
          <img src={PostCreator} alt="profile-img" className="image" />
        </MyCard.Media>

        <MyCard.Content>
          <Typography variant={"h6"} gutterBottom>
            Name: {profile.name}
          </Typography>
          <Typography variant="body1">Email: {profile.email}</Typography>
          <Typography variant="body1">User Name: {profile.userName}</Typography>
          <Typography variant={"caption"}>
            Joined at {dayjs(profile.joinedAt).format("h:mm a,DD MMM YYYY")}
          </Typography>
        </MyCard.Content>

        <Divider />
      </MyCard>
    )
  );
};

export default StaticProfile;
