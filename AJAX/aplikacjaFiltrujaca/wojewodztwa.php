<?php 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "test";

    function prawidlowaWartosc($wartosc){
        if(is_numeric($wartosc)){
            return $wartosc;
        }else{
            return null;
        }

    }

    $powierzchniaMIN = prawidlowaWartosc($_GET['powierzchniaMIN']);
    $powierzchniaMAX = prawidlowaWartosc($_GET['powierzchniaMAX']);
    $ludnoscMIN = prawidlowaWartosc($_GET['ludnoscMIN']);
    $ludnoscMAX = prawidlowaWartosc($_GET['ludnoscMAX']);


    $conn = mysqli_connect($host, $user, $pass, $db);

    if(!$conn){
        die("Blad polaczenia: " . mysqli_connect_error());
    }

    mysqli_set_charset($conn, "utf8");

    $query = "SELECT nazwa, powierzchnia, ludnosc FROM wojewodztwa";

    // Filtrowanie
    if(
        $powierzchniaMIN != null || $powierzchniaMAX != null || 
        $ludnoscMIN != null || $ludnoscMAX != null 
    ){
        $query .= " WHERE id > 0 ";
    }

    if($powierzchniaMIN != null){
        $query .= " AND powierzchnia >= " . $powierzchniaMIN;
    }

    if($powierzchniaMAX != null){
        $query .= " AND powierzchnia <= " . $powierzchniaMAX;
    }

    if($ludnoscMIN != null){
        $query .= " AND ludnosc <= " . $ludnoscMIN;
    }

    if($ludnoscMAX != null){
        $query .= " AND ludnosc >= " . $ludnoscMAX;
    }

    // Przeslanie zapytania do bazy
    $result = mysqli_query($conn, $query);

    if(!$result){
        die("Nie udalo sie pobrac danych: " . mysqli_error($conn));

    }


    // Tworzenie tabeli z danymi z bazy danych wojewodztw
    echo "<table>";
    echo "<tr><th> Nazwa: </th><th> Powierzchnia (km2): </th><th> Ludność: </th></tr>";
    while($row = mysqli_fetch_assoc($result)){
        echo "<tr>";

        foreach($row as $klucz => $wartosc){
            if($klucz == "nazwa"){
                echo "<td>" . $wartosc . "</td>";
            }else if($klucz == "powierzchnia"){
                echo "<td>" . $wartosc . "</td>";
            }else if($klucz == "ludnosc"){
                echo "<td>" . $wartosc . "</td>";
            }
        }

        echo "</tr>";
    }
    echo "</table>";

    mysqli_close($conn);
?>





