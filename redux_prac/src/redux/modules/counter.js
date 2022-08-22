//모듈이란, State의 그룹이라고 했습니다. 

//초기 상태값
//(const [number, setNumber] = useState(0))과 같음
const initialState  ={
    number:0,
};
const PLUS_ONE = "PLUS_ONE"
const MINUS_ONE = "MINUS_ONE";
//리듀서(변화를 일으키는 함수)
//state에  initialState를 할당해줘야 하는 것만 기억해주세요.
const counter = (state = initialState, action) =>{
    console.log(action); // dispatch log찍기

    switch(action.type){
        // PLUS_ONE이라는 case를 추가한다.
		// 여기서 말하는 case란, action.type을 의미한다.
		// dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
		// 아래 return 절이 실행된다. 

        case "PLUS_ONE":
            return {
                number: state.number + 1,
            };
        
        case "MINUS_ONE":
            return{
                number: state.number -1,
            };
        
        default:
            return state;
    }
}
export const plusOne =()=>{
    return{
        type: PLUS_ONE,
    };
};
export const minusOne =()=>{
    return{
        type: MINUS_ONE,
    };
};


export default counter;