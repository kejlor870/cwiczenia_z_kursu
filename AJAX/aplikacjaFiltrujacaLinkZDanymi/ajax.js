window.onload = init;

var aktualnyURL = window.location.href;

function init(){
    setInterval(checkURL, 100);

    showHint(true);

}

// wywolanie showHint jesli aktualnyURL jest inny niz URL okna
// umozliwia poprawne dzialanie strzalek przegladrki do cofania
function checkURL(){
    if(aktualnyURL != window.location.href){
        showHint(true);
    }

}


function ajaxInit(){
    var XHR = null;

    try{
        XHR = new XMLHttpRequest();

    }catch(e){
        try{
            XHR = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e2){
            try{
                XHR = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e3){
                alert("Niestety towja przegladarka nie obsluguje AJAX");
            }

        }

    }  

    return XHR;
}

function showHint(isFirstTime){
    
    var XHR = ajaxInit();

    if(XHR != null){
        var query;

        if(!isFirstTime){
            var powierzchniaMIN = document.getElementById("powierzchniaMIN").value;
            var powierzchniaMAX = document.getElementById("powierzchniaMAX").value;
            var ludnoscMIN = document.getElementById("ludnoscMIN").value;
            var ludnoscMAX = document.getElementById("ludnoscMAX").value;

            query = "powierzchniaMIN=" + powierzchniaMIN +
                    "&powierzchniaMAX=" + powierzchniaMAX +
                    "&ludnoscMIN=" + ludnoscMIN + 
                    "&ludnoscMAX=" + ludnoscMAX;

            window.location.href = "#!" + query;

            aktualnyURL = window.location.href;

        }else{ // jesli dane sa juz w url
            // pobranie aktualnego url
            var url = window.location.href;
            // samo zapytanie z url
            query = url.substring(url.indexOf("#!")+2);

            // Istnieje w url
            if(url.indexOf("#!") != -1){
                // Tablica z wartosciami url
                var tmpArray = query.split("&"); 

                // przypisanie danych z url do input
                document.getElementById("powierzchniaMIN").value = tmpArray[0].substring(tmpArray[0].indexOf("=")+1);
                document.getElementById("powierzchniaMAX").value = tmpArray[1].substring(tmpArray[1].indexOf("=")+1);
                document.getElementById("ludnoscMIN").value = tmpArray[2].substring(tmpArray[2].indexOf("=")+1);
                document.getElementById("ludnoscMAX").value = tmpArray[3].substring(tmpArray[3].indexOf("=")+1);

            }

            aktualnyURL = window.location.href;
        }
        

        // Polaczenie
        XHR.open("GET", "wojewodztwa.php?" + query, true);

        XHR.onreadystatechange = function(){
            if(XHR.readyState == 4){
                if(XHR.status == 200){
                    document.getElementById("tekst").innerHTML = XHR.responseText;
                }else{
                    alert("Wystapil blad: " + XHR.status);
                }
            }
        }
    
        XHR.send(null);
    }


}



