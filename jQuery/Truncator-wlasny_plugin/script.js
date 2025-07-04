
$("document").ready(function(){

    $(".textSection").truncate({textLimit: 200, moreText: "... wiecej", lessText: "MNIEJ"});

});


(function($){
    $.fn.truncate = function(options){
        // pod customizacje
        const defaults = {
            textLimit: "200",
            moreText: "... more",
            lessText: "LESS"
        }

        // aktualizacja defaults jesli podane przy wywolywaniu funkcji
        let settings = $.extend({}, defaults, options);

        return this.each(
            function(){
                // pobranie aktualnego obiektu
                let actualObj = jQuery(this);
                // pobranie tresci obiektu
                let message = jQuery(this).html();
                // dlugosc tekstu w obiekcie
                let messageLength = message.length;

                // jesli dlugosc tekstu > textLimit(default 200) wtedy przycinamy dzielac
                // na czesc widoczna i ta ukryta
                if(messageLength > settings.textLimit){
                    // znalezienie miejsca przerwy jesli teskt wiekszy niz textLimit(default 200)
                    let splitLocation = message.indexOf(" ", settings.textLimit);
                    // wyciecie czesci od 0 do textLimit(default 200) (widoczna czesc)
                    let visiblePart = message.substring(0, splitLocation);
                    // wyciecie czesci do ukrycia
                    let hiddenPart = message.substring(splitLocation, messageLength);

                    // zmienienie html aktualnego obiektu
                    // wyswietlenie tresci do textLimit(default 200) znakow i ukrycie tej po  
                    actualObj.html("<span class='visiblePart'>"+visiblePart+"</span><span class='moreText'>"+settings.moreText+"</span><span class='hiddenPart'>"+hiddenPart+"<span class='lessText'> "+settings.lessText+" </span></span>");

                    // ukrycie hiddenPart od aktualnego obiektu
                    $(".hiddenPart", actualObj).css("display", "none");

                    
                    // obsluga nacisniecia ,,wiecej"
                    $(".moreText", actualObj).click(
                        function(){
                            // wyswietlenie ukrytej zawartosci
                            $(".hiddenPart", actualObj).css("display", "block");

                            // ukrycie przycisku ,,wiecej"
                            $(".moreText", actualObj).css("display", "none");

                        }
                    );

                    // obsluga nacisniecia ,,UKRYJ"
                    $(".lessText", actualObj).click(
                        function(){
                            $(".hiddenPart", actualObj).css("display", "none");
                            
                            $(".moreText", actualObj).css("display", "inline-block");

                        }
                    );

                }
                
            }
        );
        

    }

}) (jQuery);








