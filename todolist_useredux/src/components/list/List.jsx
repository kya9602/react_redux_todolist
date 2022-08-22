import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
//import Todo from "../todo/Todo";

const List = () =>{
    const todos = useSelector((state)=>state.todos);
    
    return(
        <ListContainer>
            <h2>Working</h2>
                <ListWrapper>
                    

                </ListWrapper>
            <h2>Done</h2>
                <ListWrapper>

                </ListWrapper>
        </ListContainer>
    );
}

export default List;

const ListContainer = styled.div``

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`
const TodoContainer = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`