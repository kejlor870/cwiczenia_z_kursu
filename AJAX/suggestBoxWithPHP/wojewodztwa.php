<?php 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "test";

    $conn = mysqli_connect($host, $user, $pass, $db);

    if(!$conn){
        die("Blad polaczenia: " . mysqli_connect_error());
    }

    mysqli_set_charset($conn, "utf8");

    $query = "SELECT nazwa, powierzchnia, ludnosc FROM wojewodztwa";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die("Nie udalo sie pobrac danych: " . mysqli_error($conn));

    }


    // Stworzenie dokumentu XML przy pomocy PHP (wyspianie danych w takiej formule jak XML)
    header("Content-type: text/xml");
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";

    echo "<Województwa>";
    while($row = mysqli_fetch_assoc($result)){
        echo "<Województwo>";

        foreach($row as $klucz => $wartosc){
            if($klucz == "nazwa"){
                echo "<Nazwa>" . $wartosc . "</Nazwa>";
            }else if($klucz == "powierzchnia"){
                echo "<Powierzchnia>" . $wartosc . "</Powierzchnia>";
            }else if($klucz == "ludnosc"){
                echo "<Ludność>" . $wartosc . "</Ludność>";
            }
        }

        echo "</Województwo>";
    }
    echo "</Województwa>";

    mysqli_close($conn);
?>





