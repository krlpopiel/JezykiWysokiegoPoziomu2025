import { useState } from "react";

function WyludzPlik() {
  const [plik, setPlik] = useState(null);
  const [zawartosc, setZawartosc] = useState("");

  const obsluzPlik = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPlik(file);

    const reader = new FileReader();

    if (file.type.startsWith("image/")) {
      reader.onload = (e) => setZawartosc(e.target.result);
      reader.readAsDataURL(file);
    } else {
      reader.onload = (e) => setZawartosc(e.target.result);
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h2>Wczytaj plik</h2>
      <input type="file" onChange={obsluzPlik} />

      {plik && (
        <div>
          <p>Nazwa: {plik.name}</p>
          {plik.type.startsWith("image/") ? (
            <img src={zawartosc} alt="podglad" />
          ) : (
            <pre>{zawartosc}</pre>
          )}
        </div>
      )}
    </div>
  );
}

export default WyludzPlik;
