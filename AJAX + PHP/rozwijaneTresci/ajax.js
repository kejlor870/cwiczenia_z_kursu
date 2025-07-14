window.onload = init;

// Pobranie wszystkich elementow z odpowiednia klasa
function getElementsByTagAndClassName(searchFrom, searchedTag, searchedClassName){
    var searchedElements = new Array();
    var tmpArray = searchFrom.getElementsByTagName(searchedTag);

    for(var i=0; i<tmpArray.length; i++){
        if(tmpArray[i].className == searchedClassName){
            searchedElements.push(tmpArray[i]);

        }
    }

    return searchedElements;
}

function init(){
    var searchedArray = getElementsByTagAndClassName(document, "div", "rozwin");

    // Onclick dla kazdego elementu z searchedArray
    for(var i=0; i<searchedArray.length; i++){

        searchedArray[i].onclick = function(){

            // Zmiana widocznosci .tresc_rozwijana
            if(getElementsByTagAndClassName(this.parentNode, "div", "tresc_rozwijana")[0].style.display == "block"){  
                this.firstChild.nodeValue = "[+]";
                // zmiana display na none
                getElementsByTagAndClassName(this.parentNode, "div", "tresc_rozwijana")[0].style.display = "none";
            
            }else{
                this.firstChild.nodeValue = "[-]";
                // zmiana na display na block
                getElementsByTagAndClassName(this.parentNode, "div", "tresc_rozwijana")[0].style.display = "block";
                showInfo(getElementsByTagAndClassName(this.parentNode, "div", "tresc_rozwijana")[0], getElementsByTagAndClassName(this.parentNode, "span", "naglowek")[0].firstChild.nodeValue);
            }

        }

    }

    ajaxInit();

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
                alert("Niestety twoja przegladarka nie obsluguje AJAX");
            }
        }

    }

    return XHR;
}

function showInfo(infoToChange, nameOfSearchedProduct){
    var XHR = ajaxInit();

    if(XHR != null){
        XHR.open("GET", "video-kursy.php?nameOfSearchedProduct="+encodeURIComponent(nameOfSearchedProduct), true);

        XHR.onreadystatechange = function(){
            if(XHR.readyState == 4){
                if(XHR.status == 200){
                    infoToChange.innerHTML = XHR.responseText;

                }else{
                    alert("Wystapil blad: " + XHR.status);
                }
            }
        }
        
        XHR.send(null);
    }
}



