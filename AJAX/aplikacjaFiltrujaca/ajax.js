window.onload = init;

function init(){
    showHint();

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

function showHint(){
    
    var XHR = ajaxInit();

    if(XHR != null){
        var powierzchniaMIN = document.getElementById("powierzchniaMIN").value;
        var powierzchniaMAX = document.getElementById("powierzchniaMAX").value;
        var ludnoscMIN = document.getElementById("ludnoscMIN").value;
        var ludnoscMAX = document.getElementById("ludnoscMAX").value;

        var query;
        query = "powierzchniaMIN=" + powierzchniaMIN +
                "&powierzchniaMAX=" + powierzchniaMAX +
                "&ludnoscMIN=" + ludnoscMIN + 
                "&ludnoscMAX=" + ludnoscMAX;

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



