//모듈이란, State의 그룹이라고 했습니다. 

//초기 상태값
//(const [number, setNumber] = useState(0))과 같음
const initialState  ={
    number2:0,
};
const ADD_NUMBER = "ADD_NUMBER";
const Sub_NUMBER = "Sub_NUMBER";
//리듀서(변화를 일으키는 함수)
//state에  initialState를 할당해줘야 하는 것만 기억해주세요.
const inpCounter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                number2:state.number2 + action.payload,
            }
        case Sub_NUMBER:
            return {
                number2:state.number2 - action.payload,
            }
        default:            
          return state;
      }
    };


export const addNumber = (payload) => {
        return {
          type: ADD_NUMBER,
          payload: payload,
        };
    };
    export const subNumber = (payload) => {
        return {
          type: Sub_NUMBER,
          payload: payload,
        };
    };

export default inpCounter;