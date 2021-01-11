-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2021 at 02:52 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `companydirectory`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `hod` text DEFAULT NULL,
  `locationID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `hod`, `locationID`) VALUES
(1, 'Human Resources', NULL, 1),
(2, 'Legal', NULL, 1),
(3, 'Services', NULL, 1),
(4, 'Sales', NULL, 2),
(5, 'Marketing', NULL, 2),
(6, 'Research and Development', NULL, 3),
(7, 'Product Management', NULL, 3),
(8, 'Business Development', NULL, 3),
(9, 'Training', NULL, 4),
(10, 'Support', NULL, 4),
(11, 'Engineering', NULL, 5),
(12, 'Accounting', NULL, 5);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `name`) VALUES
(1, 'London'),
(2, 'New York'),
(3, 'Paris'),
(4, 'Munich'),
(5, 'Rome');

-- --------------------------------------------------------

--
-- Table structure for table `personnel`
--

CREATE TABLE `personnel` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `jobTitle` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `departmentID` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `dob` text DEFAULT NULL,
  `address_1` text DEFAULT NULL,
  `address_2` text DEFAULT NULL,
  `post_code` text DEFAULT NULL,
  `city` text DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `hire_date` text DEFAULT NULL,
  `end_date` text DEFAULT NULL,
  `work_history` text DEFAULT NULL,
  `imgUrl` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `personnel`
--

INSERT INTO `personnel` (`id`, `firstName`, `lastName`, `jobTitle`, `email`, `departmentID`, `title`, `dob`, `address_1`, `address_2`, `post_code`, `city`, `phone`, `salary`, `hire_date`, `end_date`, `work_history`, `imgUrl`) VALUES
(1, 'Robert', 'Heffron', '', 'rheffron0@ibm.com', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Kris', 'Kovnot', '', 'kkovnot1@google.nl', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Vera', 'Kisbee', '', 'vkisbee2@nih.gov', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Aveline', 'Edgson', '', 'aedgson3@wikispaces.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Bertie', 'Wittke', '', 'bwittke4@yahoo.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Demetre', 'Cossam', '', 'dcossam5@washington.edu', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'Annabela', 'McGavigan', '', 'amcgavigan6@wp.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'Crichton', 'McAndrew', '', 'cmcandrew7@zdnet.com', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'Cordula', 'Plain', '', 'cplain8@google.ca', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'Glen', 'McDougle', '', 'gmcdougle9@meetup.com', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'Theo', 'Audas', '', 'taudasa@newsvine.com', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'Spense', 'Jolliss', '', 'sjollissb@wufoo.com', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'Leopold', 'Carl', '', 'lcarlc@paginegialle.it', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'Barr', 'MacAllan', '', 'bmacalland@github.com', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 'Suzie', 'Cromer', '', 'scromere@imageshack.us', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'Tracee', 'Gisbourn', '', 'tgisbournf@bloglines.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'Taylor', 'St. Quintin', '', 'tstquinting@chronoengine.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 'Lin', 'Klassmann', '', 'lklassmannh@indiatimes.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 'Lay', 'Fintoph', '', 'lfintophi@goo.gl', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 'Moishe', 'Flinn', '', 'mflinnj@list-manage.com', 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 'Gay', 'Bickford', '', 'gbickfordk@scientificamerican.com', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 'Erik', 'Lindback', '', 'elindbackl@virginia.edu', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 'Tamarra', 'Ace', '', 'tacem@vinaora.com', 1, 'mr', '21/07/2000', '', '', '', '', 0, 0, '', '', '', './images/'),
(24, 'Barbara-anne', 'Rooksby', '', 'brooksbyn@issuu.com', 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'Lucien', 'Allsup', '', 'lallsupo@goo.ne.jp', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, './images/'),
(26, 'Jackelyn', 'Imlach', '', 'jimlachp@google.it', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'Virge', 'Bootes', '', 'vbootesq@oracle.com', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 'Rafferty', 'Matasov', '', 'rmatasovr@4shared.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 'Vanya', 'Goulder', '', 'vgoulders@phoca.cz', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'Bonita', 'McGonagle', '', 'bmcgonaglet@microsoft.com', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'Allx', 'Whaley', '', 'awhaleyu@bbb.org', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(32, 'Mavis', 'Lernihan', '', 'mlernihanv@netscape.com', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(33, 'Vern', 'Durling', '', 'vdurlingw@goo.gl', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 'Myles', 'Minchi', '', 'mminchix@smugmug.com', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, 'Anitra', 'Coleridge', '', 'acoleridgey@nbcnews.com', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(36, 'Ailis', 'Brewster', '', 'abrewsterz@businesswire.com', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, 'Rahal', 'Tute', '', 'rtute10@pinterest.com', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(38, 'Warner', 'Blonden', '', 'wblonden11@spiegel.de', 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(39, 'Melvyn', 'Canner', '', 'mcanner12@eepurl.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(40, 'Ryann', 'Giampietro', '', 'rgiampietro13@theguardian.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(41, 'Harwell', 'Jefferys', '', 'hjefferys14@jimdo.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(42, 'Lanette', 'Buss', '', 'lbuss15@51.la', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 'Lissie', 'Reddington', '', 'lreddington16@w3.org', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, 'Dore', 'Braidford', '', 'dbraidford17@google.com.br', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(45, 'Lizabeth', 'Di Franceshci', '', 'ldifranceshci18@mediafire.com', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(46, 'Felic', 'Sharland', '', 'fsharland19@myspace.com', 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(47, 'Duff', 'Quail', '', 'dquail1a@vimeo.com', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 'Brendis', 'Shivell', '', 'bshivell1b@un.org', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(49, 'Nevile', 'Schimaschke', '', 'nschimaschke1c@hexun.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(50, 'Jon', 'Calbaithe', '', 'jcalbaithe1d@netvibes.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(51, 'Emmery', 'Darben', '', 'edarben1e@mapquest.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 'Staford', 'Whitesel', '', 'swhitesel1f@nasa.gov', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 'Benjamin', 'Hawkslee', '', 'bhawkslee1g@hubpages.com', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 'Myrle', 'Speer', '', 'mspeer1h@tripod.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(55, 'Matthus', 'Banfield', '', 'mbanfield1i@angelfire.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(56, 'Annadiana', 'Drance', '', 'adrance1j@omniture.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(57, 'Rinaldo', 'Fandrey', '', 'rfandrey1k@bbc.co.uk', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(58, 'Roanna', 'Standering', '', 'rstandering1l@cocolog-nifty.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(59, 'Lorrie', 'Fattorini', '', 'lfattorini1m@geocities.jp', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(60, 'Talbot', 'Andrassy', '', 'tandrassy1n@bigcartel.com', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, './images/'),
(61, 'Cindi', 'O\'Mannion', '', 'comannion1o@ameblo.jp', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 'Pancho', 'Mullineux', '', 'pmullineux1p@webmd.com', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 'Cynthy', 'Peyntue', '', 'cpeyntue1q@amazon.co.jp', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(64, 'Kristine', 'Christal', '', 'kchristal1r@behance.net', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(65, 'Dniren', 'Reboulet', '', 'dreboulet1s@360.cn', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(66, 'Aggy', 'Napier', '', 'anapier1t@sciencedirect.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(67, 'Gayleen', 'Hessay', '', 'ghessay1u@exblog.jp', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(68, 'Cull', 'Snoden', '', 'csnoden1v@so-net.ne.jp', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(69, 'Vlad', 'Crocombe', '', 'vcrocombe1w@mtv.com', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(70, 'Georgeanna', 'Joisce', '', 'gjoisce1x@google.com.au', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(71, 'Ursola', 'Berthomieu', '', 'uberthomieu1y@un.org', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(72, 'Mair', 'McKirdy', '', 'mmckirdy1z@ovh.net', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(73, 'Erma', 'Runnalls', '', 'erunnalls20@spiegel.de', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(74, 'Heida', 'Gallone', '', 'hgallone21@hostgator.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(75, 'Christina', 'Denge', '', 'cdenge22@canalblog.com', 12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(76, 'Wilone', 'Fredi', '', 'wfredi23@gizmodo.com', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(77, 'Stormie', 'Bolderstone', '', 'sbolderstone24@globo.com', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(78, 'Darryl', 'Pool', '', 'dpool25@vistaprint.com', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(79, 'Nikolas', 'Mager', '', 'nmager26@nifty.com', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(80, 'Brittney', 'Gaskal', '', 'bgaskal27@weather.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(81, 'Field', 'Gresty', '', 'fgresty28@networkadvertising.org', 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(82, 'Martina', 'Tremoulet', '', 'mtremoulet29@sciencedaily.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(83, 'Robena', 'Ivanyutin', '', 'rivanyutin2a@mozilla.org', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(84, 'Reagen', 'Corner', '', 'rcorner2b@qq.com', 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(85, 'Eveleen', 'Sulter', '', 'esulter2c@nature.com', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(86, 'Christy', 'Dunbobbin', '', 'cdunbobbin2d@feedburner.com', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(87, 'Winthrop', 'Lansley', '', 'wlansley2e@alibaba.com', 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(88, 'Lissa', 'Insley', '', 'linsley2f@friendfeed.com', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(89, 'Shell', 'Risebarer', '', 'srisebarer2g@patch.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(90, 'Cherianne', 'Liddyard', '', 'cliddyard2h@com.com', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(91, 'Brendan', 'Fooks', '', 'bfooks2i@utexas.edu', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(92, 'Edmund', 'Tace', '', 'etace2j@hatena.ne.jp', 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(93, 'Ki', 'Tomasini', '', 'ktomasini2k@cnbc.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(94, 'Chadd', 'McGettrick', '', 'cmcgettrick2l@simplemachines.org', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(95, 'Dulcie', 'Baudi', '', 'dbaudi2m@last.fm', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(96, 'Barnebas', 'Mowbray', '', 'bmowbray2n@cbslocal.com', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(97, 'Stefanie', 'Anker', '', 'sanker2o@hud.gov', 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(98, 'Cherye', 'de Cullip', '', 'cdecullip2p@loc.gov', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(99, 'Sinclare', 'Deverall', '', 'sdeverall2q@ow.ly', 6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(100, 'Shae', 'Johncey', '', 'sjohncey2r@bluehost.com', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(141, 'czeh', 'mich', '', 'czehug@gmail.com', 1, 'mr', '21/07/1988', '', '', '', '', 0, 0, '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personnel`
--
ALTER TABLE `personnel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personnel`
--
ALTER TABLE `personnel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
