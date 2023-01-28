function encrypt (){
    var text = document.querySelector("#inputText").value;
    if (text !== text.toLowerCase()) {
        alert("ERROR SUPER HIPER DUPER MEGA FATAL: Solo letras minúsculas");
        return;
    }
    if (text.match(/[^a-z ]/i)) {
        alert("ERROR SUPER HIPER DUPER MEGA FATAL: No incluyas caracteres especiales ni acentos.");
        return;
    }
    var cipherText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.querySelector(".textOutput").value = cipherText;
    document.querySelector(".inputText").value;
    textOutput.style.background = "none";
    }
var button1 = document.querySelector("#encrypt"); button1.onclick = encrypt;

function decrypt (){ 
    var text = document.querySelector("#inputText").value; 
    var cipherText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u"); 
    document.querySelector(".textOutput").value = cipherText; 
    document.querySelector(".inputText").value;

}
var button2 = document.querySelector("#decrypt"); button2.onclick = decrypt;

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