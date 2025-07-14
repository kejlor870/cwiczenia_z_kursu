<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rozwijane treści</title>
    <link rel="stylesheet" href="style.css">
    <script src="ajax.js"></script>
</head>
<body>
    <div id="towary">
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

            $query = "SELECT nazwa FROM videokursy";
            $result = mysqli_query($conn, $query);

            if(!$result){
                die("Nie udalo sie pobrac danych: " . mysqli_error($conn));
            }

            
            if($result){
                while($row = mysqli_fetch_assoc($result)){
                    // Tworzenie paneli 
                    echo "<div class='towar'>";
                    foreach($row as $klucz => $wartosc){
                        echo "<div class='rozwin'>[+] <span class='naglowek'>".$wartosc."</span></div>";
                        echo "<div class='tresc_rozwijana'>Tresc</div>";
                    }
                    echo "</div>";
                }
            }


        ?>


        <!-- <div class="towar">
            <div class="rozwin">[+] <span class="naglowek">Naglowek</span></div>
            <div class="tresc_rozwijana">Tresc</div>
        </div>

        <div class="towar">
            <div class="rozwin">[+] <span class="naglowek">Naglowek1</span></div>
            <div class="tresc_rozwijana">Tresc1</div>
        </div>

        <div class="towar">
            <div class="rozwin">[+] <span class="naglowek">Naglowek2</span></div>
            <div class="tresc_rozwijana">Tresc2</div>
        </div>

        <div class="towar">
            <div class="rozwin">[+] <span class="naglowek">Naglowek3</span></div>
            <div class="tresc_rozwijana">Tresc3</div>
        </div>

        <div class="towar">
            <div class="rozwin">[+] <span class="naglowek">Naglowek4</span></div>
            <div class="tresc_rozwijana">Tresc4</div>
        </div> -->
    </div>
    
</body>
</html>