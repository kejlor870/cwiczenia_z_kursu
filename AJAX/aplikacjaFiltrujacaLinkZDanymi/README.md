# Dalsze przekazywanie linków i obsluga przyciskow Back i Forward
- jesli dane sa juz w linku to AJAX wycina je z URL i pozniej przyporzadkowywuje wartosci przekazane przez link do inputow

- w PHP dodalem prawidlowaWartosc($_GET['powierzchniaMIN'] ?? null); - ?? null, poniewaz wyskakiwal blad ze nie przeslano wartosci gdy pierwszy raz wchodzilo sie na strone
    - mozna to usunac ale wtedy w URL odrazu musza byc puste wartosci
      takie: #!powierzchniaMIN=&powierzchniaMAX=&ludnoscMIN=&ludnoscMAX=

- cofanie sie w linku za pomoca strzalek przegladarki do zmiany linku
    (obsluga przyciskow Back i Forward)
