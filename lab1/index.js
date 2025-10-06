import camelCase from 'camelcase';

console.log('Oryginał: piekielnie-Duzo_zNAkow_pODlog_ORAZ-Myslnikow-i-roznych_Wielkosci-_Znakow\n')

console.log(camelCase('Piekielnie-Duzo_zNAkow_pODlog_ORAZ-Myslnikow-i-roznych_Wielkosci-_Znakow\n'))
console.log('usuwanie "-" oraz "_" z ciagu znakow z pomniejszeniem pierwszej litery i ustandaryzowaniem wielkosci liter\n')

console.log('Modul przydatny podczas obslugiwania stringów np. celem tworzenia ustandaryzowanych nazw')
console.log('Modul zawiera wiele opcji wypisu\n')

console.log(camelCase('piekielnie-Duzo_zNAkow_pODlog_ORAZ-Myslnikow-i-roznych_Wielkosci-_Znakow\n', {pascalCase: true}))
console.log('usuwanie "-" oraz "_" z ciagu znakow z powiekszeniem pierwszej litery i ustandaryzowaniem wielkosci liter\n')

console.log(camelCase('Piekielnie-Duzo_zNAkow_pODlog_ORAZ-Myslnikow-i-roznych_Wielkosci-_Znakow\n', {pascalCase: false, preserveConsecutiveUppercase: true}))
console.log('usuwanie "-" oraz "_" z ciagu znakow z pomniejszeniem pierwszej litery z zachowaniem wielkosci liter\n')