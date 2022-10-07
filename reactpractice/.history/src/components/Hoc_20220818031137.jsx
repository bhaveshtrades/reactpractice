import React from 'react';

const hocButton = (Hoccomp)=>{
    const redButton = ()=>{
        return(
            <>
            <Hoccomp style={{backgroundColor: "Red"}}></Hoccomp>
            </>
        )
    }
    return redButton;
}

export default hocButton;