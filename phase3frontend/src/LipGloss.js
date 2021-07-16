import React from "react";
import LipGlossCard from "./LipGlossCard"

function LipGloss({glosscollection}){
    console.log(glosscollection)
    return(
        <div>
         {glosscollection.map((gloss)=> <LipGlossCard key={gloss.div} gloss={gloss} /> )} 
        </div>
   )


}

export default LipGloss;