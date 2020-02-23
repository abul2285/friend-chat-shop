import React from "react";
import styled from "styled-components";
import { Card, CardActions, CardHeader, CardContent } from "@material-ui/core";
import classNames from "classnames";

export const StyledCard = styled(({ className, ...props }) => (
  <Card {...props} classes={{ root: className }} />
))`
  background: #ffffff;
  width: 100%;
  margin: 0 auto 10px;
  .MuiCardContent-root {
    position: relative;
    height: 100%;
    & > .comment-content {
      display: flex;
      padding: 0 10px;
      margin-bottom: 20px;
      flex-grow: 1;
      & > .comment-body {
        width: 100%;
        padding: 0 30px;
        vertical-align: middle;
        border-radius: 30px;
        background-color: #ccc;
        display: inlene-block;
      }
    }
  }
  .card-header {
    display: flex;
    text-align: center;
    flex-grow: 1;
    & > * {
      text-align: center;
      padding: 5px;
      text-decoration: none;
      vertical-align: middle;
    }
  }
  .test-class {
    background: white;
    position: absolute;
    right: 0;
    top: 0;
  }
  .MuiCardActions-root {
    display: flex;
    flex-grow: 1;
    padding: 0;
    & > .comment-form {
      border-radius: 30px;
      display: inline-block;
      color: white;
      padding: 0 20px;
      & > * {
      }
    }
    & > * {
      width: 100%;
      text-align: center;
    }
  }
`;

const StcCard = styled(Card)`
  &.MuiCard-root {
    width: 100%;
  }
`;
const StcCardAction = styled(CardActions)`
  &.MuiCardActions-root {
    display: flex;
    flex-grow: 1;
    & > * {
      width: 100%;
      text-align: center;
    }
  }
`;
const StcCardHeader = styled(CardHeader)`
  &.MuiCardHeader-root {
    display: flex;
    background-color: yellow;
  }
`;
const StcCardContent = styled(CardContent)`
  &.MuiCardContent-root {
    font-size: 15px;
    line-height: 1.8;
    color: #111;
    & > .comment--box {
      display: flex;
      margin-left: 20px;
      border-radius: 20px;
      & > .commenter--image {
        width: 60px;
        margin: 5px;
      }
      & > .commenter--content {
        background: #f2f3f5;
        display: grid;
        width: 100%;
        border-radius: 30px;
        padding: 0 20px;
        font-size: 12px;
        color: black;
      }
    }
  }
`;

const StcCardMedia = styled.div`
  height: 300px;
  width: 100%;
  margin: 0 auto;
  & > .image {
    width: 100%;
    height: 100%;
  }
`;

export function MyCard({ classes, children, ...restOfProps }) {
  return (
    <StcCard className={classNames("card", classes)} {...restOfProps}>
      {children}
    </StcCard>
  );
}

MyCard.Actions = function MyCardActions({ classes, children, ...restOfProps }) {
  return (
    <StcCardAction
      className={classNames("card__actions", classes)}
      {...restOfProps}
    >
      {children}
    </StcCardAction>
  );
};

MyCard.Content = function MyCardContent({ classes, children, ...restOfProps }) {
  return (
    <StcCardContent
      className={classNames("card__actions", classes)}
      {...restOfProps}
    >
      {children}
    </StcCardContent>
  );
};

MyCard.Header = function MyCardHeader({ classes, children, ...restOfProps }) {
  return (
    <StcCardHeader
      className={classNames("card__actions", classes)}
      {...restOfProps}
    >
      {children}
    </StcCardHeader>
  );
};

MyCard.Media = function MyCardMedia({ classes, children, ...restOfProps }) {
  return (
    <StcCardMedia
      className={classNames("card__actions", classes)}
      {...restOfProps}
    >
      {children}
    </StcCardMedia>
  );
};
