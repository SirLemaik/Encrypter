function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    }
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){ 
    var texto = document.querySelector("#input-texto").value; 
    var textoCifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u"); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value;

}
var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

/*
                     _        _                 _      _                      _ _    
                    | |      | |               (_)    | |                    (_| |   
 _ __ ___   __ _  __| | ___  | |__  _   _   ___ _ _ __| | ___ _ __ ___   __ _ _| | __
| '_ ` _ \ / _` |/ _` |/ _ \ | '_ \| | | | / __| | '__| |/ _ | '_ ` _ \ / _` | | |/ /
| | | | | | (_| | (_| |  __/ | |_) | |_| | \__ | | |  | |  __| | | | | | (_| | |   |
|_| |_| |_|\__,_|\__,_|\___| |_.__/ \__, | |___|_|_|  |_|\___|_| |_| |_|\__,_|_|_|\_\
                                     __/ |                                           
                                    |___/                                            
*/