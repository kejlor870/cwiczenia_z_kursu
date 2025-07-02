let menu = "";

$("document").ready(
    function(){
        // Utworzenie menu
        menu += "<ul><li>"+$("h1").text();
        let stos = new Array();

        // dla kazdego headera h1/h2/h3...
        $(":header").each(function(i){  
            // dodawanie elementow do stosu
            stos.push($(this)[0].nodeName);

            // dodawanie anchor do kazdego z h1/h2/h3...
            $(this).html("<a href='#top' name='etykieta"+(i+1)+"'>"+$(this).html()+"</a>");

        });


        // Przyporzadkowanie menu
        stworzPrzyporzadkowania(stos);
        stworzMenu(0); // jak narazie 0 tutaj

        // Zamkniecie menu
        menu += "</li></ul>";

        $("body").prepend(menu);
        // dodanie pustego a na samej gorze body
        $("body").prepend($("<a href='top'> </a>"));

    }
);

// Tworzy menu i pod menu
function stworzMenu(pozycjaStartowa){
    let tempLength = window['item'+pozycjaStartowa].wartosc.length; //3

    for(let i=tempLength - 1; i>=0; i--){ //i=2
        let pozcyjaNaglowka = window["item"+pozycjaStartowa].wartosc[i]; 

        if(window["item"+pozcyjaNaglowka].wartosc == ""){
            // Dodawanie do listy kolejnego menu
            menu += "<li><a href='#etykieta"+pozcyjaNaglowka+"'>"+$(":header")[pozcyjaNaglowka].firstChild.innerHTML+"</a></li>";

        }else{
            menu += "<li><a href='#etykieta"+pozcyjaNaglowka+"'>"+$(":header")[pozcyjaNaglowka].firstChild.innerHTML+"</a><ul>";

            // dodawanie pod menu submenu
            stworzMenu(pozcyjaNaglowka);

            menu += "</ul></li>";
        }
        
    }

}

function stworzPrzyporzadkowania(stos){

    // tworzenie nowej globalnej tablicy asocjacyjnej
    for(let i=0; i<stos.length; i++){
        window["item"+i] = new Array();
        // usupelnienie jej
        window["item"+i].push(stos[i]);
        // nowa tablica wartosc
        window["item"+i].wartosc = new Array();

    }

    przyporzodkujWartosci(stos);    
}

function przyporzodkujWartosci(stos){

    while(stos.length){
        let szukany = stos.pop().charAt(1);

        for(let i=stos.length - 1; i >= 0; i--){
            if((parseInt(stos[i].charAt(1)) + 1) == szukany){
                window["item"+i].wartosc.push(stos.length);
                break;

            }

        }
    }

    // alert(item0.wartosc);
    

}









