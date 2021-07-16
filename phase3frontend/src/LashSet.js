import React from "react";
import LashSetCard from "./LashSetCard";

function LashSet({lashCollection}){
    console.log(lashCollection)
    return(
         <div>
           {lashCollection.map((lash)=> <LashSetCard key={lash.id}  lash={lash}/> )}     
         </div>
    )
}

export default LashSet;