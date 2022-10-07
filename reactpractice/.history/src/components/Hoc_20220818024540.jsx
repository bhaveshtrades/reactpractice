import React from 'react';
import Button from './Button';

const hocButton = (hocComponent)=>{
    const redButton = ()=>{
        return(
            <>
            <hocComponent style={{backgroundColor: "red"}}></hocComponent>
            </>
        )
    }
    return redButton;
}

export default hocButton;