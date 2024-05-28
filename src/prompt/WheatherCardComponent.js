import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import fetchWeatherData from '../functions/fetchWheatherData';
import setWheatherData from '../functions/setWheatherData';

export function WheatherCardComponent({userLocation}){

    // 다크모드 설정
    let nowMode = useSelector(state => state.nowMode);
    let [cardMode, setCardMode] = useState('');

    // 날씨데이터 저장
    let [wheather, setWhether] = useState(null);
    let [realWhetherData, setRealWhetherData] = useState([]);

    // 현재 날짜
    let nd = (new Date());

    // 가공한 데이터 처리 및 저장하는 변수 / 상태
    let temp = []
    let [wheatherInfo, setWhetherInfo] = useState([]);
    
    useEffect(()=>{
        if(nowMode % 2 === 0){
            setCardMode('');
        }else{
            setCardMode('text-bg-dark');
        }
    })

    //변경된 좌표를 기준으로 날씨 데이터 ajax
    useEffect(()=>{

        fetchWeatherData(nd, userLocation, setWhether);

    },[])

    useEffect(()=>{
        // wheather에 데이터가 들어왔을때,
        if(wheather !== null){
            // 에러 메시지가 들어오면
            if(wheather.response.body === undefined){
                // 에러처리
                console.log(wheather.response.header.resultMsg)
                // 에러 메시지 출력되면 다시 날씨 데이터 받아오기
                fetchWeatherData(nd, userLocation, setWhether);
            }else{
                // 실제 메시지가 들어온 경우엔 realwheather state에 데이터 저장하기
                setRealWhetherData(wheather.response.body.items.item)
            }
        }
    },[wheather])

    useEffect(() => {
        // 데이터 가공
        setWheatherData(temp, realWhetherData, setWhetherInfo);

    },[realWhetherData])

    if(wheatherInfo.length !== 0){
        return(
            <div className={`card mt-5 mb-5 ${cardMode}`}>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:'1.3rem', fontWeight:'bold'}}>{nd.toLocaleDateString().slice(0,-1)}</h5>
                    <h6 className="card-subtitle mb-4">{nd.getHours() - 1}시 기준 현재 위치 날씨</h6>
                    <div className='row'>
                    {
                        wheatherInfo.map(a => {
                            return(
                                <div className='col-6' key={a.category}>
                                    <span className="card-text bold">{a.category} : </span>
                                    <span className="card-text bold">{a.obsrValue}</span>
                                    <div style={{fontSize:'2rem'}}>
                                        <FontAwesomeIcon icon={a.iconType}/>
                                    </div>
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
            <div className={`card mt-5 mb-5 ${cardMode}`}>
                <div className="card-body">
                    <h5 className="card-title">{nd.toLocaleDateString().slice(0,-1)}</h5>
                    <h6 className="card-subtitle mb-2">{nd.getHours() - 1}시 기준 현재 위치 날씨</h6>
                    <p>데이터를 불러오는데 실패했습니다</p>
                </div>
            </div>
        )
    }
}
