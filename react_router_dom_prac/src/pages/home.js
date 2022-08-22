import React from "react";
import { useNavigate  } from "react-router-dom";

const Home = ()=>{
  const navigate = useNavigate();
  const onClickabc = ()=>{
    navigate('/work');
  }
    return (
      <div className="Home">
        <button onClick={onClickabc}>work로</button>
      </div>
    );
  }
  
  export default Home;