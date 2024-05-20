import 'bootstrap/dist/css/bootstrap.min.css';
import { dfs_xy_conv } from "../functions/translateToXY";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faSnowflake, faSun, faTemperatureQuarter, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export function AjaxToAPI({userLocation}){

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

    //lat lng 값을 X, Y로 변경
    let rs = dfs_xy_conv('toXY',userLocation.lat,userLocation.lng)
    let x = rs.x;
    let y = rs.y;

    let nd = (new Date());
    //현재 날짜 데이터 원하는 형태 (20240513)로 포맷
    let nowDate = nd.getFullYear().toString() + (nd.getMonth()+1).toString().padStart(2,'0') + nd.getDate().toString().padStart(2,'0');
    //현재 시간 데이터 원하는 형태 (1400, 정각만 가능) 로 포맷
    let nowTime = (nd.getHours()-1).toString().padEnd(4,'0')

    //변경된 좌표를 기준으로 날씨 데이터 ajax
    useEffect(()=>{
        fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${process.env.REACT_APP_TEMP_API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${nowDate}&base_time=${nowTime}&nx=${x}&ny=${y}`)
        //fetch를 통해 반환된 promise (응답객체 response)를 통해 통신이 제대로 이루어졌는지 확인
        .then(response => {
            //status가 200이 아니라면 ok는 false를 가지게 될것임. 이 경우에는 에러 반환
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // 응답 본문을 json형식으로 파싱하여 프로미스를 반환
            return response.json();
        })
        //실제로 받아온 JSON 데이터 처리
        .then(data => {
            // whether state에 data 저장
            setWhether(data)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
    },[])

    useEffect(()=>{
        // wheather에 데이터가 들어왔을때,
        if(wheather !== null){
            // 에러 메시지가 들어오면
            if(wheather.response.body === undefined){
                // 에러처리
                console.log(wheather.response.header.resultMsg)
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
                        a.obsrValue = a.obsrValue + 'mm';
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
                        a.obsrValue = a.obsrValue + '℃'
                        break;
                    case 'WSD':
                        a.category = '풍속';
                        a.iconType = faWind;
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
                    <h6 className="card-subtitle mb-2">{nd.getHours() - 1}시 기준 날씨</h6>
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
                    <h6 className="card-subtitle mb-2">{nd.getHours() - 1}시 기준</h6>
                    <p>데이터를 불러오는데 실패했습니다</p>
                </div>
            </div>
        )
    }
}
