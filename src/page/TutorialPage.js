import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { contents } from '../contents';
// import lite3 from '../Images/Lite3.png'
// import lite3run from '../Images/Lite3Run.png'


export function TutorialPage(){

    const navigate = useNavigate();

    let [move, setMove] = useState('');


    return(
        <div style={{ width:'100%'}}>
            <div id='tc1' className={`tutorial-container1 ${move}`}>
                <div className='tutorial-inner'>
                    <div className='row' style={{height:'100%'}}>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10' style={{margin:'auto'}}>
                            <div style={{height :'100%'}}>
                                <h2 className='bold'>{contents[0].title}</h2>
                                <img src={process.env.PUBLIC_URL + '/test_map/Lite3.png'} width={'100%'}/>
                            </div>
                        </div>
                        <div className='col-sm-1' style={{marginTop:'auto', marginBottom:'auto'}} onClick={()=>{
                            setMove('tc1-move');
                        }}>
                            <FontAwesomeIcon className='icon-angle' style={{transform:'rotate(90deg)'}} icon={faAngleUp} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='tutorial-container2'>
                <div className='tutorial-inner'>
                <div className='row' style={{height:'100%'}}>
                        <div className='col-sm-1' style={{marginTop:'auto', marginBottom:'auto'}} onClick={()=>{
                            setMove('');
                        }}>
                            <FontAwesomeIcon className='icon-angle' style={{transform:'rotate(-90deg)'}} icon={faAngleUp} />
                        </div>
                        <div className='col-sm-10' style={{margin:'auto'}}>
                            <h2 className='bold'>{contents[1].title}</h2>
                            <img src={process.env.PUBLIC_URL + '/test_map/Lite3Run.png'} width={'100%'}/>
                        </div>
                        <div className='col-sm-1' style={{marginTop:'auto', marginBottom:'auto'}} onClick={()=>{
                            navigate('/home');
                        }}>
                            <FontAwesomeIcon className='icon-home' icon={faHouse} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}