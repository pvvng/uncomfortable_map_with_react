import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faSnowflake, faSun, faTemperatureQuarter, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import fetchWeatherData from '../functions/fetchWheatherData';

export function WheatherCardComponent({userLocation}){

    let nowMode = useSelector(state => state.nowMode);
    let [cardMode, setCardMode] = useState('')
    
    useEffect(()=>{
        if(nowMode % 2 == 0){
            setCardMode('');
        }else{
            setCardMode('text-bg-dark');
        }
    })

    let [wheather, setWhether] = useState(null);
    let [realWhetherData, setRealWhetherData] = useState([]);

    let nd = (new Date());


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

    let temp = []
    let [wheatherInfo, setWhetherInfo] = useState([]);

    useEffect(() => {
        // realwheater 스테이트가 바뀔때마다 진행
        realWhetherData.map(a => {
            // 데이터 가공
            if(a.category === 'RN1' || a.category === 'PTY' || a.category === 'T1H' || a.category === 'WSD'){
                switch (a.category){
                    case 'RN1':
                        a.category = '1시간 강수량';
                        a.obsrValue = a.obsrValue + ' mm';
                        a.iconType = faUmbrella;
                        break;
                    case 'PTY':
                        a.category = '강수 형태';
                        if(a.obsrValue === '0'){
                            a.obsrValue = '맑음';
                            a.iconType = faSun;
                        }else if (a.obsrValue === '1'){
                            a.obsrValue = '비';
                            a.iconType = faCloudRain;
                        }else if (a.obsrValue === '2'){
                            a.obsrValue = '비/눈';
                            a.iconType = faCloudRain;
                        }else if (a.obsrValue === '3'){
                            a.obsrValue = '눈';
                            a.iconType = faSnowflake;
                        }
                        break;
                    case 'T1H':
                        a.category = '기온';
                        a.iconType = faTemperatureQuarter;
                        a.obsrValue = a.obsrValue + ' ℃'
                        break;
                    case 'WSD':
                        a.category = '풍속';
                        a.iconType = faWind;
                        a.obsrValue = a.obsrValue + ' m/s'
                        break;
                }
                // 필요한 데이터 조건이 모두 갖춰지면 set whetherinfo state에 가공된 데이터 저장
                temp.push(a)
                if(temp.length === 4){
                    setWhetherInfo([...temp])
                }
            }
        })
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
