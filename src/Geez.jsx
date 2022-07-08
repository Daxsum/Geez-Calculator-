import React, { Component ,useEffect,useState} from 'react';
import './index.css'
import {GeezNumber,Calculator,GeezEngine} from './geez-number'

function Geez (){
    const [operand,setOperand]=useState("");
    const [operand2,setOperand2]=useState("");
    const[operand3,setOperand3]=useState("");
    const array=[];
    
    
    
    function screen (value){
        if (operand.length===0){
            setOperand(value);
            
           console.log(operand)  
        }else if (operand2.length===0){
            setOperand2(value);
    
            console.log(operand2)  
        }else if (operand3.length===0){
            setOperand3(value);
        console.log(operand3)  
    }
    else{
        setOperand3(operand3+value);
        
        console.log(operand3)  
    }
}
    




function a (num){
    array.push(num)
    console.log(array)
   
}
function add (num){
    
    if (num===1){
        screen("፩")
        
    }
    else if (num==2){
            
            screen('፪')       
            
        }
        else if (num==3){
            
            
            screen('፫')
        }
        else if (num==4){

            
            
            screen('፬')
        }
        else if (num==5){
            
            screen('፭')
            
            
        }
        else if (num==6){
            screen('፮')
            
            
        }
        else if (num==7){
            screen('፯')
            
            
        }
        else if (num==8){
            screen('፰')
            

        }
        else if (num==9){
            screen('፱')
            


               
        }
        else if (num==10){
            screen('፲')
            
            
            
        }
        else if (num==20){
            screen('፳')
            
            
            
        }
        else if (num==30){
            
            screen('፴')
         
        }
        else if (num==40){
            screen('፵')
            
            
        }
        else if (num==50){
            screen('፶')
           
            
            
        }
        else if (num==60){
            screen('፷')
           
        }
        else if (num==70){
            screen('፸')
           
        }
        else if (num==80){
            screen('፹')
        }
        else if (num==90){
            screen('፺')
           
        }
        else if (num==100){
            screen('፻')
         
        }
        else if (num==1000){

            screen('፲፻')
           
          
        }
        else if (num=="+"){
            screen('+')
           
           
        }
        else if (num=="-"){
            screen('-')
            
        
        }
        else if (num=="x"){
            screen('x')
            
        }
        else if (num=="/"){
            screen('/')
           
        }
        
        
    }
    function reset (){
        setOperand('')
        setOperand2('')
        setOperand3('')
    }
    let prev=0
    let next=0
    const arrayGEEZ=['፩','፪','፫','፬','፭','፮','፯','፰','፱','፲','፲፩','፲፪','፲፫','፲፬','፲፭','፲፮','፲፯','፲፰','፲፱','፳','፳፩','፳፪','፳፫','፳፬','፳፭','፳፮','፳፯','፳፰','፳፱','፴','፴፩','፴፪','፴፫','፴፬','፴፭','፴፮','፴፯','፴፰','፴፱','፵','፵፩','፵፪','፵፫','፵፬','፵፭','፵፮','፵፯','፵፰','፵፱','፶','፶፩','፶፪','፶፫','፶፬','፶፭','፶፮','፶፯','፶፰','፶፱'
    ,'፷','፷፩','፷፪','፷፫','፷፬',]
    
    const arrayAREBIC=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100];     
    function evaluate (){
        let index=arrayGEEZ.indexOf(operand);
        let index2=arrayGEEZ.indexOf(operand3);
      
        // let prev=arrayAREBIC[index]
        // let next=arrayAREBIC[index2]
        // console.log(prev)
        // console.log(next)
        
        var prev = new GeezNumber(arrayAREBIC[index]);
        var next = new GeezNumber(arrayAREBIC[index2]);
            // console.log(Calculator.add(hundred, thousand).toArabic());
            // console.log(Calculator.add(hundred, thousand).toGeez());
           
        let computation="";
        switch (operand2){
            case '+':

            computation=Calculator.add(prev, next).toGeez();
            console.log(computation)
            break;
        case '-':

           
            computation=Calculator.subtract(prev, next).toGeez();
            break;
        case 'x':

            
            computation=Calculator.multiply(prev, next).toGeez();
            break;
        case '/':

            
            computation=Calculator.divide(prev, next).toGeez();
            break;

    }
    console.log(computation)
    reset()
    setOperand(computation)
}





    return (


<div className='bg'>
<nav className="navbar_navbar-light_bg-light" >
  <div className="container-fluid">
    <span className="navbar-text">
      GEEZ Calculator
    </span>
  </div>
</nav>

    <div id='GeezCalculator' className='badge rectangle-pill bg-Secondary'>
    
        <div className='navBar'>
            
            <button onClick={reset} id="AC" className='Abadge rounded-pill bg-danger'>AC</button>
            <div className='outPut'>
                <div className='priviousOperand'>{operand}</div>
                <div className='cerrentOperand'>{operand2}</div>
                <div className='cerrentOperand'>{operand3}</div>
            </div>
            
        </div>
        <div className='body'>

        <div className='numPad'>

            <button onClick={()=>{add(1)}} id='button' className='badge rounded-pill bg-primary'>፩</button>
            <button onClick={()=>{add(2)}} id='button' className='badge rounded-pill bg-primary'>፪</button>
            <button onClick={()=>{add(3)}} id='button' className='badge rounded-pill bg-primary'>፫</button>
            <button onClick={()=>{add(4)}} id='button' className='badge rounded-pill bg-primary'>፬</button>
            <button onClick={()=>{add(5)}} id='button' className='badge rounded-pill bg-primary'>፭</button>
            <button onClick={()=>{add(6)}} id='button' className='badge rounded-pill bg-primary'>፮</button>
            <button onClick={()=>{add(7)}} id='button' className='badge rounded-pill bg-primary'>፯</button>
            <button onClick={()=>{add(8)}} id='button' className='badge rounded-pill bg-primary'>፰</button>
            <button onClick={()=>{add(9)}} id='button' className='badge rounded-pill bg-primary'>፱</button>
        </div>
        <div className='oprators'>
            <button onClick={()=>{add(10)}} id='button' className='badge rounded-pill bg-warning'>፲</button>
            <button onClick={()=>{add(20)}} id='button' className='badge rounded-pill bg-warning'>፳</button>
            <button onClick={()=>{add(30)}} id='button' className='badge rounded-pill bg-warning'>፴</button>
            <button onClick={()=>{add(40)}} id='button' className='badge rounded-pill bg-warning'>፵</button>
            <button onClick={()=>{add(50)}} id='button' className='badge rounded-pill bg-warning'>፶</button>
            <button onClick={()=>{add(60)}} id='button' className='badge rounded-pill bg-warning'>፷</button>
            <button onClick={()=>{add(70)}} id='button' className='badge rounded-pill bg-warning'>፸</button>
            <button onClick={()=>{add(80)}} id='button' className='badge rounded-pill bg-warning'>፹</button>
            <button onClick={()=>{add(90)}} id='button' className='badge rounded-pill bg-warning'>፺</button>
            <button onClick={()=>{add(100)}} id='button' className='badge rounded-pill bg-warning'>፻</button>
            <button onClick={()=>{add(1000)}} id='button' className='badge rounded-pill bg-warning'>፲፻</button>
            <button onClick={()=>{add("+")}} id='button' className='badge rounded-pill bg-danger'>+</button>
            <button onClick={()=>{add("-")}} id='button' className='badge rounded-pill bg-danger'>-</button>
            <button onClick={()=>{add("x")}} id='button' className='badge rounded-pill bg-danger'>x</button>
            <button onClick={()=>{add("/")}} id='button' className='badge rounded-pill bg-danger'>/</button>
        </div>
            <button onClick={evaluate} id='sum' className='badge rounded-pill bg-success'>=</button>
        </div>

     </div>
     <nav className="navbar_navbar-light_bg-light" >
  <div className="container-fluid">
    <span className="navbar-text">
      All write reserved | created by kal dax
    </span>
  </div>
</nav>
</div>

     
    );
}
 
export default Geez;