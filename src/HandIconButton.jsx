import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";
import styled from "styled-components";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

// className prop을 추가하고, img 태그에 적용해주세요
function HandIconButton({ value }) {
  const src = IMAGES[value];
  return <HandImg src={src} alt={value} />;
}

const HandImg = styled.img`
  opacity: 0.45;
  width: 55px;
  height: 55px;
`;

export default HandIconButton;
