import { useState } from "react";
import Button from "./Button";
import GlobalStyle from "./GlobalStyle";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import styled from "styled-components";
import resetImg from "./assets/ic-reset.svg";
import ScoreCss from "./Score";
import Hands from "./Hands";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [result, setResult] = useState("");
  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    setResult(getResult(nextHand, nextOtherHand));
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };
  console.log(result);

  return (
    <MainContainer>
      <GlobalStyle />
      <Title>가위바위보</Title>
      <Button onClick={handleClearClick}>
        <img src={`${resetImg}`} alt="초기화" />
      </Button>
      <ScoreCss score={score} otherScore={otherScore} />
      <BoxOuter>
        <BoxInner>
          <Hands hand={hand} otherHand={otherHand} result={result} />
          <Bet>
            <span>배점</span>
            <input
              type="number"
              value={bet}
              min={1}
              max={9}
              onChange={handleBetChange}
            ></input>
            <span>배</span>
          </Bet>
          <History>
            <h2>승부 기록</h2>
            <p> {gameHistory.join(", ")}</p>
          </History>
        </BoxInner>
      </BoxOuter>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 575px;
  max-width: 620px;
  margin: 45px auto;
  padding: 50px;
  border-radius: 44px;
  text-align: center;
  background: #6f00ff;
  background-color: #6f00ff;
  box-shadow: 0 4.2px 2px #5900cc, 0 -4.2px 2px #8500ff;
`;

const Title = styled.h1`
  margin: 0 0 34px;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-shadow: 0 3px 0 #a875e9;
  letter-spacing: 0.19px;
  -webkit-text-stroke: 1px #fff;
`;

const BoxOuter = styled.div`
  border-radius: 35px;
  padding: 5px;
  box-shadow: 0 3px 8px 0 rgba(56, 15, 110, 0.44);
  margin: 26px 0 23px;
`;

const BoxInner = styled.div`
  border-radius: 35px;
  width: 100%;
  max-width: 520px;
  border: 6px solid #6e08fc;
  box-shadow: inset 0 3px 8px 0 rgba(56, 15, 110, 0.44);
`;

const Bet = styled.div`
  margin-top: -15px;
  color: #fff;
  font-size: 17px;
  > * {
    vertical-align: middle;
  }
  > input {
    width: 60px;
    margin: 0 9px;
    padding: 6px 10px;
    border: 2px solid #753cf7;
    border-radius: 10px;
    color: #fff;
    font-size: 17px;
    background-color: #6000db;
  }
`;

const History = styled.div`
  margin: 20px 40px 36px;
  padding: 20px 47px;
  border-radius: 19px;
  color: #625f63;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgba(89, 72, 112, 0.44),
    0 5px 3px rgba(215, 189, 248, 0.65);
  > h2 {
    margin: 0;
    color: #6000db;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.24px;
  }
  > p {
    margin-bottom: 0;
  }
`;

export default App;
