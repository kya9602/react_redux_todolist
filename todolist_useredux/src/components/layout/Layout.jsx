import React from "react";
import styled from "styled-components";


const Layout=(props)=>{

    return(
        <LayoutCom>
            {props.children}
        </LayoutCom>
        
    );

}
export default Layout;

const LayoutCom = styled.div`
    max-width: 1200px;
    max-height: 800px;
    min-width: 800px;
    width: 95%;
    height: 95%;
    margin: 0 auto 0 auto;
    margin-top: 10px;
`