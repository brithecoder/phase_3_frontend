import React from "react";
import FoundationCard from "./FoundationCard"

function Foundation({ foundationCollection}){
    console.log(foundationCollection)
    return(
        <div>
          {foundationCollection.map((foundation)=> <FoundationCard key={foundation.id} foundation={foundation} /> )}  
        </div>
   )
}

export default Foundation;