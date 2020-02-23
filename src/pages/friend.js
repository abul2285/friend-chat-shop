import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Axios from "axios";

import StaticProfile from "../components/profile/StaticProfile";
import Post from "../components/post/Post";

const Friend = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const userName = props.match.params.userName;
    Axios.get(`/friend/${userName}`).then(res => {
      setProfile(res.data.user);
    });
  }, []);

  const posts = useSelector(state => state.post.posts);

  let postMarkup =
    posts.length > 0 && profile ? (
      posts.map(post => {
        if (profile.userName === post.creator) {
          return <Post post={post} key={post.createdAt} />;
        }
      })
    ) : (
      <p>no post from this user</p>
    );

  return (
    <Grid container spacing={3} justify="center">
      <Grid item sm={5}>
        {postMarkup}
      </Grid>
      <Grid item sm={5}>
        <StaticProfile profile={profile} />
      </Grid>
    </Grid>
  );
};

export default Friend;
