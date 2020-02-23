import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";

import Post from "../components/post/Post";
import Profile from "../components/profile/Profile";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_POSTS" });
  }, []);

  const posts = useSelector(state => state.post.posts);

  return (
    <Grid container justify="center">
      <Profile />
      <Grid item sm={5} style={{ padding: "20px" }}>
        {posts && posts.length ? (
          posts.map(post => <Post post={post} key={post.postId} modelOpen />)
        ) : (
          <p>post not found</p>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
