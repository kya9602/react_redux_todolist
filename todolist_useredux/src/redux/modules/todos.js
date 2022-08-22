//initial state
const initialState = [
	{
		id: '1', // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: true
	},
	{
		id: '2', // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
]

//Action value
const ADD_TODO="ADD_TODO"


//Redux
const todos = (state = initialState, action) =>{
    //console.log(action); // dispatch log찍기
    switch(action.type){
        // ADD_TODO이라는 case를 추가한다.
		// 여기서 말하는 case란, action.type을 의미한다.
		// dispatch로부터 전달받은 action의 type이 "ADD_TODO" 일 때
		// 아래 return 절이 실행된다. 

        case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos, action.payload],
            
            };

        default:
            return {...state};
    }
}

//Action Creator
export const addTodo =(payload)=>{
    return{
        type: ADD_TODO,
        payload:payload,
    };
};


export default todos;