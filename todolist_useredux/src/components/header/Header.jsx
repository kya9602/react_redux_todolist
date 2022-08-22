import React from "react";
import styled from "styled-components";


const Header=()=>{

    return(
        <HeaderCom>
        My Todo List
        </HeaderCom>
    );

}
export default Header;

const HeaderCom = styled.div`
align-items: center;
border: 1px solid #ddd;
display: flex;
height: 50px;
justify-content: space-between;
padding: 0 20px;
margin-bottom:20px;
`