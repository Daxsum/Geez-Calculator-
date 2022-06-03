import React, { Component ,useState} from 'react';
import './index.css'

function Geez (){
    let [operand,setOperand]=useState("");
    let [operand2,setOperand2]=useState("");




    
    function set (){
    if (operand.length==0){
        setOperand(operand)
    }else if (operand2.length==0){
        setOperand2(operand2)
    }else{
        setOperand2(operand2+"world")
    }
    }
    
    function add (num){
        if (num==1){
            setOperand("፩");
            console.log(operand)
        }
        else if (num==2){
            setOperand("፪");
            console.log(operand)   
        }
        else if (num==3){
            setOperand("፫");
            console.log(operand)   
        }
    
        
    }
 function reset (){
     setOperand('')
     setOperand2('')
 }
 const One =()=>{add(1)};
 const Two =()=>{add(2)};
 const three =()=>{add(3)};
 const Four =()=>{add(4)};
 const Five =()=>{add(5)};
 const Six =()=>{add(6)};
 const Seven =()=>{add(7)};
 const Eight =()=>{add(8)};
 const Nine =()=>{add(9)};
 const Ten =()=>{add(10)};








    return (
    <div className='GeezCalculator'>
        <div className='navBar'>
            <button onClick={reset} className='AC'>AC</button>
            <div className='outPut'>
                <div className='priviousOperand'>{operand}</div>
                <div className='cerrentOperand'></div>
            </div>
        </div>
        <div className='body'>

        <div className='numPad'>

            <button onClick={One} id='button' className='1'>፩</button>
            <button id='button' className='2'>፪</button>
            <button id='button' className='3'>፫</button>
            <button id='button' className='4'>፬</button>
            <button id='button' className='5'>፭</button>
            <button id='button' className='6'>፮</button>
            <button id='button' className='7'>፯</button>
            <button id='button' className='8'>፰</button>
            <button id='button' className='9'>፱</button>
        </div>
        <div className='oprators'>
            <button id='button' className='10'>፲</button>
            <button id='button' className='20'>፳</button>
            <button id='button' className='30'>፴</button>
            <button id='button' className='40'>፵</button>
            <button id='button' className='50'>፶</button>
            <button id='button' className='60'>፷</button>
            <button id='button' className='70'>፸</button>
            <button id='button' className='80'>፹</button>
            <button id='button' className='90'>፺</button>
            <button id='button' className='100'>፻</button>
            <button id='button' className='1000'>፲፻</button>
            <button id='button' className='+'>+</button>
            <button id='button' className='-'>-</button>
            <button id='button' className='x'>x</button>
            <button id='button' className='/'>/</button>
        </div>
        </div>

            



     </div>
    );
}
 
export default Geez;