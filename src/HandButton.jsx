import HandIconButton from "./HandIconButton";
import styled from "styled-components";
import purple from "./assets/purple.svg";
import yellow from "./assets/yellow.svg";

// CSS 파일로 스타일을 적용해주세요
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <HandButtonB onClick={handleClick}>
      <HandIconButton value={value} />
    </HandButtonB>
  );
}

const HandButtonB = styled.button`
  width: 166px;
  height: 166px;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${purple});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  &:hover {
    background-image: url(${yellow});
    opacity: 0.87;
    > img {
      opacity: 0.87;
    }
  }
`;

export default HandButton;
