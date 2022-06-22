import React, { Component,useState } from 'react';
function H() {

    let [operand,setOperand]=useState("");
    let [operand2,setOperand2]=useState("");
const A = [];


function add (num){
 push(num)
    if (num===1){
        if (operand.length===0){
            setOperand("1");
         
           
        }else if (operand2.length===0){
            setOperand2("1");
        
        }else{
            setOperand2(operand2+"1");
   
          
        }
        

    }}


    function push(i){
        if (i===1){
            A.push(1);
        }
        else if (i===2){
            A.push(2)
        }
        console.log(A);
      }
     const One=()=>{add(1)}
    return ( <div>
        <button onClick={One}>click</button>
    </div> );}

export default H;