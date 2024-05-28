// 데이터 가공하는 함수 
import { faCloudRain, faSnowflake, faSun, faTemperatureQuarter, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';

export default function setWheatherData(temp, realWhetherData, setWhetherInfo){
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
}