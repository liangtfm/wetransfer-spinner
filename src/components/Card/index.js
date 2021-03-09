import React from "react";
import styled from "styled-components";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const CardContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  border: ${(props) => props.border || "1px solid #000000"};
  border-radius: 6px;
  color: ${(props) => props.color || "#000000"};
  display: flex;
  flex: 0 1 300px;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  margin: 0 25px;
`;

function Card(props) {
  return <CardContainer {...props}>{props.children}</CardContainer>;
}

export default Card;
export { CardBody, CardFooter };
