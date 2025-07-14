-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Lip 2025, 17:05
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `videokursy`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `videokursy`
--

CREATE TABLE `videokursy` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `nazwa` varchar(40) COLLATE utf8_polish_ci NOT NULL,
  `cena` double NOT NULL,
  `dlugosc` char(11) COLLATE utf8_polish_ci NOT NULL,
  `isbn` char(17) COLLATE utf8_polish_ci NOT NULL,
  `jezyk` char(12) COLLATE utf8_polish_ci NOT NULL DEFAULT 'polski',
  `autor` varchar(35) COLLATE utf8_polish_ci NOT NULL DEFAULT 'Arkadiusz Włodarczyk'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `videokursy`
--

INSERT INTO `videokursy` (`id`, `nazwa`, `cena`, `dlugosc`, `isbn`, `jezyk`, `autor`) VALUES
(1, 'Video Kurs C++', 39, '12h 55m 17s', '978-83-61899-56-3', 'polski', 'Arkadiusz Włodarczyk'),
(2, 'Video Kurs C++ - Obsługa Plików', 15, '1h 36m 23s', '978-83-61899-08-2', 'polski', 'Arkadiusz Włodarczyk'),
(3, 'Video Kurs C++ - Algorytmy', 29, '5h 21m 41s', '978-83-61899-04-4', 'polski', 'Arkadiusz Włodarczyk'),
(4, 'Video Kurs Java', 39, '6h 52m 54s', '978-83-61899-12-9', 'polski', 'Arkadiusz Włodarczyk'),
(5, 'Video Kurs Java - Tworzenie Aplikacji', 39, '9h 35m 54s', '978-83-61899-44-0', 'polski', 'Arkadiusz Włodarczyk'),
(6, 'Video Kurs Java - Strumienie', 19, '5h 9m 31s', '978-83-61899-48-8', 'polski', 'Arkadiusz Włodarczyk'),
(7, 'Video Kurs Java - Aspekty Zaawansowane', 24, '5h 31m 13s', '978-83-61899-52-5', 'polski', 'Arkadiusz Włodarczyk'),
(8, 'Video Kurs Turbo Pascal', 29, '3h 47m 48s', '978-83-61899-16-7', 'polski', 'Arkadiusz Włodarczyk'),
(9, 'Video Kurs (X)HTML i CSS', 39, '9h 31m 54s', '978-83-61899-72-3', 'polski', 'Arkadiusz Włodarczyk'),
(10, 'Video Kurs PHP', 29, '6h 7m 38s', '978-83-61899-24-2', 'polski', 'Arkadiusz Włodarczyk'),
(11, 'Video Kurs MySql', 19, '3h 45m 12s', '978-83-61899-28-0', 'polski', 'Arkadiusz Włodarczyk'),
(12, 'Video Kurs JavaScript', 39, '7h 41m 29s', '978-83-61899-32-7', 'polski', 'Arkadiusz Włodarczyk'),
(13, 'Video Kurs XML i DTD', 17, '2h 21m 8s', '978-83-61899-68-6', 'polski', 'Arkadiusz Włodarczyk'),
(14, 'Video Kurs Smarty', 19, '2h 50m 21s', '978-83-61899-36-5', 'polski', 'Arkadiusz Włodarczyk'),
(15, 'Video Kurs Matematyki - Logika i Zbiory', 7.77, '5h 6m 33s', '978-83-61899-40-2', 'polski', 'Arkadiusz Włodarczyk'),
(16, 'Video Kurs Matematyki - Algebra cz. 1', 17.77, '5h 24m 39s', '978-83-61899-60-0', 'polski', 'Arkadiusz Włodarczyk'),
(17, 'Video Kurs Matematyki - Algebra cz. 2', 17.77, '3h 6m 59s', '978-83-61899-64-8', 'polski', 'Arkadiusz Włodarczyk');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `videokursy`
--
ALTER TABLE `videokursy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `videokursy`
--
ALTER TABLE `videokursy`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
