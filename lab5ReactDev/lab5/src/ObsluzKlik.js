import React, { useState } from "react";
function ObsluzKlik() {

    const [stan, setStan] = useState(false);

    function zmien() {
        setStan(prevStan => !prevStan);
    }

    return (
        <button onClick={zmien}>
            {stan ? "On" : "Off"}
        </button>
    );

}
export default ObsluzKlik;