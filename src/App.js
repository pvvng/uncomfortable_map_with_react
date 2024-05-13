import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import React, { useEffect, useState } from 'react';
import useWatchLocation from './functions/useWatchLocation.js';
import { LandingPage } from './page/LandingPage.js';
import { DefaultLocation } from './page/DefaultLocation.js';
import { MovingLocation } from './page/MovingLocation.js';
import { TutorialPage } from './page/TutorialPage.js';
import { DefaultSlideExplain } from './explain/DefaultExplain.js';
import { useDispatch } from 'react-redux';
import { updateMode, uploadLocation } from './store.js';
import { Route, Routes, useNavigate } from 'react-router-dom';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
}

function App() {
  // darkmode functions
  let nightmode = ['🌙','🌞'];
  let kNightmode = ['야간모드','원래대로'];
  let [stateNM, setStateNM] = useState(0);
  let [mode, setMode] = useState(['','','']);

  useEffect(()=>{
    if(stateNM % 2 === 0){
      setMode(['','','']);
    }
    else{
      setMode(['bg-dark','bg-color','white']);
    }
    dispatch(updateMode(stateNM));
  },[stateNM])

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!
  // 현재 location 받아오기

  let navigate = useNavigate();
  
  let [count, setCount] = useState(-1);

  let dispatch = useDispatch();
  const { location } = useWatchLocation(geolocationOptions);

  useEffect(()=>{
    if (!location) return;
    if(location !== undefined){
      let nowLat = location.latitude;
      let nowLng = location.longitude;
      dispatch(uploadLocation([nowLat, nowLng]))
    }
  },[location]);

  return (
    <div className={`App ${mode[1]}`}>

      {/* navbar */}
      <nav className={`navbar ${mode[0]}`} style={{transition:'all 1s'}}>
        <div className="container-fluid">
          <div className="navbar-brand" onClick={()=>{
            setCount(-1);
            navigate('/home');
          }}>
            <img src={process.env.PUBLIC_URL +'/MobilioLogo.png'} alt="Mobilio" width="auto" height="24" className="d-inline-block align-text-top"/>
            {/* Mobilio Map */}
          </div>
          <span style={{cursor : 'pointer', color : mode[2] }} onClick={()=>{
            setStateNM(stateNM+1);
          }}>{nightmode[stateNM % 2]}{kNightmode[stateNM % 2]}</span>
        </div>
      </nav>

      {/* buttons */}
      <div className='p-2'>
        <button className='btn btn-secondary mx-1'
          onClick={()=>{
            navigate('/home');
            setCount(-1);
            }}>메인메뉴
        </button>
        
        <button className='btn btn-primary mx-1' onClick={()=>{
          navigate('/moving');
          setCount(0);
          }}>이동모드
        </button>

        <button className='btn btn-danger mx-1' onClick={()=>{
          navigate('/moving');
          setCount(1);
          }}>이동모드 종료
        </button>
      </div>

      {/* map */}
      <Routes>
        <Route path='/test_map' element = {<LandingPage/>} />
        <Route path ='tutorial' element = {<TutorialPage/>} />
        <Route path='/home' element = {<DefaultLocation />}/>
        <Route path='/moving' element = {<MovingLocation count={count} />} />
      </Routes>

      {
        count === 0 ?
        <div style={{color:mode[2]}}>
          <h4 className='bold mt-4'>측정중이에요</h4>
          <p>다른 버튼을 클릭하면 이동 모드가 종료됩니다.</p>
          <p>이동 경로를 확인하고 싶으면 이동모드 종료 버튼을 클릭하세요.</p>
          <img className={`animate__animated animate__bounce`} style={{animationIterationCount:'infinite'}} 
          src={process.env.PUBLIC_URL + '/test_map/Lite3Run.png'} width={'50%'} alt= '측정중'/>
          {/* animate__slideOutLeft */}
        </div>:
        count === 1?
        <img src={process.env.PUBLIC_URL + '/test_map/Lite3.png'} width={'70%'} alt='측정완료'/>:
        null
      }
    </div>
  );
}

export default App;