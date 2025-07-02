var poczatek;
var koniec;

$("document").ready(function(){
    
    $("tr").each(
        function(i){
            $(this).attr("id", "nr"+i);

        }
    );

    $("#otoczka div").each(
        function(i){
            $(this).attr("class", "nr"+i);

        }
    );

    // Stworzenie div podpiedzi
    const hint = $("<div class='box'> test </div>");

    // Po zjechaniu z podpowiedzi to sie chowa
    hint.mouseleave(function(){
        $(this).hide(100);

    });

    // dodanie podpowiedzi na sama gore body
    $("body").prepend(hint);


    $("tr:not(tr:first-child)").hover(
        // Po najechaniu myszka
        function(evt){
            $(this).addClass("podswietlenie");

            // pobranie czasu najechania myszka
            poczatek = evt.timeStamp;

            // Wyswietlenie podpowiedzi
            hint.css({
                "left": evt.pageX + 10,
                "top": evt.pageY

            }).html($("."+$(this).attr("id")).html()).show(100);

        },

        // Po zjechaniu myszka z elementu
        function(evt){
            // pobranie czasu zjechania myszka
            koniec = evt.timeStamp;

            $(this).removeClass("podswietlenie");

            // Jesli uzytkownik przejedzie wolniej to jest animacja 
            if(koniec-poczatek > 500){
                if(evt.relatedTarget.nodeName != "DIV"){
                    hint.hide(100);
                }
                
            }

        }
    );


});











