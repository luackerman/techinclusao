import React from 'react';


export default function StartBtn(props){

    const initialAction = () => {
        props.actions.initialAction();
    }


    return (
        <button className='Start-btn' onClick={() => initialAction()}>iniciar</button>
    )
}