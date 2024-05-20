import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HidePromt from '../prompt/HidePromtComponet'; 
import ExistPromt from "../prompt/ExistPromptComponent";
import { DefaultSlideExplain } from "../prompt/DefaultSlideExplain";
import { AjaxToAPI } from "../prompt/AjaxToAPI";
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
        <div>
            {
                Object.keys(userLocation).length === 0?
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
            <AjaxToAPI userLocation={userLocation} />

            {/* localstorage에 뭔가 있다면 map 하기 */}
            

            <DefaultSlideExplain />


        </div>
    )

    
}








