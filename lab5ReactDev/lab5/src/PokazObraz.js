import React, { useState } from "react";

function PokazObraz() {
    const [visible, setVisible] = useState(false);

    function showImage() {
        setVisible(v => !v);
    }

    return (
        <div>
            <button onClick={showImage}>KLIKNIJ MNIE</button>
            <br></br>
            {visible && <img src="/slodkaPara.png" alt="Słodka para" width={250} height={250}/>}
        </div>
    );
}

export default PokazObraz;