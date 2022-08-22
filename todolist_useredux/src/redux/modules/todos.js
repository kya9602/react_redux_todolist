//initial state
const initialState = {
    todos:[
	{
		id: 'id1', // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: true
	},
	{
		id: 'id2', // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
    ],
    todo:{
        id:'0',
        title:'',
        body:'',
        isDone:false,
    },


};

//Action value
const ADD_TODO="ADD_TODO";
const TODO_DONE="TODO_DONE";
const TODO_REMOVE="TODO_REMOVE";
const DETAIL_ID="DETAIL_ID"

//Reducer
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

        case "TODO_DONE":
            return{
                ...state,
                    todos: state.todos.map((todo)=>
                     todo.id === action.payload ?{...todo, isDone : !todo.isDone}:todo)
            }
        
            case "DETAIL_ID":
                return {
                    ...state,
                    todo:(state.todos.find((todo) =>{
                    return todo.id === action.payload;
                    } )),
                
                };
            
            case "TODO_REMOVE" :
                return {
                    ...state,
                    todos:(state.todos.filter(todo => todo.id !== action.payload))

                }

        
        

        default:
            return state;
    }
}

//Action Creator
export const addTodo =(payload)=>{
    return{
        type: ADD_TODO,
        payload:payload,
    };
};
export const todoDone = (payload) =>{
    return{
        type: TODO_DONE,
        payload:payload,
    };
};
export const todoRemove =(payload) =>{
    return{
        type: TODO_REMOVE,
        payload:payload,
    }
}
export const detailId =(payload) =>{
    return{
        type: DETAIL_ID,
        payload:payload,
    }
}



export default todos;