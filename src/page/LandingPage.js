import { useEffect } from 'react';
// import Logo from '../Images/MobilioLogo.png';
// import Lite3 from '../Images/Lite3.png';
// import Lite3Run from '../Images/Lite3Run.png';
import 'animate.css';
import { useNavigate } from 'react-router-dom';

export function LandingPage(){

    let navigate =  useNavigate();

    //3초 후 tutorial page로 이동
    useEffect(()=>{
        let a =setTimeout(() => {
          navigate('/tutorial');
        }, 3000);
        return()=>{clearTimeout(a)}
      },[])
    
    return(
        <>
            <div className="landing">
                <img className='logoMargin animate__animated animate__fadeInDown' src={process.env.PUBLIC_URL + '/MobilioLogo.png'} width={'100%'}/>
            </div>
        </>
    );
}