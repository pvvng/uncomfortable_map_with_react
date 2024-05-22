import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HidePromt from '../prompt/HidePromtComponet'; 
import ExistPromt from "../prompt/ExistPromptComponent";
import { DefaultSlideExplain } from "../prompt/DefaultSlideExplain";
import { WheatherCardComponent } from "../prompt/WheatherCardComponent";
import GetLocalStoragePath from "../prompt/GetLocalStoragePath";

export function DefaultLocation(){

    // localstorage에서 저장된 path 불러오기
    let 불러오기 = localStorage.getItem('저장된값');

    // localstoragePath에서 불러온 값 state 형태로 저장 (변화시 유동적인 렌더링을 위해)
    let [localStoragePath, setLocalStoragePath] = useState(null);

    //waiting box => 로딩 기다리는 동안 나올 박스
    let [waiting, setWaiting] = useState('waiting-box');

    // 현재 위치 불러오기 버튼
    let [nowLocation, setNowLocation] = useState(0);
    let btnContent = ['현재 위치 불러오기', '저장된 지도 확인하기'];
    let [btnStatus, setBtnStatus] = useState('d-none');

    //user의 현재 Location
    let userLocation = useSelector(state => state.userLocation);

    useEffect(()=>{
        if (Object.keys(userLocation).length !== 0){
            setWaiting('hide');
        }
    })

    useEffect(()=>{
        let path = JSON.parse(불러오기);
        setLocalStoragePath(path);

        // 지속적으로 localstorage에서 데이터 받아오기
        let a;

        if(setLocalStoragePath !== null){
            a = setInterval(()=>{
                setLocalStoragePath(JSON.parse(localStorage.getItem('저장된값')));
            },30);
        }

        return () => {clearInterval(a);}
    },[])

    
    // localstoragepath === null 이면 버튼 안보이게 만들기
    useEffect(()=>{
        if(localStoragePath === null){
            setBtnStatus('d-none');
        }else{
            setBtnStatus('');
        }
    },[localStoragePath])


    return(
        // localstorage에서 마지막 값을 삭제할때 잠깐 발생하는 오류를 막기 위해 조건식 하나 더 추가
        <div>
            <button className={`btn btn-secondary mt-4 mb-4 ${btnStatus}`} onClick={()=>{
                if(불러오기 !== null){
                    setNowLocation(nowLocation + 1);
                }
            }}>{btnContent[nowLocation % 2]}</button>
            {
                Object.keys(userLocation).length === 0 || localStoragePath === '[]'?
                <HidePromt waiting={waiting} />:
                localStoragePath === null || nowLocation % 2 === 1 || localStoragePath === null ?
                <ExistPromt userLocation={userLocation} />:
                <GetLocalStoragePath localStoragePath={localStoragePath}/>
            }

            <WheatherCardComponent userLocation={userLocation} />

            {/* localstorage에 뭔가 있다면 map 하기 */}

            <DefaultSlideExplain />

        </div>
    )

    
}








