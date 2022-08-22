//import './App.css';
//yarn add styled-components
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
	// 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

const getBoxName = (color) => {
    switch (color) {
      case "red":
        return "빨간 박스";
      case "green":
        return "초록 박스";
      case "blue":
        return "파란 박스";
      default:
        return "검정 박스";
  }
};

const App = () => {
	// 그리고 우리가 만든 styled-components를 JSX에서 html 태그를 사용하듯이 사용합니다.
  const boxList = ["green", "blue", "red"];

  return (
    <StContainer>
      {boxList.map((box)=>(
        <StBox borderColor={box}>{getBoxName(box)}</StBox>
      ))}
    </StContainer>
  
  );
};

export default App;
