// 날씨 데이터 APi로 받아오는 function

import { dfs_xy_conv } from "./translateToXY";

const fetchWeatherData = async (nd,userLocation,setWhether) => {

    //lat lng 값을 X, Y로 변경
    let rs = dfs_xy_conv('toXY',userLocation.lat,userLocation.lng)
    let x = rs.x;
    let y = rs.y;

    //현재 날짜 데이터 원하는 형태 (20240513)로 포맷
    let nowDate = nd.getFullYear().toString() + (nd.getMonth()+1).toString().padStart(2,'0') + nd.getDate().toString().padStart(2,'0');
    //현재 시간 데이터 원하는 형태 (1400, 정각만 가능) 로 포맷
    let nowTime;
    if(nd.getHours()-1 < 10){
        // 10시 (두자릿수) 미만이면 0800 처럼 데이터 처리
        nowTime = (nd.getHours()-1).toString().padStart(2,'0').padEnd(4,'0');
    }else{
        // 10시 (두자릿수) 이상이면 0800 처럼 데이터 처리
        nowTime = (nd.getHours()-1).toString().padEnd(4,'0');
    }
    
    await fetch(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${process.env.REACT_APP_TEMP_API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${nowDate}&base_time=${nowTime}&nx=${x}&ny=${y}`)
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
}

export default fetchWeatherData;
