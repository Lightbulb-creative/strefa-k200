# 📋 STREFA K200 — Lista materiałów do dostarczenia

> Poniżej znajduje się kompletna lista materiałów, które potrzebujemy
> aby ukończyć stronę internetową. Przy każdym elemencie zaznaczono
> priorytet: 🔴 wymagane | 🟡 zalecane | 🟢 opcjonalne

---

## 1. 🏢 BRANDING / IDENTYFIKACJA WIZUALNA

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 1.1 | Logo STREFA K200 | 🔴 | SVG lub PNG (przeźroczyste tło) | Wersja jasna (na ciemne tło) |
| 1.2 | Logo — wersja alternatywna | 🟡 | SVG/PNG | Np. sam symbol, favicon |
| 1.3 | Księga znaku / kolory marki | 🟢 | PDF / opis | Jeśli istnieje |

---

## 2. 📸 ZDJĘCIA I WIZUALIZACJE

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 2.1 | Wizualizacje budynku z galerii Adobe (14 szt.) | 🔴 | JPG/PNG, min. 1920px szer. | Te z galerii adobe.ly/4bu0WIo |
| 2.2 | Wizualizacje wnętrz apartamentów | 🟡 | JPG/PNG, min. 1920px szer. | Salon, sypialnia, kuchnia, łazienka |
| 2.3 | Rzuty kondygnacji / plan budynku | 🟡 | PNG/SVG | Do interaktywnej mapy budynku |
| 2.4 | Rzuty poszczególnych lokali (karty PDF) | 🟡 | PDF | Jeden PDF per lokal |
| 2.5 | Zdjęcia okolicy / lokalizacji | 🟢 | JPG/PNG | Parki, szkoły, sklepy w pobliżu |
| 2.6 | Film animacyjny (z galerii Adobe) | 🟢 | MP4, max 20MB | Ten 12-sekundowy z galerii |

---

## 3. 📊 DANE MIESZKAŃ (NAJWAŻNIEJSZE!)

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 3.1 | Pełna lista lokali | 🔴 | Excel/CSV | Kolumny poniżej ⬇️ |
| 3.2 | Ceny lokali | 🔴 | w pliku powyżej | Cena brutto za lokal |
| 3.3 | Statusy lokali | 🔴 | w pliku powyżej | Wolne / Zarezerwowane / Sprzedane |

### Oczekiwane kolumny w pliku Excel/CSV:

```
| Nr lokalu | Budynek | Piętro | Pokoje | Powierzchnia (m²) | Cena (PLN) | Status |
|-----------|---------|--------|--------|--------------------|------------|--------|
| A.01      | A       | 0      | 3      | 62.30              | 560700     | wolne  |
| A.02      | A       | 0      | 4      | 68.15              | 613350     | zarezerwowane |
| ...       | ...     | ...    | ...    | ...                | ...        | ...    |
```

> ⚠️ Obecnie strona zawiera **80 przykładowych lokali** z fikcyjnymi cenami.
> Trzeba je zastąpić prawdziwymi danymi.

---

## 4. 📍 LOKALIZACJA

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 4.1 | Adres inwestycji | 🔴 | Tekst | Dokładny adres budynku |
| 4.2 | Współrzędne GPS | 🟡 | lat, lng | Do osadzenia mapy Google |
| 4.3 | Link Google Maps biura sprzedaży | 🟡 | URL | Jak w montecarlo.com.pl |
| 4.4 | Lista POI (punkty w okolicy) | 🟢 | Tekst/Excel | Szkoły, sklepy, parki + odległości |

---

## 5. 📞 DANE KONTAKTOWE

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 5.1 | Numer telefonu biura sprzedaży | 🔴 | Tekst | Np. +48 534 820 720 |
| 5.2 | Adres email | 🔴 | Tekst | Np. biuro@strefak200.pl |
| 5.3 | Adres biura sprzedaży | 🔴 | Tekst | Ulica, kod pocztowy, miasto |
| 5.4 | Godziny otwarcia | 🟡 | Tekst | Pon-Pt: 9-17, Sob: 10-14 |
| 5.5 | Link do Facebooka | 🟡 | URL | Fanpage inwestycji |
| 5.6 | Link do Instagrama | 🟢 | URL | Profil inwestycji |

