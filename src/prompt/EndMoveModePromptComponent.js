import React, { useEffect, useState } from 'react';
import '../css/App.css';
import { Map, MapMarker, Polyline, } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAppendData, handleSetLocalStorage } from '../functions/setAndAppendLocalStorage';

export function EndMoveMode ({distances}){

    let navigate = useNavigate();

    // 다크모드 설정
    let nowMode = useSelector(state => state.nowMode);
    let [formCardStatus, setFormCardStatus] =  useState('');
    let [backgroundColor, setBackgroundColor] = useState('');

    useEffect(()=>{
        if(nowMode % 2 === 0){
            setFormCardStatus('');
            setBackgroundColor('');
        }else{
            setFormCardStatus('text-bg-dark');
            setBackgroundColor('bg-color');
        }
    },[nowMode])

    // moving path
    let storedMovingPath = useSelector(state => state.movingPath);
    let [hiddenInput, setHiddenInput] = useState('hide');
    let [hiddenInputCount, setHiddenInputCount] = useState(0);

    // localstorage
    let [toArrLocalStorage, setToArrLocalStorage] = useState([]);
    let [settingLocalStorage, setSettingLocalStorage] = useState({});

    useEffect(()=>{
        if(storedMovingPath.length > 1){
            let copy = {...settingLocalStorage};
            copy.path = storedMovingPath;
            copy.distances = distances
            setSettingLocalStorage(copy);
        }
    },[storedMovingPath])
    

    useEffect(()=>{
        let to = setTimeout(() => {
            if(hiddenInputCount % 2 === 1){
                setHiddenInput('');
            }else{
                setHiddenInput('hide');
            }
        }, 10);
        return ()=>{clearTimeout(to)}
    },[hiddenInputCount])

    if(storedMovingPath.length > 1){
        return(
            <div className={backgroundColor}>
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
                            <span style={{color:'red'}}>{distances}</span>
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
                <button className='m-3 btn btn-secondary' onClick={()=>{
                    setHiddenInputCount(hiddenInputCount+1);
                }}>현재 이동 경로 저장</button>


                {/* hidden input box TO localstorage */}
                <div className={`card p-2 mb-3 ${formCardStatus} ${hiddenInput}`} style={{transition:'all 1s'}}>
                    <div className='mb-2' style={{textAlign:'left'}}>
                        <label htmlFor='date'>날짜</label>
                        <input id='date' type='date' style={{width:'100%'}} onChange={(e)=>{
                            let value = e.target.value;
                            let type = 'date'
                            handleAppendData(settingLocalStorage, setSettingLocalStorage, value, type);
                        }}/>
                    </div>
                    <div className='mb-2' style={{textAlign:'left'}}>
                        <label htmlFor='path-name'>경로 이름</label>
                        <input id='path-name' style={{width:'100%'}} onChange={(e)=>{
                            let value = e.target.value;
                            let type = 'name'
                            handleAppendData(settingLocalStorage, setSettingLocalStorage, value, type);
                        }}/>
                    </div>
                    <div className='mb-2' style={{textAlign:'left'}}>
                        <label htmlFor='description'>상세 설명</label>
                        <textarea id='description' style={{width:'100%'}} onChange={(e)=>{
                            let value = e.target.value;
                            let type = 'description'
                            handleAppendData(settingLocalStorage, setSettingLocalStorage, value, type);
                        }}/>
                    </div>
                    <button className='btn btn-primary' onClick={()=>{
                        handleSetLocalStorage(toArrLocalStorage, settingLocalStorage, setToArrLocalStorage)

                        navigate('/')
                        
                    }}>저장하기</button>
                </div>
            </div> 
        )
    }else{
        return(
            <>
                <div className='waiting-box'>
                    <h3 style={{marginTop:'200px'}}>이동 거리가 없습니다</h3>
                </div>  
                <div className='under-box'></div>
            </>
        )
    }

}



