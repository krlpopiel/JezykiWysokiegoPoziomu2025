let currency2 = function (walutaWartosc) {
  this.walutaWartosc = walutaWartosc;
};

currency2.prototype.roundTwoDecimals = function (amount) {
  return Math.round(amount * 100) / 100;
};

currency2.prototype.walutaToPLN = function (waluta) {
  return this.roundTwoDecimals(waluta * this.walutaWartosc);
};

currency2.prototype.PLNtoWaluta = function (PLN) {
  return this.roundTwoDecimals(PLN / this.walutaWartosc);
};

module.exports = exports = currency2;
