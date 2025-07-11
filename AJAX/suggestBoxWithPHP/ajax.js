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
        XHR.open("GET", "wojewodztwa.php" + "?random=" + Math.random(), true);
        
        XHR.onreadystatechange = function(){

            if(XHR.readyState == 4){

                if(XHR.status == 200){
                    XMLMainElement = XHR.responseXML.documentElement;

                }else{
                    alert("wystapil blad AJAX: " + XHR.status);
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

                        wybraniePodpowiedzi(this.innerHTML);

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

        wybraniePodpowiedzi(document.getElementById("suggestBoxField").childNodes[wybrany].firstChild.nodeValue);
        licznik = 0;
        wybrany = 0;

        tmpCode = "enter";
    }else if(keyCode == 9){ // backspace
        licznik = 0;
        wybrany = 0;
        tmpCode = "backspace"; 

    }
}

// Wyswietlanie informacj po wpisaniu/wybraniu wojewodztwa
function wybraniePodpowiedzi(wybranyRekord){
    document.getElementById("tekst").innerHTML = "";
    document.getElementById("suggestBoxField").style.visibility = "hidden";
    var wybraneWojewodztwo = null;

    // Przeszukanie po kazdym elemencie XML 
    for(var i=0; i < XMLMainElement.getElementsByTagName("Województwo").length; i++){
        // Jesli element Nazwa jest rowny wybranyRekord
        if(XMLMainElement.getElementsByTagName("Nazwa")[i].firstChild.nodeValue == wybranyRekord){
            // Przypisanie rodzica Node'a
            wybraneWojewodztwo = XMLMainElement.getElementsByTagName("Nazwa")[i].parentNode;

            break;
        }

    }

    // tworzenie tabeli
    var table = document.createElement("table");
    var tablebody = document.createElement("tbody");

    // przejscie po ilosci rzeczy w wybranym wojewodztwie
    for(var i=0; i < wybraneWojewodztwo.childNodes.length; i++){
        // jesli jest object Element (1) a nie tekst (3)
        if(wybraneWojewodztwo.childNodes[i].nodeType == 1){ 
            var row = document.createElement("tr");
            // Pierwsza kolumna
            var cell = document.createElement("td");
            
            var header = document.createTextNode(wybraneWojewodztwo.childNodes[i].nodeName+": ");
            cell.className = "cellHeader";

            cell.appendChild(header);
            row.appendChild(cell);
            
            // Druga kolumna
            cell = document.createElement("td");
            var content = document.createTextNode(wybraneWojewodztwo.childNodes[i].firstChild.nodeValue);
            cell.appendChild(content);
            row.appendChild(cell);

            // Trzecia kolumna z jednostkami - moja
            cell = document.createElement("td");
            var jednostka = ""; // default przy nazwie
            if(i == 1){ // powierzchnia
                jednostka = "m^2";
            }else if(i == 2){ // ludnosc
                jednostka = "ludzi";
            }
            content = document.createTextNode(jednostka);
            cell.appendChild(content);
            row.appendChild(cell);
            

            tablebody.appendChild(row);
        }
        
    }

    table.appendChild(tablebody);

    document.getElementById("tekst").appendChild(table);

    /* Tak to bedzie wygladac: 
     <table>
        <tbody>
            <tr>
                <td> Nazwa: </td>
                <td> Lubuskie </td>
            </tr>
            <tr>
                <td> Powierzchnia: </td>
                <td> 1 290 321 </td>
            </tr>
            <tr>
                <td> Ludnosc: </td>
                <td> 1 000 000</td>
            </tr>
        </tbody>
     </table>
    */

}


