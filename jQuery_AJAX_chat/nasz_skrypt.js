var time = 0;

$("document").ready(
    function(evt){
        $("#shoutbox").submit(
            function(){
                $.post("odbierz_dane.php", {
                    "text": $("#text").val(),
                    "nick": $("#nick").val(),
                    "time": time,
                    "action": "post"

                }, function(daneXML){
                    addMessage(daneXML);

                });

                $("#text").val("");
                return false;
            }
        );

		updateMessage();
	}
);


function updateMessage(){
    // metoda do wysylania
    $.post("odbierz_dane.php", {"time": time}, 
        function(daneXML){ // dane <- to co zwraca odbierz_dane.php
            addMessage(daneXML);

        }
    );

    setTimeout(updateMessage, 2000); // wywoluje sie co 2s
}


function addMessage(daneXML){
    // Jesli nie pojawily sie nowe posty to funckja sie zatrzymuje
    if($("status", daneXML).text() == "0"){
        return;
    }

    var wiadomosci = $("wiadomosc", daneXML);

    time = $("timestamp", daneXML).text();

    wiadomosci.each(
        function(i){
            var nick = $("nick", this);
            var tresc = $("tresc", this);
            var czas = $("czas", this);

            $("#messages").prepend("["+czas.text()+"]<br>[<span class='nickBolder'>"+nick.text()+"</span>]:<br>&nbsp;&nbsp;"+tresc.text()+"<br><hr>");

        }
    );

}