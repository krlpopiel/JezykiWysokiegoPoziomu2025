exports.dodawanie=function(a, b){
    return a+b;
}

exports.odejmowanie=function(a, b){
    return a-b;
}

exports.mnozenie=function(a, b){
    return a*b;
}

exports.dzielenie=function(a, b){
    if(b==0.0){
        return "Nie wolno dzielic przez zero!"
    }
    return a/b;
}

exports.reminder=function(a, b){
    return a%b;
}