import styled from "styled-components";
import { TextField } from "@material-ui/core";
import classNames from "classnames";
import React from "react";

export const StyledInput = styled(TextField)`
  &.MuiTextField-root {
    & > * {
      margin: 0 auto 12px;
      padding: 0 0 0 5px;
      height: 35px;

      & > * {
        border: 0;
        color: #464a53;
        border-radius: 5px;
        font-family: inherit;
        & > * {
        }
      }
    }
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  color: #777;
`;

export const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 2px solid #e5ebf0;
`;

export const Icon = styled.div`
  width: 60px;
  display: flex;
  color: #757b8a;
  font-size: 20px;
  align-items: center;
  background: #e5ebf0;
  justify-content: center;
`;

export function Form({ classes, children, ...restOfProps }) {
  return (
    <StyledForm className={classNames("form", classes)} {...restOfProps}>
      {children}
    </StyledForm>
  );
}
export const Input = ({ classes, children, ...restProps }) => {
  return (
    <Wrapper className={classNames("input", classes)} {...restProps}>
      {children}
    </Wrapper>
  );
};

Input.Field = function InputField({ classes, children, ...restProps }) {
  return (
    <StyledInput className={classNames("input__field", classes)} {...restProps}>
      {children}
    </StyledInput>
  );
};

Input.Icon = function InputIcon({ classes, children, ...restProps }) {
  return (
    <Icon className={classNames("input__icon", classes)} {...restProps}>
      {children}
    </Icon>
  );
};
