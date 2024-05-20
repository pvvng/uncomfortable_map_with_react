import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HidePromt from '../prompt/HidePromtComponet'; 
import ExistPromt from "../prompt/ExistPromptComponent";
import { DefaultSlideExplain } from "../prompt/DefaultSlideExplain";
import { AjaxToAPI } from "../prompt/AjaxToAPI";

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

    return(
        <div>
            {
                Object.keys(userLocation).length === 0?
                <div>
                    <HidePromt waiting={waiting} />
                </div>:
                <div>
                    <ExistPromt userLocation={userLocation} />
                </div>
            }
            <AjaxToAPI userLocation={userLocation} />
            <DefaultSlideExplain />

        </div>
    )

    
}








