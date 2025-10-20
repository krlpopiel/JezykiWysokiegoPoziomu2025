const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const matma1 = require('./math1');
const Matma = require('./math2');

const dodaj = new Matma('+');
const odejmij = new Matma('-');
const pomnoz = new Matma('*');
const podziel = new Matma('/');
const reszta = new Matma('%');

rl.question("Podaj A: ", (a) => {
    rl.question("Podaj B: ", (b) => {
        a = parseFloat(a);
        b = parseFloat(b);

        console.log("\n--- Wyniki z math1 ---");
        console.log(matma1.dodawanie(a, b));
        console.log(matma1.odejmowanie(a, b));
        console.log(matma1.mnozenie(a, b));
        console.log(matma1.dzielenie(a, b));
        console.log(matma1.reminder(a, b));

        rl.question("\nPodaj C: ", (c) => {
            rl.question("Podaj D: ", (d) => {
                c = parseFloat(c);
                d = parseFloat(d);

                console.log("\n--- Wyniki z math2 ---");
                console.log(dodaj.policz(c, d));
                console.log(odejmij.policz(c, d));
                console.log(pomnoz.policz(c, d));
                console.log(podziel.policz(c, d));
                console.log(reszta.policz(c, d));

                rl.close();
            });
        });
    });
});
