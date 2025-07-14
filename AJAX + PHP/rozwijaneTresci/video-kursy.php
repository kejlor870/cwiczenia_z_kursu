<?php 
    $host = "localhost";
    $db = "videokursy";
    $user = "root";
    $pass = "";
        
    $conn = mysqli_connect($host, $user, $pass, $db);

    if(!$conn){
        die("Blad polaczenia: " . mysqli_connect_error());
    }

    mysqli_set_charset($conn, "utf8");
    

    $query = "SELECT nazwa, cena, dlugosc, isbn, autor, jezyk FROM videokursy WHERE nazwa='". $_GET["nameOfSearchedProduct"] . "'";

    $results = mysqli_query($conn, $query);

    if(!$results){
        die("Nie udalo sie pobrac danych: " . mysqli_error($conn));
    }

    if($results){
        echo "<table>";
        while($row = mysqli_fetch_assoc($results)){
            foreach($row as $klucz => $wartosc){
                echo "<tr>";
                if($klucz == "cena"){
                    echo "<td class='etykieta'>Cena:</td><td>".$wartosc." zł</td>";
                }else if($klucz == "nazwa"){
                    echo "<td class='etykieta'>Nazwa:</td><td>".$wartosc."</td>";
                }else if($klucz == "dlugosc"){
                    echo "<td class='etykieta'>Dlugosc:</td><td>".$wartosc."</td>";
                }else if($klucz == "isbn"){
                    echo "<td class='etykieta'>ISBN:</td><td>".$wartosc."</td>";
                }else if($klucz == "autor"){
                    echo "<td class='etykieta'>Autor:</td><td>".$wartosc."</td>";
                }else if($klucz == "jezyk"){
                    echo "<td class='etykieta'>Jezyk:</td><td>".$wartosc."</td>";
                }
                echo "</tr>";
            }
        }
        echo "</table>";

    }



?>







