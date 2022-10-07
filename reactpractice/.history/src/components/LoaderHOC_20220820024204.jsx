import React from 'react';

const LoaderHOC = (wrappedcomponent)=>{
    function secondButton(){
        return(
            <wrappedcomponent></wrappedcomponent>
        )
    }
}
