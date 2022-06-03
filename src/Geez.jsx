import React, { Component ,useState} from 'react';
import './index.css'

function Geez (){
    const [operand,setOperand]=useState("");
    const [operand2,setOperand2]=useState("");
    const [array,setArray]=useState([]);


function screen (value){
    if (operand.length===0){
        setOperand(value);
     
        console.log(operand)  
    }else if (operand2.length===0){
        setOperand2(value);
    
        console.log(operand2)  
    }else{
        setOperand2(operand2+value);

        console.log(operand2)  
    }
}
    
    function add (num){

        // push(num)
        setArray((state)=>{
            state.push(num)
              return state
          })
          console.log(array)
        if (num===1){
            screen("፩")
            
            
        }
        else if (num==2){
            
            if (operand.length==0){
                setOperand("፪");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፪");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፪");
                console.log(operand2)  
            }
         
           
            
         
        }
        else if (num==3){

           
            if (operand.length==0){
                setOperand("፫");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፫");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፫");
                console.log(operand2)  
            }  
        }
        else if (num==4){

            if (operand.length==0){
                setOperand("፬");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፬");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፬");
                console.log(operand2)  
            }  
         
        }
        else if (num==5){


            if (operand.length==0){
                setOperand("፭");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፭");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፭");
                console.log(operand2)  
            }  
            
        }
        else if (num==6){

            if (operand.length==0){
                setOperand("፮");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፮");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፮");
                console.log(operand2)  
            }  
  
        }
        else if (num==7){

            if (operand.length==0){
                setOperand("፯");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፯");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፯");
                console.log(operand2)  
            }  

            
        }
        else if (num==8){

            if (operand.length==0){
                setOperand("፰");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፰");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፰");
                console.log(operand2)  
            }  

        }
        else if (num==9){

            if (operand.length==0){
                setOperand("፱");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፱");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፱");
                console.log(operand2)  
            }  


               
        }
        else if (num==10){
            if (operand.length==0){
                setOperand("፲");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፲");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፲");
                console.log(operand2)  
            }  


               
        }
        else if (num==20){
            if (operand.length==0){
                setOperand("፳");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፳");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፳");
                console.log(operand2)  
            } 

           
        }
        else if (num==30){

            if (operand.length==0){
                setOperand("፴");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፴");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፴");
                console.log(operand2)  
            } 

             
        }
        else if (num==40){

            if (operand.length==0){
                setOperand("፵");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፵");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፵");
                console.log(operand2)  
            } 

        }
        else if (num==50){

            if (operand.length==0){
                setOperand("፶");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፶");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፶");
                console.log(operand2)  
            } 


              
        }
        else if (num==60){

            if (operand.length==0){
                setOperand("፷");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፷");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፷");
                console.log(operand2)  
            } 


              
        }
        else if (num==70){
            if (operand.length==0){
                setOperand("፸");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፸");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፸");
                console.log(operand2)  
            } 
            
        }
        else if (num==80){
            if (operand.length==0){
                setOperand("፹");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፹");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፹");
                console.log(operand2)  
            } 

            
        }
        else if (num==90){

            if (operand.length==0){
                setOperand("፺");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፺");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፺");
                console.log(operand2)  
            } 

            
        }
        else if (num==100){

            if (operand.length==0){
                setOperand("፻");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፻");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፻");
                console.log(operand2)  
            } 


        }
        else if (num==1000){


            if (operand.length==0){
                setOperand("፲፻");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("፲፻");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"፲፻");
                console.log(operand2)  
            } 
          
        }
        else if (num=="+"){
            if (operand.length==0){
                setOperand("+");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("+");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"+");
                console.log(operand2)  
            } 
           
        }
        else if (num=="-"){

            if (operand.length==0){
                setOperand("-");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("-");
                console.log(operand2)  
            }else{
                setOperand2(operand2+"-");
                console.log(operand2)  
            } 
        
        }
        else if (num=="x"){
            
            if (operand.length==0){
                setOperand("x");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("x");
                console.log(operand2)  
            }else{
            
                setOperand2(operand2+"x");
                console.log(operand2)  
            } 
          
        }
        else if (num=="/"){
            if (operand.length==0){
                setOperand("/");
                console.log(operand)  
            }else if (operand2.length==0){
                setOperand2("/");
                console.log(operand2)  
            }else{
            setOperand("/");
                setOperand2(operand2+"/");
                console.log(operand2)  
            } 
       
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
 const Twenty =()=>{add(20)};
 const Therty =()=>{add(30)};
 const Forty =()=>{add(40)};
 const Fifty =()=>{add(50)};
 const Sixsty =()=>{add(60)};
 const Seventy =()=>{add(70)};
 const Eighty =()=>{add(80)};
 const Ninty =()=>{add(90)};
 const OneHundred =()=>{add(100)};
 const OneTowsend =()=>{add(1000)};
 const Plus =()=>{add("+")};
 const Minus =()=>{add("-")};
 const Multiplication =()=>{add("x")};
 const Deviding =()=>{add("/")};
//  const Sum=()=>{calculation(A)};
 
//  function push(i){
//      setArray((state)=>{
//        state.push(i)
//          return state
//      })
   
 
//     console.log(array);
 
//   }


    return (
        <div className='back'>

<div className='GeezCalculator'>
        <div className='navBar'>
            <button onClick={reset} className='AC'>AC</button>
            <div className='outPut'>
                <div className='priviousOperand'>{operand}</div>
                <div className='cerrentOperand'>{operand2}</div>
            </div>
        </div>
        <div className='body'>

        <div className='numPad'>

            <button onClick={One} id='button' className='1'>፩</button>
            <button onClick={Two} id='button' className='2'>፪</button>
            <button onClick={three} id='button' className='3'>፫</button>
            <button onClick={Four} id='button' className='4'>፬</button>
            <button onClick={Five} id='button' className='5'>፭</button>
            <button onClick={Six} id='button' className='6'>፮</button>
            <button onClick={Seven} id='button' className='7'>፯</button>
            <button onClick={Eight} id='button' className='8'>፰</button>
            <button onClick={Nine} id='button' className='9'>፱</button>
        </div>
        <div className='oprators'>
            <button onClick={Ten} id='button' className='10'>፲</button>
            <button onClick={Twenty} id='button' className='20'>፳</button>
            <button onClick={Therty} id='button' className='30'>፴</button>
            <button onClick={Forty} id='button' className='40'>፵</button>
            <button onClick={Fifty} id='button' className='50'>፶</button>
            <button onClick={Sixsty} id='button' className='60'>፷</button>
            <button onClick={Seventy} id='button' className='70'>፸</button>
            <button onClick={Eighty} id='button' className='80'>፹</button>
            <button onClick={Ninty} id='button' className='90'>፺</button>
            <button onClick={OneHundred} id='button' className='100'>፻</button>
            <button onClick={OneTowsend} id='button' className='1000'>፲፻</button>
            <button onClick={Plus} id='button' className='+'>+</button>
            <button onClick={Minus} id='button' className='-'>-</button>
            <button onClick={Multiplication} id='button' className='x'>x</button>
            <button onClick={Deviding} id='button' className='/'>/</button>
        </div>
            <button onClick={Deviding} id='sum' className='/'>=</button>
        </div>

     </div>
        </div>
    );
}
 
export default Geez;