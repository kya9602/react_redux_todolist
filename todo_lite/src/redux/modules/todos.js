const initialState  ={
    todos:[
        {id:1,title:"1react를 배워봅시다"},
        {id:2,title:"2react를 배워봅시다"},
    ]
};
const ADD_TODO = "ADD_TODO"

//리듀서(변화를 일으키는 함수)
const todos = (state = initialState, action) =>{
    console.log(action); // dispatch log찍기

    switch(action.type){
        // PLUS_ONE이라는 case를 추가한다.
		// 여기서 말하는 case란, action.type을 의미한다.
		// dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
		// 아래 return 절이 실행된다. 

        case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos, action.payload],
            };

        default:
            return state;
    }
}
export const addTodo =(payload)=>{
    return{
        type: ADD_TODO,
        payload:payload,
    };
};


export default todos;