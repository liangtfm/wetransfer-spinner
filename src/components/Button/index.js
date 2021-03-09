import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 15px 40px;
`;

const ActiveButton = styled(Button)`
  background-color: #409fff;
  color: #ffffff;
`;

const CancelButton = styled(Button)`
  background-color: #ffffff;
  border: 1px solid #409fff;
  color: #409fff;
`;

export { Button, ActiveButton, CancelButton };
