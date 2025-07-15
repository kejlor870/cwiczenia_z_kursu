<?php 
    // echo $_POST["cos"];

    header("Content-type: text/xml");
    header("Cache-Control: no-cache");

    $host = "localhost";
    $db = "test";
    $user = "root";
    $pass = "";

    $conn = new mysqli($host, $user, $pass, $db);

    if($conn->connect_error){
        die("Blad polaczenia: " . $conn->connect_error);
    }

    $conn->set_charset("utf8");

    $time = $_POST["time"]; // odebrany czas z nasz_skrypt.js

    $query = "SELECT nick, tresc, czas FROM wiadomosci WHERE czas > " . $time;
    $results = mysqli_query($conn, $query);

    // Jesli nie zmienila sie ilosc postow
    if(mysqli_num_rows($results) == 0){
        $status = 0;
    }else{
        $status = 1;
    }

    echo "<?xml version='1.0' ?>";
    echo "<wiadomosci>";
    
    echo "<timestamp>" . time() . "</timestamp>";
    echo "<status>" . $status . "</status>";

    while($row = mysqli_fetch_assoc($results)){
        echo "<wiadomosc>";
        echo "<nick>".$row["nick"]."</nick>";
        echo "<tresc>".$row["tresc"]."</tresc>";
        echo "<czas>".date("d-m-y H:i:s", $row["czas"])."</czas>";
        echo "</wiadomosc>";
    }

    echo "</wiadomosci>";

    $conn->close();
?>