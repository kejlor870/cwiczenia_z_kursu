-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Lip 2025, 20:48
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
-- Baza danych: `test`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wiadomosci`
--

CREATE TABLE `wiadomosci` (
  `id` int(11) NOT NULL,
  `nick` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `tresc` text COLLATE utf8_polish_ci NOT NULL,
  `czas` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `wiadomosci`
--

INSERT INTO `wiadomosci` (`id`, `nick`, `tresc`, `czas`) VALUES
(1, 'Sigma', 'Czesc co tam slychac', 1752599881),
(2, 'Gosza', 'Dobrze, a co u ciebie', 1752599889);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wojewodztwa`
--

CREATE TABLE `wojewodztwa` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `nazwa` varchar(30) COLLATE utf8_polish_ci NOT NULL,
  `powierzchnia` double NOT NULL,
  `ludnosc` mediumint(8) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `wojewodztwa`
--

INSERT INTO `wojewodztwa` (`id`, `nazwa`, `powierzchnia`, `ludnosc`) VALUES
(1, 'dolnośląskie', 19946.77, 2878410),
(2, 'kujawsko-pomorskie', 17971.69, 2066136),
(3, 'lubelskie', 25122.5, 2166213),
(4, 'lubuskie', 13987.88, 1008481),
(5, 'łódzkie', 18218.96, 2555898),
(6, 'małopolskie', 15182.79, 3279036),
(7, 'mazowieckie', 35558.14, 5188488),
(8, 'opolskie', 9411.67, 1037088),
(9, 'podkarpackie', 17845.73, 2097338),
(10, 'podlaskie', 20187.01, 1192660),
(11, 'pomorskie', 18310.22, 2210920),
(12, 'śląskie', 12333.51, 4654115),
(13, 'świętokrzyskie', 11710.2, 1275550),
(14, 'warmińsko-mazurskie', 24173.35, 1426155),
(15, 'wielkopolskie', 29826.51, 3386882),
(16, 'zachodniopomorskie', 22892.48, 1692271);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `wiadomosci`
--
ALTER TABLE `wiadomosci`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `wojewodztwa`
--
ALTER TABLE `wojewodztwa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `wiadomosci`
--
ALTER TABLE `wiadomosci`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `wojewodztwa`
--
ALTER TABLE `wojewodztwa`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
