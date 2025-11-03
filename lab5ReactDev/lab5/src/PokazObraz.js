import React, { useState } from "react";
import slodkaPara from './slodkaPara.png';

function PokazObraz() {
    const [visible, setVisible] = useState(false);

    function showImage() {
        setVisible(v => !v);
    }

    return (
        <div>
            <button onClick={showImage}>KLIKNIJ MNIE</button>
            <br></br>
            {visible && <img src={slodkaPara} alt="Słodka para" width={250} height={250}/>}
        </div>
    );
}

export default PokazObraz;