import styled from "styled-components";
import HandIcon from "./HandIcon";

function Hands({ hand, otherHand, result }) {
  const otherResult = result === "패배" ? "승리" : "";

  return (
    <HandsContainer>
      <HandIcon value={hand} result={result} />
      <HandsVersus>VS</HandsVersus>
      <HandIcon value={otherHand} result={otherResult} />
    </HandsContainer>
  );
}

const HandsContainer = styled.div`
  & > div {
    display: inline-block;
    vertical-align: middle;
  }
`;

const HandsVersus = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  text-shadow: 0 3px 0 hsla(0, 0%, 87.5%, 0.5);
  letter-spacing: -0.33px;
`;

export default Hands;
