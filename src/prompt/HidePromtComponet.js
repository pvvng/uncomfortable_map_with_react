import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';

//waiting-box
export default function HidePromt({waiting}){

    return(
        <>
            <div className={waiting}>
                <h3 style={{marginTop:'200px'}}>
                    로딩중
                </h3>
                <h4 className='animate__animated animate__rotateIn' style={{animationIterationCount:'infinite'}}>
                    <FontAwesomeIcon icon={faSpinner} />
                </h4>
            </div>  
            <div className='under-box'></div>
        </>
    )
}