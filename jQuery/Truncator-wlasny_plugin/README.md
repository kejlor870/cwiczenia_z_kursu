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