---

## 6. ⚖️ DANE PRAWNE

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 6.1 | Pełna nazwa spółki | 🔴 | Tekst | Np. "STREFA K200 Sp. z o.o." |
| 6.2 | Adres siedziby spółki | 🔴 | Tekst | |
| 6.3 | NIP | 🔴 | Tekst | |
| 6.4 | REGON | 🔴 | Tekst | |
| 6.5 | KRS | 🔴 | Tekst | |
| 6.6 | Dane IOD (Inspektor Ochrony Danych) | 🔴 | Tekst / email | Wymagane przez RODO |
| 6.7 | Nazwa banku (rachunek powierniczy) | 🟡 | Tekst | Do prospektu informacyjnego |
| 6.8 | Prospekt informacyjny (pełny) | 🟡 | PDF | Ustawa deweloperska wymaga |
| 6.9 | Planowana data oddania (Etap I i II) | 🟡 | Tekst | Np. "Q4 2026" |
| 6.10 | Gotowa polityka prywatności od prawnika | 🟢 | PDF/DOCX | Jeśli macie — wstawimy zamiast wzoru |

---

## 7. 📝 TEKSTY / TREŚCI

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 7.1 | Tekst "O nas" / O deweloperze | 🟡 | Tekst | Aktualnie jest placeholder |
| 7.2 | Opis inwestycji | 🟡 | Tekst | Główne atuty, filozofia |
| 7.3 | Opisy cech (feature cards) | 🟢 | Tekst | 6 kart: architektura, okna, balkony, garaż, kameralność, bezpieczeństwo |
| 7.4 | Slogan / hasło reklamowe | 🟢 | Tekst | Na hero section |

---

## 8. 🌐 HOSTING / DOMENA

| # | Element | Priorytet | Format | Uwagi |
|---|---------|-----------|--------|-------|
| 8.1 | Domena (np. strefak200.pl) | 🔴 | Tekst | Czy już kupiona? |
| 8.2 | Hosting / Serwer | 🔴 | Dane dostępowe | FTP/SSH lub CPanel |
| 8.3 | Certyfikat SSL | 🔴 | — | Wiele hostingów ma darmowy Let's Encrypt |
| 8.4 | Google Analytics ID | 🟢 | Tekst | Np. "G-XXXXXXXXXX" |

---

## 📌 PODSUMOWANIE PRIORYTETÓW

### 🔴 Wymagane do uruchomienia (11 elementów):
1. Logo
2. Wizualizacje budynku (zdjęcia z galerii Adobe)
3. Pełna lista lokali z cenami i statusami
4. Adres inwestycji
5. Numer telefonu
6. Adres email
7. Adres biura sprzedaży
8. Pełna nazwa spółki + NIP + REGON + KRS
9. Dane IOD
10. Domena
11. Hosting

### 🟡 Zalecane do profesjonalnego wyglądu (12 elementów):
- Wizualizacje wnętrz, rzuty lokali, plan budynku
- Współrzędne GPS, link do Google Maps
- Godziny otwarcia, Facebook
- Nazwa banku, prospekt informacyjny, daty oddania
- Teksty "O nas" i opis inwestycji

### 🟢 Opcjonalne (nice to have):
- Księga znaku, zdjęcia okolicy, film
- Instagram, Google Analytics
- Profesjonalna polityka prywatności od prawnika

---

> 💡 **Wskazówka:** Najszybszym sposobem jest przesłanie materiałów do folderu
> `e:\lightbulb.creative\p1_developer\assets\` — od razu je podepnę do strony.
>
> Dane mieszkań najlepiej w pliku Excel (.xlsx) lub CSV.
