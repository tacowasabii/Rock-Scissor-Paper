import styled from "styled-components";

function Button({ children, onClick }) {
  return <ResetButton onClick={onClick}>{children}</ResetButton>;
}

const ResetButton = styled.div`
  background-color: transparent;
  position: absolute;
  top: 48px;
  right: 49px;
  cursor: pointer;
`;

export default Button;
