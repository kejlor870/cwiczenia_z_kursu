/// <reference types="jquery" />

$("document").ready(
    function(){

        $(".naglowek span").click(function () {
            // Wychodzimy do rodzica (do naglowek) i pozniej z rodzica
            //  idziemy do nastepnego elementu o klasie .ukryty_tekst
            $(this).parent().next(".ukryty_tekst").slideToggle();
            
            // alert($(this).text());
            if($(this).text() === "więcej"){
                $(this).text("mniej");
            }else {
                $(this).text("więcej");
            }

        });

    
    }

);











