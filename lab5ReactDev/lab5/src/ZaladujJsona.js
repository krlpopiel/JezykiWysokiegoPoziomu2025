import React, { useEffect, useState } from "react";
import dane from './pracownicy.json';

function ZaladujJsona() {
  const [pracownicy, setPracownicy] = useState([]);

  useEffect(() => {
    setPracownicy([...dane.pracownicy]);
  }, []);

  return (
    <ul>
      {pracownicy.map((pracownik, index) => (
        <li key={index}>
          {pracownik.Imie} {pracownik.Nazwisko}
        </li>
      ))}
    </ul>
  );
}

export default ZaladujJsona;
