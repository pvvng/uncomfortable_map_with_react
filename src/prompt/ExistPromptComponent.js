import { Map,Polyline, MapMarker} from 'react-kakao-maps-sdk';

//map
export default function ExistPromt({userLocation}){
    // console.log(userLocation,'exist')
    return(
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
                    <div style={{ padding: "5px", color: "#000" }}>
                        여기에 계신가요?!
                    </div>
                </MapMarker>
            </Map> 
        </> 
    )
}