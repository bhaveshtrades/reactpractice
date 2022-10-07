import React from 'react';

const hocButton = (Hoccomp)=>{
    const redButton = ()=>{
        return(
            <>
            <Hoccomp name="Bhavesh" style={{backgroundColor: "Red"}}></Hoccomp>
            </>
        )
    }
    return redButton;
}

export default hocButton;