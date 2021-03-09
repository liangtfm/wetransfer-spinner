import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Button } from "./components/Button";
import UploadCard from "./components/UploadCard";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const DARK_THEME = {
  color: "#ffffff",
  backgroundColor: "#333333",
  spinnerColor: "#8a4baf",
};

function App(props) {
  if (props.theme === "dark") {
    props = Object.assign({}, props, DARK_THEME);
  }

  const onClickChangeTheme = () => {
    props.changeTheme();
  };

  return (
    <Container>
      <Button onClick={onClickChangeTheme}>Theme: {props.theme}</Button>
      <UploadCard {...props} />
    </Container>
  );
}

const mapStateToProps = ({ theme }) => {
  return { theme };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: () => dispatch({ type: "CHANGE_THEME" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
