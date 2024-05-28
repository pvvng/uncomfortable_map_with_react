import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import React, { useEffect, useState } from 'react';
import useWatchLocation from './functions/useWatchLocation.js';
import { DefaultLocation } from './page/DefaultLocation.js';
import { MovingLocation } from './page/MovingLocation.js';
import { useDispatch } from 'react-redux';
import { updateMode, uploadLocation } from './store.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { loadData } from './test.js';

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
  let [spinnerMode, setSpinnerMode] = useState('text-dark');

  useEffect(()=>{

    if(stateNM % 2 === 0 && stateNM !== 0){
      setMode(['','','']);
      localStorage.setItem('mode','light');
    }
    else if(stateNM % 2 === 1 && stateNM !== 0){
      setMode(['bg-dark','bg-color','white']);
      localStorage.setItem('mode','night');
    }
    dispatch(updateMode(stateNM));
    
  },[stateNM])


  useEffect(()=>{

    if(localStorage.getItem('mode') === null){
      localStorage.setItem('mode', 'light');
    }

    if(localStorage.getItem('mode') === 'light'){
      setMode(['','','']);
      setSpinnerMode('text-dark');
      setStateNM(0);
    }else{
      setMode(['bg-dark','bg-color','white']);
      setSpinnerMode('');
      setStateNM(1);
    }

  },[])

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
      <nav className={`navbar ${mode[0]}`} style={{transition:'all 1s', background:'#CCCCCC',  borderBottomLeftRadius:'20px', borderBottomRightRadius:'20px'}}>
        <div className="container-fluid">
          <div className="navbar-brand" onClick={()=>{
            setCount(-1);
            navigate('/');
          }}>
            <img src={process.env.PUBLIC_URL +'/192.png'} alt="Logo" width="auto" height='60px'  className="d-inline-block align-text-top"/>
            {/* Mobilio Map */}
          </div>
          <span style={{cursor : 'pointer', color : mode[2] }} onClick={()=>{
            setStateNM(stateNM+1);
          }}>{nightmode[stateNM % 2]}{kNightmode[stateNM % 2]}</span>
        </div>
      </nav>

      {/* buttons */}
      <div className='p-2 m-4'>
        <button className='btn btn-secondary mx-1'
          onClick={()=>{
            navigate('/');
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
        <Route path='/' element = {<DefaultLocation mode={mode[1]} />}/>
        <Route path='/moving' element = {<MovingLocation count={count} />} />
      </Routes>

      {
        count === 0 ?
        <div style={{color:mode[2]}}>
          <div className={`m-4 spinner-border ${spinnerMode}`} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className='bold'>측정중이에요</h4>
          <p style={{margin:0}}>다른 버튼을 클릭하면 이동 모드가 종료됩니다.</p>
          <p>이동 경로를 확인하고 싶으면 이동모드 종료 버튼을 클릭하세요.</p>
          {/* <img className={`animate__animated animate__bounce`} style={{animationIterationCount:'infinite'}} 
          src={process.env.PUBLIC_URL + '/running.png'} width={'50%'} alt= '측정중'/> */}

        </div>:
        null
      }
    </div>
  );
}

export default App;