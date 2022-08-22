import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux"; // import 해주세요.
import { minusOne, plusOne } from "./redux/modules/counter";
import { addNumber, subNumber } from "./redux/modules/inpCounter";

function App() {
  const counterStore = useSelector((state) => state); // 추가해주세요.
  //console.log(counterStore); // 스토어를 조회해볼까요?
  //react-redux에서 제공하는 useSelector 라는 훅을 사용합니다.
  
  //const number = useSelector(state => state.counter.number); 
  //useSelector number라는 값을 사용하고자 한다면 위 코드처럼 꺼내서 사용하면 됩니다. 

  const dispatch = useDispatch();
  const number1 = useSelector(state => state.counter.number);

  

  const onChangeHandler = (evnet) => {
    const { value } = evnet.target;
		// event.target.value는 문자열 입니다.
		// 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
    setNumber(+value);
  };

  
  const [number2, setNumber] = useState(0);
  //console.log(number2);
  const globalNumber = useSelector(state => state.inpCounter.number2);
  //console.log(useSelector(state => state))

  const onClickAddNumberHandler = () => {
		// 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(addNumber(number2));
  };
  const onClickSubNumberHandler = () => {
		// 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(subNumber(number2));
  };

  return (
    <div className="App">
      <div className="step1">
        {number1}
        <button onClick={()=>{
          dispatch(plusOne()); //{type: “PLUS_ONE”} === plusOne()
        }}>+ 1</button>
        <button onClick={()=>{
          dispatch(minusOne());
        }}>- 1</button>
      </div>

        <hr />

      <div className="step2">
        <div>{globalNumber}</div>
        <input type="number" onChange={onChangeHandler}/>
        <button onClick={onClickAddNumberHandler}>더하기</button>
        <button onClick={onClickSubNumberHandler}>빼기</button>
      </div>
    </div>
  );
}

export default App;
