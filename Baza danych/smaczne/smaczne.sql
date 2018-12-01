SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `smacznepl` DEFAULT CHARACTER SET utf8 COLLATE utf8_polish_ci;
USE `smacznepl`;

--
-- Baza danych - smacznepl
--

CREATE TABLE IF NOT EXISTS `uzytkownicy` (
`iduser` int(11) NOT NULL AUTO_INCREMENT,
`login` text COLLATE utf8_polish_ci NOT NULL,
`haslo` text COLLATE utf8_polish_ci NOT NULL,
`adres` text COLLATE utf8_polish_ci NOT NULL,
`nrtel` text COLLATE utf8_polish_ci NOT NULL,
PRIMARY KEY(`iduser`),
KEY `id` (`iduser`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE utf8_polish_ci AUTO_INCREMENT=11;


--
-- Struktura tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`iduser`, `login`, `haslo`, `adres`, `nrtel`) VALUES
(1, "Kalso", "Pies1", "Konopnickiej", "726000000"),
(2, "Darnoke", "Pies2", "Długa", "123123123"),
(3, "Rejwel", "Pies3", "Trauguta/Czwartaków", "567567567");

--
-- 
--