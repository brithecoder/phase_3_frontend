import React from "react";

function LipGlossCard({gloss}) {
    console.log(gloss)
    return (

            <div className="glosscard">
                <h1> {gloss.name}</h1>
                <h2>  $ {gloss.price}</h2>
            </div>
    )
}
export default LipGlossCard;