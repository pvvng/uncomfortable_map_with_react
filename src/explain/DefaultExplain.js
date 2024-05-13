import { contents } from "../contents";
import Accordion from 'react-bootstrap/Accordion';
import '../css/App.css';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export function DefaultSlideExplain (){

    let nowMode = useSelector(state => state.nowMode);

    
    let [accordionMode, setAccordionMode] = useState('');
    
    useEffect(()=>{
        if(nowMode % 2 == 0){
            setAccordionMode('');
        }else{
            setAccordionMode('dark');
        }
    })

    return(
        <Accordion data-bs-theme={accordionMode}>
            {
                contents.map((a,i) => {
                    return(
                        <Accordion.Item eventKey={i} key={a.id}>
                            <Accordion.Header><strong>{a.title}</strong></Accordion.Header>
                            <Accordion.Body>
                                {a.content}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
}



