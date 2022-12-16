import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";
import styled from "styled-components";
import yellow from "./assets/yellow.svg";
import yellowWin from "./assets/yellow-win.svg";

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

// className prop을 추가하고, img 태그에 적용해주세요
function HandIcon({ value, result }) {
  const src = IMAGES[value];
  return (
    <Hand result={result}>
      <HandImg src={src} alt={value} />
    </Hand>
  );
}

const HandImg = styled.img`
  opacity: 0.87;
  width: 70px;
  height: 70px;
  margin: 70px auto 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Hand = styled.div`
  display: inline-block;
  width: 207px;
  height: 207px;
  text-align: center;
  background-image: url(${({ result }) => result === "승리" ? `${ yellowWin }` : `${ yellow }`});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;

export default HandIcon;
