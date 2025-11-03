import { useState, useEffect } from "react";

function ZmienStyl() {
  const [ciemnia, setciemnia] = useState(false);

  useEffect(() => {
    if (ciemnia) {
      document.body.style.backgroundColor = "#111";
      document.body.style.color = "#eee";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [ciemnia]);

  return (
    <button onClick={() => setciemnia(!ciemnia)}>
      {ciemnia ? "Dzień" : "Noc"}
    </button>
  );
}

export default ZmienStyl;
