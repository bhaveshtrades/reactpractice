import React from 'react';

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