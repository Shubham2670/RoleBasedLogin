import {useEffect } from "react";

const UsetitleCount=(count)=>{
   
    useEffect(()=>{
        console.log("start")
        if(count >= 1){
            document.title =`Chats (${count})`
        }
        else{
            document.title =`chats`
        }
    },[count])
}

export default UsetitleCount;