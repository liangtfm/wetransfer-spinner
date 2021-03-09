import styled from "styled-components";

const CardFooter = styled.div`
  align-items: center;
  border-top: ${(props) => props.border || "1px solid #000000"};
  display: flex;
  flex: 0 1 20%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  width: 100%;
`;

export default CardFooter;
