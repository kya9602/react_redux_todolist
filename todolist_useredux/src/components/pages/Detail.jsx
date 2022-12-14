import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailId } from "../../redux/modules/todos";

const Detail=()=>{
    
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const todos = useSelector((state)=>state.todos.todo);
    const {id} = useParams();
    //1 useParams로 파라미터(id값을 불러온다)

    //렌더링후에 가져오기 훅 useEffect
    useEffect(()=>{
        dispatch(detailId(id));
    },[dispatch,id])
    console.log(id)
   //렌더링 될때마다(id값이) dispatch로 id값을 detailId로 보낸다.
   //[dispatch,id] 는 dependency array라고 하는데 요녀석이 바뀌면 useEffect가 작동한다!
   


    return (
        <DetailLayout>
            <DetailContaine>
                <div>
                    <DetailHeader>
                        <div>ID : {id}</div>
                        <DetailBackButton 
                        onClick={() => {
                            Navigate("/");
                          }}
                        >이전으로</DetailBackButton>
                    </DetailHeader>
                    <DetailTitle>{todos.title}</DetailTitle>
                    <DetailBody>{todos.body}</DetailBody>
                </div>
            </DetailContaine>
        </DetailLayout>
    );
  
}

export default Detail;
const DetailLayout = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`

const DetailContaine = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
const DetailHeader = styled.div`
    display: flex;
    height: 80px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 24px;
    -webkit-box-align: center;
    align-items: center;
`

const DetailBackButton = styled.div`
    border: 1px solid gray;
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    
    
`

const DetailTitle = styled.h1`
    padding: 0px 24px;
    
`

const DetailBody = styled.div`
    padding: 0px 24px;
    
`
