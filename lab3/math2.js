let Matma = function(znak) {
    this.znak = znak;
};

Matma.prototype.policz = function(a, b) {
    switch (this.znak) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return a % b;
        default: return NaN;
    }
};

module.exports = exports = Matma;