# Redux를 공부했어요.
부모-자식의 데이터(함수, 변수명, 객체)를 전역에서 관리하기 위해 사용.

- modules을 공부했어요.

1. initial state
```const initialState  ={
    todos:[
        {id:1,title:"1react를 배워봅시다"},
        {id:2,title:"2react를 배워봅시다"},
    ]
};
```

2. Action value
```
const ADD_TODO = "ADD_TODO"
```

3. Reducer
```
case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos, action.payload],
            };
```
4. Action Creator
```
export const addTodo =(payload)=>{
    return{
        type: ADD_TODO,
        payload:payload,
    };
};
```

-configStore사용
config/configStore.js 참조

- styled-components를 공부했어요.
