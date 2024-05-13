import React, { useEffect, useMemo, useState } from 'react';
import '../css/App.css';
import { Map, MapMarker, Polyline, } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';

export function EndMoveMode ({distances}){

    let storedMovingPath = useSelector(state => state.movingPath);

    if(storedMovingPath.length > 1){
        return(
            <>
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
            </> 
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

