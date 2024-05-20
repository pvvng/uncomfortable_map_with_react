import { useDispatch, useSelector } from "react-redux";
import React,{ useEffect, useState } from "react";
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { calculateDistance } from "../functions/calculateDistance";
import { uploadPath } from "../store";
import { EndMoveMode } from "./EndMoveModePromptComponent";
import { StartMoveMode } from './StartMoveModePromptComponent';


//calculate map
export default function CalPromt({count}){

    let dispatch = useDispatch();

    //store에 저장된 사용자 좌표 받아오기
    let userLocation = useSelector(state => state.userLocation);
    
    //총 거리 계산
    let [distances,setDistances] = useState(0);

    //usestate를 통해 재렌더링을 통한 길 생성
    let [movingPath, setMovingPath] = useState([]);

    let psedoMovingPath = [];

    useEffect(()=>{

        let interval;

        if(count === 0){
            interval = setInterval(()=>{
                psedoMovingPath = [...movingPath];
                psedoMovingPath.push(userLocation);
                setMovingPath(psedoMovingPath);
                dispatch(uploadPath(movingPath));
            },1000);
    
            if(movingPath.length > 1){
                //이동 거리 구하기
                let debouncedDistance = (calculateDistance(movingPath));
                setDistances(distances + debouncedDistance);
            }
        }
        //interval clear -> clear안하면 계속 반복해서 이동모드 종료 컴포넌트에서 리렌더링 발생
        return () => {clearInterval(interval)}
    },[movingPath]);

    if (count === 0){
        //이동모드
        return(
            <StartMoveMode distances={distances} userLocation={userLocation} movingPath={movingPath} />
        )
    }else{
        //이동모드 종료
        return(
            <EndMoveMode distances={distances} />
        )
    }
}


