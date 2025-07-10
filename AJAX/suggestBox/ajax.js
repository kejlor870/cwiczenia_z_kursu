window.onload = init;
var XMLMainElement = null;
var licznik = 0;
var wybrany = 0;
var tmpCode;

function init(){
    // Pobranie offsetow (pozycji pola input)
    let wojewodztwoOffsetLeft = document.getElementById("wojewodztwo").offsetLeft;
    let wojewodztwoOffsetTop = document.getElementById("wojewodztwo").offsetTop;
    let wojewodztwoOffsetHeight = document.getElementById("wojewodztwo").offsetHeight;

    // Ustawienie div suggestBoxField pod input, dziala dynamicznie
    document.getElementById("suggestBoxField").style.left = wojewodztwoOffsetLeft + "px";
    document.getElementById("suggestBoxField").style.top = (wojewodztwoOffsetTop + wojewodztwoOffsetHeight) + "px";

    // Po wpisaniu w input
    document.getElementById("wojewodztwo").onkeyup = function(evt){
        showBox(evt); // Funkcja pokazujaca podpowiedzi
        checkKey(evt); // Wybieranie z podpowiedzi za pomoca strzalek

    }

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
function showBox(evt){
    var evt = (evt) ? evt : window.event;

    if(evt.keyCode != 13 && evt.keyCode != 38 && evt.keyCode != 40 && evt.keyCode != 8){
        licznik = 0;
        wybrany = 0;
    }

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

// Funckja obslugujaca wybor za pomoca klawiszy
function checkKey(evt){
    var evt = (evt) ? evt : window.event;

    var iloscPodpowiedzi = document.getElementById("suggestBoxField").childNodes.length;

    if(licznik == 0){
        licznik = iloscPodpowiedzi;
        wybrany = 0;

    }

    // Obsluga poszczegolnych klawiszy
    if(evt.keyCode == 40){ // strzalka w dol
        if(tmpCode == "gora"){
            licznik++;
        }
        document.getElementById("suggestBoxField").childNodes[licznik%iloscPodpowiedzi].className = "podpowiedzihover";

        wybrany = licznik % iloscPodpowiedzi;
        
        licznik++;

        tmpCode = "dol";

    }else if(evt.keyCode == 38){ // strzalka w gore
        if(tmpCode == "dol"){
            licznik--;
        }
        licznik--;

        wybrany = licznik % iloscPodpowiedzi;

        document.getElementById("suggestBoxField").childNodes[licznik%iloscPodpowiedzi].className = "podpowiedzihover";

        tmpCode = "gora";

    }else if(evt.keyCode == 13){ // enter
        document.getElementById("wojewodztwo").value = document.getElementById("suggestBoxField").childNodes[wybrany].firstChild.nodeValue;

        tmpCode = "enter";
    }else if(keyCode == 9){ // backspace
        licznik = 0;
        wybrany = 0;
        tmpCode = "backspace"; 

    }
}



