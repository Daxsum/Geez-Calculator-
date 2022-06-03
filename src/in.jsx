import React, { Component } from 'react';
function   screen () {
    const  [screen1 , setScreen1] = useState("")
    const  [screen2 , setScreen2] = useState("")
   { 
        return (
            <>
             <div className='box1'>{screen1}</div>
            <div className='box2'>{screen2}</div>
            <button onClick={()=>{
                if (screen1.length==0){
                    setScreen1("hello")
                }else if (screen2.length==0){
                    setScreen2("hello")
                } else{
                    setScreen2(screen2+" hello")

                }


            }}>add</button>
            </>
           

        );
    }
}
 
export default screen ;