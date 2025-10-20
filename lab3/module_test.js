//-----------------------------------------------
const currency1 = require("./currency1");

console.log(
  "50 dolarów kanadyjskich odpowiada następującej ilości złotych:"
);

console.log(currency1.canadiantoPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości dolarów kanadyjskich:"
);

console.log(currency1.PLNtoCanadian(30));

//-----------------------------------------------

console.log(
  "50 dolarów odpowiada następującej ilości złotych:"
);

console.log(currency1.UStoPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości dolarów:"
);

console.log(currency1.PLNtoUS(30));

//-----------------------------------------------

console.log(
  "50 euro odpowiada następującej ilości złotych:"
);

console.log(currency1.EURtoPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości euro:"
);

console.log(currency1.PLNtoEUR(30));

//-----------------------------------------------

console.log(
  "50 funtów szterlingów odpowiada następującej ilości złotych:"
);

console.log(currency1.GBPtoPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości funtów szterlingów:"
);

console.log(currency1.PLNtoGBP(30));

//-----------------------------------------------

console.log(
  "50 hrywien odpowiada następującej ilości złotych:"
);

console.log(currency1.UAHtoPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości hrywien:"
);

console.log(currency1.PLNtoUAH(30));

//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------

const currency2 = require("./currency2");

const canadian = 2.59;
const dollar = 3.64;
const euro = 4.26;
const pound = 4.88;
const hryvnia = 0.09;

//-----------------------------------------------

const waluta1 = new currency2(canadian);

console.log(
  "50 dolarów kanadyjskich odpowiada następującej ilości złotych:"
);

console.log(waluta1.walutaToPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości dolarów kanadyjskich:"
);

console.log(waluta1.PLNtoWaluta(30));

//-----------------------------------------------

const waluta2 = new currency2(dollar);

console.log(
  "50 dolarów odpowiada następującej ilości złotych:"
);

console.log(waluta2.walutaToPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości dolarów:"
);


console.log(waluta2.PLNtoWaluta(30));

//-----------------------------------------------

const waluta3 = new currency2(euro);

console.log(
  "50 euro odpowiada następującej ilości złotych:"
);

console.log(waluta3.walutaToPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości euro:"
);

console.log(waluta3.PLNtoWaluta(30));

//-----------------------------------------------

const waluta4 = new currency2(pound);

console.log(
  "50 funtów szterlingów odpowiada następującej ilości złotych:"
);

console.log(waluta4.walutaToPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości funtów szterlingów:"
);

console.log(waluta4.PLNtoWaluta(30));

//-----------------------------------------------

const waluta5 = new currency2(hryvnia);

console.log(
  "50 hrywien odpowiada następującej ilości złotych:"
);

console.log(waluta5.walutaToPLN(50));

console.log(
  "30 złotych odpowiada następującej ilości hrywien:"
);

console.log(waluta5.PLNtoWaluta(30));