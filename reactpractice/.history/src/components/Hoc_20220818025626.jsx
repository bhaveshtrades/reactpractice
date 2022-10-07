import React from 'react';

const hocButton = (Hoccomp)=>{
    const redButton = ()=>{
        return(
            <>
            <Hoccomp style={{backgroundColor: "red"}} name= "Bhavesh"></Hoccomp>
            </>
        )
    }
    return redButton;
}

export default hocButton;