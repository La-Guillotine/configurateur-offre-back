-- --------------------------------------------------------
-- Hôte :                        127.0.0.1
-- Version du serveur:           10.5.4-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Listage de la structure de la base pour configurateur
CREATE DATABASE IF NOT EXISTS `configurateur` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `configurateur`;

-- Listage de la structure de la table configurateur. option
CREATE TABLE IF NOT EXISTS `option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `price` decimal(5,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table configurateur. order
CREATE TABLE IF NOT EXISTS `order` (
  `shoppingcardId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `optionId` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`shoppingcardId`,`productId`,`optionId`),
  KEY `FK__product_order` (`productId`),
  KEY `FK__option_order` (`optionId`),
  CONSTRAINT `FK__option_order` FOREIGN KEY (`optionId`) REFERENCES `option` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__product_order` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__shoppingcard_order` FOREIGN KEY (`shoppingcardId`) REFERENCES `shoppingcard` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table configurateur. product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `description` text DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table configurateur. product_option
CREATE TABLE IF NOT EXISTS `product_option` (
  `productId` int(11) NOT NULL,
  `optionId` int(11) NOT NULL,
  PRIMARY KEY (`productId`,`optionId`),
  KEY `FK__option` (`optionId`),
  CONSTRAINT `FK__option` FOREIGN KEY (`optionId`) REFERENCES `option` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK__product` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de la table configurateur. shoppingcard
CREATE TABLE IF NOT EXISTS `shoppingcard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Les données exportées n'étaient pas sélectionnées.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
