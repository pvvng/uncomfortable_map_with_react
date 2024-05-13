import { useSelector } from "react-redux";
import React,{ useEffect, useState } from "react";
import HidePromt from "../prompt/HidePromtComponet";
import CalPromt from "../prompt/CalPromptComponent";

export function MovingLocation({count}){

    let nowMode = useSelector(state => state.nowMode);
    let [fontColor, setFontColor] = useState('');

    //waiting box => 로딩 기다리는 동안 나올 박스
    let [waiting, setWaiting] = useState('waiting-box');

    //user의 현재 Location
    let userLocation = useSelector(state => state.userLocation);

    useEffect(()=>{
        if (Object.keys(userLocation).length !== 0){
            setWaiting('hide');
        }
        if(nowMode == 1){
            setFontColor('white');
        }else{
            setFontColor('');
        }
    })

    if(Object.keys(userLocation).length !== 0){
        //userLocation(redux store에서 받아오는 현재 위치가 비어있으면)
        return(<CalPromt userLocation={userLocation} count={count} />);
    }else{
        //redux store로 부터 현재 위치가 도착하면
        return(<HidePromt userLocation={userLocation} waiting={waiting}/>);
    }

    // return(
    //     <>
    //     <div>
    //         {
    //             Object.keys(userLocation).length !== 0?
    //             <CalPromt userLocation={userLocation} count={count} />
    //             :
    //             <HidePromt userLocation={userLocation} waiting={waiting}/>
    //         }
    //     </div>
    //     <div style={{fontC}}>
    //         <h4 className='bold mt-4'>측정중이에요</h4>
    //         <p>다른 버튼을 클릭하면 이동 모드가 종료됩니다.</p>
    //         <p>이동 경로를 확인하고 싶으면 이동모드 종료 버튼을 클릭하세요.</p>
    //         <img className={`animate__animated animate__bounce`} style={{animationIterationCount:'infinite'}} 
    //         src={process.env.PUBLIC_URL + '/test_map/Lite3Run.png'} width={'50%'} alt= '측정중'/>
    //     </div>
    // </>
    // )

}


      {/* content */}
      {
        // count === 0 ?
        // <div style={{color:mode[2]}}>
        //   <h4 className='bold mt-4'>측정중이에요</h4>
        //   <p>다른 버튼을 클릭하면 이동 모드가 종료됩니다.</p>
        //   <p>이동 경로를 확인하고 싶으면 이동모드 종료 버튼을 클릭하세요.</p>
        //   <img className={`animate__animated animate__bounce`} style={{animationIterationCount:'infinite'}} 
        //   src={process.env.PUBLIC_URL + '/test_map/Lite3Run.png'} width={'50%'} alt= '측정중'/>
        //   {/* animate__slideOutLeft */}
        // </div>:
        // <img src={process.env.PUBLIC_URL + '/test_map/Lite3.png'} width={'70%'} alt='측정완료'/>
      }

