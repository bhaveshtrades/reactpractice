import React from 'react';

const hocButton = (hoccomp)=>{
    const redButton = ()=>{
        return(
            <>
            <hoccomp style={{backgroundColor: "red"}}></hoccomp>
            </>
        )
    }
    return redButton;
}

export default hocButton;