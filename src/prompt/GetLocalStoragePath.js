import React, { useEffect, useMemo, useState } from 'react';
import '../css/App.css';
import { Map, MapMarker, Polyline, } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';

export default function GetLocalStoragePath ({localStoragePath}){

    
    let [pathStatus, setPathStatus] = useState(0)
    // console.log(pathStatus,'재렌더링됨')
    let [storedMovingPath , setStoredMovingPath] = useState(0)


    useEffect(()=>{
        if (localStoragePath !== null){
            setPathStatus(0)
        }
    },[])

    useEffect(()=>{
        setStoredMovingPath(localStoragePath[pathStatus].path)
    },[setPathStatus])

    // 다크모드 설정
    let nowMode = useSelector(state => state.nowMode);
    let [formCardStatus, setFormCardStatus] =  useState('');

    useEffect(()=>{
        if(nowMode % 2 === 0){
            setFormCardStatus('');
        }else{
            setFormCardStatus('text-bg-dark');
        }
    },[nowMode])

    

    if(storedMovingPath !== 0){
        return(
            <div>
                <div>
                    <Map // 지도를 표시할 Container
                        id={`map`}
                        center={storedMovingPath[0]}
                        style={{
                            // 지도의 크기
                            width: "100%",
                            height: "450px",
                        }}
                        level={3} // 지도의 확대 레벨
                        >
                        <MapMarker
                            position={storedMovingPath[0]}
                            title="시작위치"
                        >
                            <div style={{ padding: "5px", color: "#000" }}>
                                시작 위치
                            </div>
                        </MapMarker>
                        <MapMarker
                            position={storedMovingPath[storedMovingPath.length-1]}
                            title="최종위치"
                        >
                            <div style={{ padding: "5px", color: "#000" }}>
                                <span style={{color:'red'}}>{localStoragePath[pathStatus].distances}</span>
                                m 이동했어요
                            </div>
                        </MapMarker>
                        <Polyline
                            path={storedMovingPath}
                            strokeWeight={5} 
                            strokeColor={"#FFAE00"}
                            strokeOpacity={0.7} 
                            strokeStyle={"solid"} 
                        />
                    </Map> 
                </div>

                <div className={`card mt-5 p-3 ${formCardStatus}`}>
                    <h3>저장된 지도</h3>
                    <div className='row'>
                        {
                            localStoragePath.map((lp,i)=>{
                                return(
                                    <div className='col-6 mb-3'>
                                        <h5 style={{margin:'0px'}}>{lp.name}</h5>
                                        <p className='mt-1' style={{margin:'0px', color:'grey'}}>{lp.date}</p>
                                        <button className='btn btn-secondary mt-1' onClick={()=>{
                                            setPathStatus(i);
                                        }}>지도로 확인하기</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div> 
        )
    }else{
        return(
            <>
                <div className='waiting-box'>
                    <h3 style={{marginTop:'200px'}}>저장된 지도가 없습니다</h3>
                </div>  
                <div className='under-box'></div>
            </>
        )
    }

}

