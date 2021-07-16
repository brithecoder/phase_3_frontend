import React from "react";

function FoundationCard({foundation}) {
    console.log(foundation)
    return (

            <div className="Foundationcard">
                <h1> {foundation.name}</h1>
                <h2> $ {foundation.price}</h2>
            </div>
    )
}
export default FoundationCard;