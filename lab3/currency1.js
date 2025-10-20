let PLNCanadian = 2.59;
let PLNUS = 3.64;
let PLNEUR = 4.26;
let PLNGBP = 4.88;
let PLNUAH = 0.09;



function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
}


exports.canadiantoPLN = function (canadian) {
  return roundTwoDecimals(canadian * PLNCanadian);
};

exports.PLNtoCanadian = function (PLN) {
  return roundTwoDecimals(PLN / PLNCanadian);
};


exports.PLNtoUS = function (PLN){
    return  roundTwoDecimals(PLN / PLNUS);
}

exports.UStoPLN = function (US){
    return  roundTwoDecimals(US * PLNUS);
}


exports.PLNtoEUR = function (PLN){
    return  roundTwoDecimals(PLN / PLNEUR);
}

exports.EURtoPLN = function (EUR){
    return  roundTwoDecimals(EUR * PLNEUR);
}


exports.PLNtoGBP = function (PLN){
    return  roundTwoDecimals(PLN / PLNGBP);
}

exports.GBPtoPLN = function (GBP){
    return  roundTwoDecimals(GBP * PLNGBP);
}


exports.PLNtoUAH = function (PLN){
    return  roundTwoDecimals(PLN / PLNUAH);
}

exports.UAHtoPLN = function (UAH){
    return  roundTwoDecimals(UAH * PLNUAH);
}