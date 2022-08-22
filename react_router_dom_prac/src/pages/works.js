import React from "react";
import {useParams} from 'react-router-dom'
const Work = ()=>{
  const param = useParams();
  console.log(param)
    return (
      <div className="Work">
        Work
      </div>
    );
  }
  
  export default Work;
  