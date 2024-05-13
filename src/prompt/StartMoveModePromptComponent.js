import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';

export function StartMoveMode({userLocation, distances, movingPath}){
    return (
        <>
            <Map // 지도를 표시할 Container
                id={`map`}
                center={userLocation}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "450px",
                }}
                level={3} // 지도의 확대 레벨
                >
                <MapMarker
                    position={userLocation}
                >
                    {/* 현재 좌표 */}
                    <div  style={{ padding: "5px", color: "#000" }}>
                        <span>이동거리 : </span>
                        <span className="number">{distances}</span>m
                    </div>
                </MapMarker>
                {
                    movingPath.length >0 ?
                    (<Polyline
                        path={movingPath}
                        strokeWeight={5} 
                        strokeColor={"#FFAE00"}
                        strokeOpacity={0.7} 
                        strokeStyle={"solid"} 
                    />): null
                }
            </Map>  
        </>
    )
}