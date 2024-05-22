import React, { useEffect, useState } from 'react';
import '../css/App.css';
import { Map, MapMarker, Polyline, } from 'react-kakao-maps-sdk';

export default function GetLocalStoragePath ({localStoragePath}){

    let [pathStatus, setPathStatus] = useState(0)
    let [storedMovingPath , setStoredMovingPath] = useState(0);
    let [deleteBtn, setDeleteBtn] = useState(0);
    let [LSP, setLSP] = useState([...localStoragePath]);

    useEffect(()=>{
        setLSP(JSON.parse(localStorage.getItem('저장된값')))
    },[deleteBtn])

    useEffect(()=>{
        if (localStoragePath !== null){
            setPathStatus(0)
        }
    },[])

    useEffect(()=>{
        setStoredMovingPath(localStoragePath[pathStatus].path)
    },[pathStatus])

    // 다크모드 설정
    let [formCardStatus, setFormCardStatus] =  useState('');
    let [titleColor, setTitleColor] = useState('black');

    let nowMode = localStorage.getItem('mode');

    useEffect(()=>{
        if(nowMode !== null){
            if(nowMode === 'light'){
                setFormCardStatus('');
                setTitleColor('black');
            }else{
                setFormCardStatus('text-bg-dark');
                setTitleColor('white');
            }
        }
    },[nowMode])

    const handleDelete = (index) => {
        setDeleteBtn(deleteBtn+1);
        setPathStatus(0);
        if (localStoragePath.length === 1) {
            localStorage.removeItem('저장된값');
            alert('삭제되었습니다');
        } else {
            localStoragePath.splice(index, 1);
            localStorage.setItem('저장된값', JSON.stringify(localStoragePath));
            alert('삭제되었습니다');
        }
    };
    
    if(storedMovingPath !== 0){
        return(
            <div>
                <div>
                    <h2 className='card-title m-2' style={{color:titleColor}}>{localStoragePath[pathStatus].name}</h2>
                    
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

                {
                    LSP !== null?
                    <div className={`card mt-5 p-3 ${formCardStatus}`}>
                    <h3>저장된 지도</h3>
                    <div className='row'>
                        {   
                            LSP.map((lp,i)=>{
                                return(
                                    <div className='col-6 mb-3' key={i}>
                                        <h5 style={{margin:'0px'}}>{lp.name}</h5>
                                        <p style={{margin:'0px'}}>{lp.date}</p>
                                        <p className='mt-2' style={{margin:'0px', color:'grey'}}>{lp.desciption}</p>
                                        <button className='btn btn-secondary m-1' onClick={()=>{
                                            setPathStatus(i);
                                        }}>지도로 확인하기</button>
                                        <button className='btn btn-danger m-1' onClick={()=>{
                                            handleDelete(i)
                                        }}>삭제하기</button>
                                    </div>
                                )
                              })
                            }
                        </div>
                    </div>: null
                }        
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


