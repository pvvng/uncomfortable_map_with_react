import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HidePromt from '../prompt/HidePromtComponet'; 
import ExistPromt from "../prompt/ExistPromptComponent";
import { DefaultSlideExplain } from "../prompt/DefaultSlideExplain";
import { WheatherCardComponent } from "../prompt/WheatherCardComponent";
import GetLocalStoragePath from "../prompt/GetLocalStoragePath";

export function DefaultLocation(){

    //waiting box => 로딩 기다리는 동안 나올 박스
    let [waiting, setWaiting] = useState('waiting-box');

    //user의 현재 Location
    let userLocation = useSelector(state => state.userLocation);

    useEffect(()=>{
        if (Object.keys(userLocation).length !== 0){
            setWaiting('hide');
        }
    })

    let [localStoragePath, setLocalStoragePath] = useState(null)

    useEffect(()=>{
        let a = localStorage.getItem('저장된값')
        let path = JSON.parse(a);
        setLocalStoragePath(path);
    },[])

    return(
        // localstorage에서 마지막 값을 삭제할때 잠깐 발생하는 오류를 막기 위해 조건식 하나 더 추가
        <div>
            {
                Object.keys(userLocation).length === 0 || localStorage.getItem('저장된값') === '[]'?
                <div>
                    <HidePromt waiting={waiting} />
                </div>:
                <div>
                    {
                        localStoragePath === null ?
                        <ExistPromt userLocation={userLocation} />:
                        <GetLocalStoragePath localStoragePath={localStoragePath}/>
                    }
                </div>
            }
            <WheatherCardComponent userLocation={userLocation} />

            {/* localstorage에 뭔가 있다면 map 하기 */}

            <DefaultSlideExplain />

        </div>
    )

    
}








