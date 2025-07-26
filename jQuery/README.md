<h1 align="center">💻 jQuery 💻</h1>
<br>

# 1. 🌱 Dynamiczne_podpowiedzi:
## Dynamiczne podpowiedzi uzywajac jQuery
- po najechaniu na \<tr> w tabeli wyswietla sie podpowiedz

# 2. 🌱 Dynamicznie_generowane_menu:
## Dynamicznie_generowane_menu
### Menu generowane dynamicznie przy uzyciu jQuery.
Pliki dane do pracy: index.html, jquery.js, style.css
Moje pliki: moj-skrypt.js

# 3. 🌱 Rotator_zdjec:
## Rotator zdjec
Rotator zdjec przy uzyciu jQuery

## 📸 Screenshots:
<img width="404" height="305" alt="image" src="https://github.com/user-attachments/assets/dc4782ce-5159-4a15-91dc-847256cd7dfe" />
<br>
🔁
<br>
<img width="406" height="306" alt="image" src="https://github.com/user-attachments/assets/49f7d790-06af-4736-8f10-4d7eb0df6d10" />
<br>
🔁
<br>
<img width="404" height="306" alt="image" src="https://github.com/user-attachments/assets/b3c3d2a2-3d97-461a-b8b0-06bc21aae2c1" />

# 4. 🌱 Rozwijane_nagłówki:
## Rozwijane nagłówki zadanie

# 5. 🌱 Truncator-wlasny_plugin:

✂️ <b>Truncator</b> - plugin jQuery (skracacz tekstu)
Funkcja truncate to plugin jQuery, który umożliwia przycinanie tekstu w wybranych elementach HTML, jeśli jego długość przekracza ustalony limit znaków. Tekst po przekroczeniu limitu jest ukrywany, a użytkownik może rozwinąć go klikając link "... more" i ponownie ukryć klikając "LESS".

🔧 Sposób użycia:
$(selector).truncate(options);

⚙️ Parametry (options):
| Parametr    | Typ             | Domyślna wartość | Opis                                                          |
| ----------- | --------------- | ---------------- | ------------------------------------------------------------- |
| `textLimit` | number          | `"200"`          | Maksymalna liczba znaków widocznych przed obcięciem tekstu.   |
| `moreText`  | string          | `"... more"`     | Tekst/link służący do rozwinięcia ukrytej części.             |
| `lessText`  | string          | `"LESS"`         | Tekst/link służący do ponownego ukrycia rozszerzonego tekstu. |

🧠 Działanie:
1. Inicjalizacja: Funkcja sprawdza, czy tekst wewnątrz danego elementu przekracza textLimit.
2. Podział tekstu:
- visiblePart – początkowa część tekstu (do textLimit znaków).
- hiddenPart – pozostała część tekstu, która zostaje ukryta.
3. Zmiana HTML: Zmieniany jest wewnętrzny HTML elementu, aby zawierał:
- Widoczny fragment (visiblePart)
- Przycisk "... more"
- Ukryty fragment (hiddenPart) + przycisk "LESS"
4. Obsługa zdarzeń:
- Kliknięcie "... more" pokazuje ukryty tekst i ukrywa link "... more".
- Kliknięcie "LESS" ponownie ukrywa dodatkowy tekst i pokazuje "... more".
