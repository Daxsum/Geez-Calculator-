import React, { Component, useState } from 'react';
const [operand,setOperand]=useState("")
const [operand2,setOperand2]=useState("")

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
        setOperand="፩";
    }
}


export default set;
 
