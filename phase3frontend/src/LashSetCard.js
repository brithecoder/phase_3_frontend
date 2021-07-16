import React from "react";

function LashSetCard({lash}) {
    console.log(lash)
    return (

            <div className="lashcard">
                <h1> {lash.name}</h1>
                <h2>  $ {lash.price}</h2>
            </div>
    )
}
export default LashSetCard;