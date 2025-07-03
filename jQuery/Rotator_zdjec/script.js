
$("document").ready(
    function(){
        rotateImgs()

    }
);

// Funkcja wybiera pierwsze zdjecie i daje mu klase current
// po czym wywoluje funckjce rotate 
function rotateImgs(){
    let firstImg = $(".imageToRotate:first-child");

    firstImg.addClass("current");

    rotate();

}

// pobiera aktualny obrazek do animacji (rotacji)
function rotate(){
    let current = $(".current");
    let animationTime = 3000;

    // animacja zanikania
    current.animate(
        {
            "opacity": 0

        }, animationTime, function(){
            $(this).removeClass("current");

        }
    );

    // przypisuje nastepny obrazek 
    current = current.next();

    // przechodezi z ostatniego obrazka do pierwszego
    // z ostatniego do nastepnego (ale go nie ma) i zmienia current na pierwszy
    if(current[0] == undefined){
        current = $(".imageToRotate:first-child");
    }

    // animacja pokazania sie obrazka 
    current.css("opacity", 0).addClass("current").delay(100).animate({"opacity": 1}, animationTime, rotate);

}







