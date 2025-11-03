import React, { useState, useEffect } from "react";
function MyszNad(){
    const [domagacz, setdomagacz] = useState(true);
  return (
    <div
      className="container"
      onMouseEnter={() => setdomagacz(false)}
      onMouseLeave={() => setdomagacz(true)}
    >
      <h1 style={{ color: domagacz ? "goldenrod" : "green" }}>
        Najedź myszą na tekst{" "}
      </h1>
    </div>
  );
}
export default MyszNad;