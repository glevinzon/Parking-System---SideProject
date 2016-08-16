-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 01, 2016 at 06:41 AM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_park`
--

-- --------------------------------------------------------

--
-- Table structure for table `park_log`
--

CREATE TABLE IF NOT EXISTS `park_log` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `floor` int(11) DEFAULT NULL,
  `park_no` int(11) DEFAULT NULL,
  `rfid_cardno` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=84 ;

--
-- Dumping data for table `park_log`
--

INSERT INTO `park_log` (`entry_id`, `floor`, `park_no`, `rfid_cardno`, `status`) VALUES
(19, 1, 1, NULL, 10),
(20, 1, 2, NULL, 10),
(21, 1, 3, NULL, 10),
(22, 1, 4, NULL, 10),
(23, 1, 5, NULL, 10),
(24, 1, 6, NULL, 10),
(25, 1, 7, NULL, 10),
(26, 1, 8, NULL, 10),
(27, 1, 9, NULL, 10),
(28, 1, 10, NULL, 10),
(29, 1, 11, NULL, 10),
(30, 1, 12, NULL, 10),
(31, 1, 13, NULL, 10),
(32, 1, 14, NULL, 10),
(33, 1, 15, NULL, 10),
(34, 1, 16, NULL, 10),
(35, 1, 17, NULL, 10),
(36, 1, 18, NULL, 10),
(37, 1, 19, NULL, 10),
(38, 1, 20, NULL, 10),
(39, 1, 21, NULL, 10),
(40, 1, 22, NULL, 10),
(41, 1, 23, NULL, 10),
(42, 1, 24, NULL, 10),
(43, 2, 1, NULL, 10),
(44, 2, 2, NULL, 10),
(45, 2, 3, NULL, 10),
(46, 2, 4, NULL, 10),
(47, 2, 5, NULL, 10),
(48, 2, 6, NULL, 10),
(49, 2, 7, NULL, 10),
(50, 2, 8, NULL, 10),
(51, 2, 9, NULL, 10),
(52, 2, 10, NULL, 10),
(53, 2, 11, NULL, 10),
(54, 2, 12, NULL, 10),
(55, 2, 13, NULL, 10),
(56, 2, 14, NULL, 10),
(57, 2, 15, NULL, 10),
(58, 2, 16, NULL, 10),
(59, 2, 17, NULL, 10),
(60, 2, 18, NULL, 10),
(61, 2, 19, NULL, 10),
(62, 2, 20, NULL, 10),
(63, 2, 21, NULL, 10),
(64, 2, 22, NULL, 10),
(65, 2, 23, NULL, 10),
(66, 2, 24, NULL, 10),
(67, 2, 25, NULL, 10),
(68, 2, 26, NULL, 10),
(69, 2, 27, NULL, 10),
(70, 2, 28, NULL, 10),
(71, 2, 29, NULL, 10),
(72, 2, 30, NULL, 10),
(73, 2, 31, NULL, 10),
(74, 2, 32, NULL, 10),
(75, 2, 33, NULL, 10),
(76, 2, 34, NULL, 10),
(77, 2, 35, NULL, 10),
(78, 2, 36, NULL, 10),
(79, 2, 37, NULL, 10),
(80, 2, 38, NULL, 10),
(81, 2, 39, NULL, 10),
(82, 2, 40, NULL, 10),
(83, 2, 41, NULL, 10);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
