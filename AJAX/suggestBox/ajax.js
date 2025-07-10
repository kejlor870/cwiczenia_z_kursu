window.onload = init;
var XMLMainElement = null;

function init(){
    // Pobranie offsetow (pozycji pola input)
    let wojewodztwoOffsetLeft = document.getElementById("wojewodztwo").offsetLeft;
    let wojewodztwoOffsetTop = document.getElementById("wojewodztwo").offsetTop;
    let wojewodztwoOffsetHeight = document.getElementById("wojewodztwo").offsetHeight;

    // Ustawienie div suggestBoxField pod input, dziala dynamicznie
    document.getElementById("suggestBoxField").style.left = wojewodztwoOffsetLeft + "px";
    document.getElementById("suggestBoxField").style.top = (wojewodztwoOffsetTop + wojewodztwoOffsetHeight) + "px";

    // Funkcja pokazujaca podpowiedzi
    document.getElementById("wojewodztwo").onkeyup = showBox;

    // Pobranie z pliku XML
    suggestBox();
}

function ajaxInit(){
    var XHR = null;

    try{
        XHR = new XMLHttpRequest();

    }catch(e){
        try{
            XHR = new ActiveXObject("Msxm12.XMLHTTP");

        }catch(e2){
            try{
                XHR = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e3){
                alert("Niestety twoja przegladarka nie obsluguje AJAX");

            }
        }
    }

    return XHR;
}

function suggestBox(){

    var XHR = ajaxInit();
    
    if(XHR != null){
        XHR.open("GET", "./wojewodztwa.xml"+"?random="+Math.random(), true);
        
        XHR.onreadystatechange = function(){

            if(XHR.readyState == 4){

                if(XHR.status == 200){
                    XMLMainElement = XHR.responseXML.documentElement;

                }else{
                    alert("wystapil blad: " + XHR.status);
                }

            }

        }

        XHR.send(null);
    }

}

// Funkcja odpowiadajaca za podpowiedzi
function showBox(){
    if(XMLMainElement != null){
        document.getElementById("suggestBoxField").style.visibility = "hidden";
        document.getElementById("suggestBoxField").innerHTML = "";

        // Pobranie wojewodztw do tablicy
        var wojewodztwa = XMLMainElement.getElementsByTagName("Województwo");

        // Jesli nie jest pusty input:
        if(document.getElementById("wojewodztwo").value != ""){
            // Przejscie przez liste wszystkich wojewodztw
            for(var i=0; i < wojewodztwa.length; i++){
                // Jesli text z input odpowiada temu w tablicy
                if(wojewodztwa[i].getElementsByTagName("Nazwa")[0].firstChild.nodeValue.toLowerCase().indexOf(document.getElementById("wojewodztwo").value.toLowerCase()) == 0){
                    var suggestBoxField = document.getElementById("suggestBoxField");
                    // Pokazanie podpowiedzi
                    suggestBoxField.style.visibility = "visible";

                    var tmpDiv = document.createElement("div");
                    tmpDiv.className = "podpowiedzi";

                    // Funkcja uzupelniajaca input po nacisnieciu podpowiedzi
                    tmpDiv.onclick = function(){
                        document.getElementById("wojewodztwo").value = this.innerHTML;
                        suggestBoxField.style.visibility = "hidden";

                    }

                    // Dodanie wojewodztwa do tmpDiv
                    tmpDiv.innerHTML = wojewodztwa[i].getElementsByTagName("Nazwa")[0].firstChild.nodeValue;
                    
                    // Dodanie wojewodztwa do podpowiedzi
                    suggestBoxField.appendChild(tmpDiv);

                }


            }
        }



    }

}




