import React, { useState} from 'react';
import './index.css';
import {GeezNumber,Calculator,GeezEngine} from './geez-number';


function Geez (){
    const [operand,setOperand]=useState("");
    const [operand2,setOperand2]=useState("");
    const[operand3,setOperand3]=useState("");
    const array=[];
    
    
    
    function screen (value){
        if (operand.length===0){
            setOperand(value);
            
           console.log(operand)  
        }else if (operand2.length ===0 && value !== 'x'&& value !== '/' && value !== '+' && value !== '-' ){
            setOperand(operand+value)
        }
        
        else if (operand2.length===0){
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
    




// function a (num){
//     array.push(num)
//     console.log(array)
   
// }
function add (num){
    
    if (num===1){
        screen("፩")
        
    }
    else if (num===2){
            
            screen('፪')       
            
        }
        else if (num===3){
            
            
            screen('፫')
        }
        else if (num===4){

            
            
            screen('፬')
        }
        else if (num===5){
            
            screen('፭')
            
            
        }
        else if (num===6){
            screen('፮')
            
            
        }
        else if (num===7){
            screen('፯')
            
            
        }
        else if (num===8){
            screen('፰')
            

        }
        else if (num===9){
            screen('፱')
            


               
        }
        else if (num===10){
            screen('፲')
            
            
            
        }
        else if (num===20){
            screen('፳')
            
            
            
        }
        else if (num===30){
            
            screen('፴')
         
        }
        else if (num===40){
            screen('፵')
            
            
        }
        else if (num===50){
            screen('፶')
           
            
            
        }
        else if (num===60){
            screen('፷')
           
        }
        else if (num===70){
            screen('፸')
           
        }
        else if (num===80){
            screen('፹')
        }
        else if (num===90){
            screen('፺')
           
        }
        else if (num===100){
            screen('፻')
         
        }
        else if (num===1000){

            screen('፲፻')
           
          
        }
        else if (num==="+"){
            screen('+')
           
           
        }
        else if (num==="-"){
            screen('-')
            
        
        }
        else if (num==="x"){
            screen('x')
            
        }
        else if (num==="/"){
            screen('/')
           
        }
        
        
    }
    function reset (){
        setOperand('')
        setOperand2('')
        setOperand3('')
    }
    // let prev=0
    // let next=0
    const arrayGEEZ=['፩','፪','፫','፬','፭','፮','፯','፰','፱','፲','፲፩','፲፪','፲፫','፲፬','፲፭','፲፮','፲፯','፲፰','፲፱','፳','፳፩','፳፪','፳፫','፳፬','፳፭','፳፮','፳፯','፳፰','፳፱','፴','፴፩','፴፪','፴፫','፴፬','፴፭','፴፮','፴፯','፴፰','፴፱','፵','፵፩','፵፪','፵፫','፵፬','፵፭','፵፮','፵፯','፵፰','፵፱','፶','፶፩','፶፪','፶፫','፶፬','፶፭','፶፮','፶፯','፶፰','፶፱'
    ,'፷','፷፩','፷፪','፷፫','፷፬','፷፭','፷፮','፷፯','፷፰','፷፱','፸','፸፩','፸፪','፸፫','፸፬','፸፭','፸፮','፸፯','፸፰','፸፱','፹','፹፩','፹፪','፹፫','፹፬','፹፭','፹፮','፹፯','፹፰','፹፱','፺','፺፩','፺፪','፺፫','፺፬','፺፭','፺፮','፺፯','፺፰','፺፱','፻']
    // [፻፩,፻፪,፻፫,፻፬,፻፭,፻፮,፻፯,፻፰,፻፱,፻፲,፻፲፩,፻፲፪,፻፲፫,፻፲፬,፻፲፭,፻፲፮,፻፲፯,፻፲፰,፻፲፱,፻፳,፻፳፩,፻፳፪,፻፳፫,፻፳፬,፻፳፭,፻፳፮,፻፳፯,፻፳፰,፻፳፱,፻፴,፻፴፩,፻፴፪,፻፴፫,፻፴፬,፻፴፭,፻፴፮,፻፴፯,፻፴፰,፻፴፱,፻፵,.፻፵፩.፻፵፪.፻፵፫.፻፵፬.፻፵፭.፻፵፮.፻፵፯.፻፵፰.፻፵፱,.፻፶,፻፶፩,፻፶፪,፻፶፫,፻፶፬,፻፶፭,፻፶፮,፻፶፯,፻፶፰,፻፶፱,፻፷,፻፷፩,፻፷፪,፻፷፫,፻፷፬,፻፷፭,፻፷፮,፻፷፯,፻፷፰,፻፷፱,፻፸,፻፸፩,፻፸፪,፻፸፫,፻፸፬,፻፸፭,፻፸፮,፻፸፯,፻፸፰,፻፸፱,፻፹,፻፹፩,፻፹፪,፻፹፫,፻፹፬,፻፹፭,፻፹፮,፻፹፯,፻፹፰,፻፹፱,፻፺,፻፺፩,፻፺፪,፻፺፫,፻፺፬,፻፺፭,፻፺፮,፻፺፯,፻፺፰,፻፺፱,፪፻,፪፻፩,፪፻፪,፪፻፫,፪፻፬,፪፻፭,፪፻፮,፪፻፯,፪፻፰,፪፻፱,፪፻፲,፪፻፲፩,፪፻፲፪,፪፻፲፫,፪፻፲፬,፪፻፲፭,፪፻፲፮,፪፻፲፯,፪፻፲፰,፪፻፲፱,፪፻፳,፪፻፳፩,፪፻፳፪,፪፻፳፫,፪፻፳፬,፪፻፳፭,፪፻፳፮,፪፻፳፯,፪፻፳፰,፪፻፳፱,፪፻፴,፪፻፴፩,፪፻፴፪,፪፻፴፫,፪፻፴፬,፪፻፴፭,፪፻፴፮,፪፻፴፯,፪፻፴፰,፪፻፴፱,፪፻፵,፪፻፵፩,፪፻፵፪,፪፻፵፫,፪፻፵፬,፪፻፵፭,፪፻፵፮,፪፻፵፯,፪፻፵፰,፪፻፵፱,፪፻፶,፪፻፶፩,፪፻፶፪,፪፻፶፫,፪፻፶፬,፪፻፶፭,፪፻፶፮,፪፻፶፯,፪፻፶፰,፪፻፶፱,፪፻፷,፪፻፷፩,፪፻፷፪,፪፻፷፫,፪፻፷፬,፪፻፷፭,፪፻፷፮,፪፻፷፯,፪፻፷፰,፪፻፷፱,፪፻፸,፪፻፸፩,፪፻፸፪,፪፻፸፫,,፪፻፸፭,፪፻፸፮,፪፻፸፯,፪፻፸፰,፪፻፸፱,፪፻፹,፪፻፹፩,፪፻፹፪,፪፻፹፫,፪፻፹፬,፪፻፹፭,፪፻፹፮,፪፻፹፯,፪፻፹፰,፪፻፹፱,፪፻፺,፪፻፺፩,፪፻፺፪,፪፻፺፫,፪፻፺፬,፪፻፺፭,፪፻፺፮,፪፻፺፯,፪፻፺፰,፪፻፺፱,፫፻,፫፻፩,፫፻፪,፫፻፫,፫፻፬,፫፻፭,፫፻፮,፫፻፯,፫፻፰,፫፻፱,፫፻፲,፫፻፲፩,፫፻፲፪,፫፻፲፫,፫፻፲፬,፫፻፲፭,፫፻፲፮,፫፻፲፯,፫፻፲፰,፫፻፲፱,፫፻፳,፫፻፳፩,፫፻፳፪,፫፻፳፫,፫፻፳፬,፫፻፳፭,፫፻፳፮,፫፻፳፯,፫፻፳፰,፫፻፳፱,፫፻፴,፫፻፴፩,፫፻፴፪,፫፻፴፫,፫፻፴፬,፫፻፴፭,፫፻፴፮,፫፻፴፯,፫፻፴፰,፫፻፴፱,፫፻፵,፫፻፵፩,፫፻፵፪,፫፻፵፫,፫፻፵፬,፫፻፵፭,፫፻፵፮,፫፻፵፯,፫፻፵፰,፫፻፵፱,፫፻፶,፫፻፶፩,፫፻፶፪,፫፻፶፫,፫፻፶፬,፫፻፶፭,፫፻፶፮,፫፻፶፯,፫፻፶፰,፫፻፶፱,፫፻፷,፫፻፷፩,፫፻፷፪,፫፻፷፫,፫፻፷፬,፫፻፷፭,፫፻፷፮,፫፻፷፯,፫፻፷፰,፫፻፷፱,፫፻፸,፫፻፸፩,፫፻፸፪,፫፻፸፫,፫፻፸፬,፫፻፸፭,፫፻፸፮,፫፻፸፯,፫፻፸፰,፫፻፸፱,፫፻፹,፫፻፹፩,፫፻፹፪,፫፻፹፫,፫፻፹፬,፫፻፹፭,፫፻፹፮,፫፻፹፯,፫፻፹፰,፫፻፹፱,፫፻፺,፫፻፺፩,፫፻፺፪,፫፻፺፫,፫፻፺፬,፫፻፺፭,፫፻፺፮,፫፻፺፯,፫፻፺፰,፫፻፺፱,,፬፻,፬፻፩,፬፻፪,፬፻፫,፬፻፭,፬፻፮,፬፻፯,፬፻፰,፬፻፱,፬፻፲,፬፻፲፩,፬፻፲፪,፬፻፲፫,፬፻፲፬,፬፻፲፭,፬፻፲፮,፬፻፲፯,፬፻፲፰,፬፻፲፱,፬፻፳,፬፻፳፩,፬፻፳፪,፬፻፳፫,፬፻፳፬,፬፻፳፭,፬፻፳፮,፬፻፳፯,፬፻፳፰,፬፻፳፱,፬፻፴,፬፻፴፩,፬፻፴፪,፬፻፴፫,፬፻፴፬,፬፻፴፭,፬፻፴፮,፬፻፴፯,፬፻፴፰,፬፻፴፱,፬፻፵,፬፻፵፩,፬፻፵፪,፬፻፵፫,፬፻፵፬,፬፻፵፭,፬፻፵፮,፬፻፵፯,፬፻፵፰,፬፻፵፱,፬፻፶,፬፻፶፩,፬፻፶፪,፬፻፶፫,፬፻፶፬,፬፻፶፭,፬፻፶፮,፬፻፶፯,፬፻፶፰,፬፻፶፱,፬፻፷,፬፻፷፩,፬፻፷፪,፬፻፷፫,፬፻፷፬,፬፻፷፭,፬፻፷፮,፬፻፷፯,፬፻፷፰,፬፻፷፱,፬፻፸,፬፻፸፩,፬፻፸፪,፬፻፸፫,፬፻፸፬,፬፻፸፭,፬፻፸፮,፬፻፸፯,፬፻፸፰,፬፻፸፱,፬፻፹,፬፻፹፩,፬፻፹፪,፬፻፹፫,፬፻፹፬,፬፻፹፭,፬፻፹፮,፬፻፹፯,፬፻፹፰,፬፻፹፱,፬፻፺,፬፻፺፩,፬፻፺፪,፬፻፺፫,፬፻፺፬,፬፻፺፭,፬፻፺፮,፬፻፺፯,፬፻፺፰,፬፻፺፱,፭፻,፭፻፩,፭፻፪,፭፻፫,፭፻፬,፭፻፭,፭፻፯,፭፻፰,፭፻፱,፭፻፲,፭፻፲፩,፭፻፲፪,፭፻፲፫,፭፻፲፬,፭፻፲፭,፭፻፲፮,፭፻፲፯,፭፻፲፰,፭፻፲፱,፭፻፳,፭፻፳፩,፭፻፳፪,፭፻፳፫,፭፻፳፬,፭፻፳፭,፭፻፳፮,፭፻፳፯,፭፻፳፰,፭፻፳፱,፭፻፴,፭፻፴፩,፭፻፴፪,፭፻፴፫,፭፻፴፬,፭፻፴፭,፭፻፴፮,፭፻፴፯,፭፻፴፰,፭፻፴፱,፭፻፵,፭፻፵፩፭፻፵፪,፭፻፵፫,፭፻፵፬,፭፻፵፭,፭፻፵፮,፭፻፵፯,፭፻፵፰,፭፻፵፱,፭፻፶,፭፻፶፩,፭፻፶፪,፭፻፶፫,፭፻፶፬,፭፻፶፭,፭፻፶፮,፭፻፶፯,፭፻፶፰,፭፻፶፱,፭፻፷,፭፻፷፩,፭፻፷፪,፭፻፷፫,፭፻፷፬,፭፻፷፭,፭፻፷፮,፭፻፷፯,፭፻፷፰,፭፻፷፱,፭፻፸,፭፻፸፩,፭፻፸፪,፭፻፸፫,፭፻፸፬,፭፻፸፭,፭፻፸፮,፭፻፸፯,፭፻፸፰,፭፻፸፱,፭፻፹,፭፻፹፩,፭፻፹፪፭፻፹፫,፭፻፹፬,፭፻፹፭,፭፻፹፮,፭፻፹፯,፭፻፹፰,፭፻፹፱,፭፻፺,፭፻፺፩,፭፻፺፪,፭፻፺፫,፭፻፺፬,፭፻፺፭,፭፻፺፮,፭፻፺፯,፭፻፺፰,፭፻፺፱,፮፻,፮፻፩,፮፻፪,፮፻፫,፮፻፬,፮፻፭,፮፻፮,፮፻፯,፮፻፰,፮፻፱,፮፻፲,፮፻፲፩,፮፻፲፪,፮፻፲፫,፮፻፲፬,፮፻፲፭,፮፻፲፮,፮፻፲፯,፮፻፲፰,፮፻፲፱,፮፻፳,፮፻፳፩,፮፻፳፪,፮፻፳፫,፮፻፳፬,፮፻፳፭,፮፻፳፮,፮፻፳፯,፮፻፳፰,፮፻፳፱,፮፻፴,፮፻፴፩,፮፻፴፪,፮፻፴፫,፮፻፴፬,፮፻፴፭,፮፻፴፮,፮፻፴፯,፮፻፴፰,፮፻፴፱,፮፻፵,፮፻፵፩,፮፻፵፪,፮፻፵፫,፮፻፵፬,፮፻፵፭,፮፻፵፮,፮፻፵፯,፮፻፵፰,፮፻፵፱,፮፻፶,፮፻፶፩,፮፻፶፪,፮፻፶፫,፮፻፶፬,፮፻፶፭,፮፻፶፮,፮፻፶፯,፮፻፶፰,፮፻፶፱,፮፻፷,፮፻፷፩,፮፻፷፪,፮፻፷፫,፮፻፷፬,፮፻፷፭,፮፻፷፮,፮፻፷፯,፮፻፷፰,፮፻፷፱,፮፻፸,፮፻፸፩,፮፻፸፪,፮፻፸፫,፮፻፸፬,፮፻፸፭,፮፻፸፮,፮፻፸፯,፮፻፸፰,፮፻፸፱,፮፻፹,፮፻፹፩,፮፻፹፪፮፻፹፫,፮፻፹፬,፮፻፹፭,፮፻፹፮,፮፻፹፯,፮፻፹፰,፮፻፹፱,፮፻፺,፮፻፺፩,፮፻፺፪,፮፻፺፫,፮፻፺፬,፮፻፺፭,፮፻፺፮,፮፻፺፯,፮፻፺፰,፮፻፺፱,፯፻,፯፻፩,፯፻፪,፯፻፫,፯፻፬,፯፻፭,፯፻፮,፯፻፯,፯፻፰,፯፻፱,፯፻፲,፯፻፲፩,፯፻፲፪,፯፻፲፫,፯፻፲፬,፯፻፲፭,፯፻፲፮,፯፻፲፯,፯፻፲፰,፯፻፲፱,፯፻፳,፯፻፳፩,፯፻፳፪,፯፻፳፫,፯፻፳፬,፯፻፳፭,፯፻፳፮,፯፻፳፯,፯፻፳፰,፯፻፳፱,፯፻፴,፯፻፴፩,፯፻፴፪,፯፻፴፫,፯፻፴፬,፯፻፴፭,፯፻፴፮,፯፻፴፯,፯፻፴፰,፯፻፴፱,፯፻፵,፯፻፵፩,፯፻፵፪,፯፻፵፫,፯፻፵፬,፯፻፵፭,፯፻፵፮,፯፻፵፯,፯፻፵፰,፯፻፵፱,፯፻፶,፯፻፶፩,፯፻፶፪,፯፻፶፫,፯፻፶፬,፯፻፶፭,፯፻፶፮,፯፻፶፯,፯፻፶፰,፯፻፶፱,፯፻፷,፯፻፷፩,፯፻፷፪,፯፻፷፫,፯፻፷፬,፯፻፷፭,፯፻፷፮,፯፻፷፯,፯፻፷፰,፯፻፷፱,፯፻፸,፯፻፸፩,፯፻፸፪,፯፻፸፫,፯፻፸፬,፯፻፸፭,፯፻፸፮,፯፻፸፯,፯፻፸፰,፯፻፸፱,፯፻፹,፯፻፹፩,፯፻፹፪,፯፻፹፫,፯፻፹፬,፯፻፹፭,፯፻፹፮,፯፻፹፯,፯፻፹፰,፯፻፹፱,፯፻፺,፯፻፺፩,፯፻፺፪,፯፻፺፫,፯፻፺፬,፯፻፺፭,፯፻፺፮,፯፻፺፯,፯፻፺፰,፯፻፺፱,፰፻,፰፻፩,፰፻፪,፰፻፫,፰፻፬,፰፻፭,፰፻፮,፰፻፯,፰፻፰,፰፻፱,፰፻፲,፰፻፲፩,፰፻፲፪,፰፻፲፫,፰፻፲፬,፰፻፲፭,፰፻፲፮,፰፻፲፯,፰፻፲፰,፰፻፲፱,፰፻፳,፰፻፳፩,፰፻፳፪,፰፻፳፫,፰፻፳፬,፰፻፳፭,፰፻፳፮,፰፻፳፯,፰፻፳፰,፰፻፳፱,፰፻፴,፰፻፴፩,፰፻፴፪,፰፻፴፫,፰፻፴፬,፰፻፴፭,፰፻፴፮,፰፻፴፯,፰፻፴፰,፰፻፴፱,፰፻፵,፰፻፵፩,፰፻፵፪,፰፻፵፫,፰፻፵፬,፰፻፵፭,፰፻፵፮,፰፻፵፯,፰፻፵፰,፰፻፵፱,፰፻፶,፰፻፶፩,፰፻፶፪,፰፻፶፫,፰፻፶፬,፰፻፶፭,፰፻፶፮,፰፻፶፯,፰፻፶፰,፰፻፶፱,፰፻፷,፰፻፷፩,፰፻፷፪,፰፻፷፫,፰፻፷፬,፰፻፷፭,፰፻፷፮,፰፻፷፯,፰፻፷፰,፰፻፷፱,፰፻፸,፰፻፸፩,፰፻፸፪,፰፻፸፫,፰፻፸፬,፰፻፸፭,፰፻፸፮,፰፻፸፯,፰፻፸፰,፰፻፸፱,፰፻፹,፰፻፹፩,፰፻፹፪,፰፻፹፫,፰፻፹፬,፰፻፹፭,፰፻፹፮,፰፻፹፯,፰፻፹፰,፰፻፹፱,፰፻፺,፰፻፺፩,፰፻፺፪,፰፻፺፫,፰፻፺፬,፰፻፺፭,፰፻፺፮,፰፻፺፯,፰፻፺፰,፰፻፺፱,፱፻,፱፻፩,፱፻፪,፱፻፫,፱፻፬,፱፻፭,፱፻፯,፱፻፰,፱፻፱,፱፻፲,፱፻፲፩,፱፻፲፪,፱፻፲፫,፱፻፲፬,፱፻፲፭,፱፻፲፮,፱፻፲፯,፱፻፲፰,፱፻፲፱,፱፻፳,፱፻፳፩,፱፻፳፪,፱፻፳፫,፱፻፳፬,፱፻፳፭,፱፻፳፮,፱፻፳፯,፱፻፳፰,፱፻፳፱,፱፻፴,፱፻፴፩,፱፻፴፪,፱፻፴፫,፱፻፴፬,፱፻፴፭,፱፻፴፮,፱፻፴፯,፱፻፴፰,፱፻፴፱,፱፻፵,፱፻፵፩,፱፻፵፪,፱፻፵፫,፱፻፵፬,፱፻፵፭,፱፻፵፮,፱፻፵፯,፱፻፵፰,፱፻፵፱,፱፻፶,፱፻፶፩,፱፻፶፪,፱፻፶፫,፱፻፶፬,፱፻፶፭,፱፻፶፮,፱፻፶፯,፱፻፶፰,፱፻፶፱,፱፻፷,፱፻፷፩,፱፻፷፪,፱፻፷፫,፱፻፷፬,፱፻፷፭,፱፻፷፮,፱፻፷፯,፱፻፷፰,፱፻፷፱,፱፻፸,፱፻፸፩,፱፻፸፪,፱፻፸፫,፱፻፸፬,፱፻፸፭,፱፻፸፮,፱፻፸፯,፱፻፸፰,፱፻፸፱,፱፻፹,፱፻፹፩,፱፻፹፪,፱፻፹፫,፱፻፹፬,፱፻፹፭,፱፻፹፮,፱፻፹፯,፱፻፹፰,፱፻፹፱,፱፻፺,፱፻፺፩,፱፻፺፪,፱፻፺፫,፱፻፺፬,፱፻፺፭,፱፻፺፮,፱፻፺፯,፱፻፺፰,፱፻፺፱,፲፻]
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
            default:

    }
    console.log(computation)
    reset()
    setOperand(computation)
}





    return (


<div className='bg'>
<nav className="navbar_navbar-light_bg-light" >
  <div className="container-fluid">
    
  
<img src='./image/logo.png' alt="logo" width="96" height="96"/>

  

    
  </div>
</nav>
<div className='grid'>
<div className='contact ' >
   


    <div class="scrollbar scrollbar-primary">
  <div class="force-overflow">

  <ul ><h3>GEEZ CALCULATOR</h3>
    <li className='paragraph'>This is an open sorce geez calculator that will allow you 
       calculate a numbers with a geez langueage which is  former
       ethiopian language.</li><li className='paragraph'>one of the most challenging part that i faced to make this project is the geez language does not have a number called 0 which will make you think a litle bit to achive 100% working calculator.</li></ul>
      <ul ><li className='paragraph'>if you would like to contribute on this wonderful project, i am curious to see what futures will you add. here is the github repository link:<a href='https://github.com/Daxsum/Geez-Calculator-' target='_blank'> Click Here</a></li></ul>
    <a href='https://www.linkedin.com/in/kalab-tenadeg-840a49217/' target='_blank'><button  className='badge rounded-pill bg-primary'>Contact Me</button></a>
  </div>
</div>

</div>

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
     </div>
     <nav className="navbar_navbar-light_bg-light" >
  <div className="container-fluidd">
    <span className="navbar-text">
      All write reserved | created by kal dax
    </span>
  </div>
</nav>
</div>

     
    );
}
 
export default Geez;