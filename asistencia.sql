-- MariaDB dump 10.19  Distrib 10.10.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: asistencia
-- ------------------------------------------------------
-- Server version	10.10.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alumnos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellido` varchar(255) NOT NULL,
  `NumControl` int(8) NOT NULL,
  `Materia` varchar(10) DEFAULT NULL,
  `Aula` int(5) NOT NULL,
  `Asistencia` char(1) DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES
(1,'Dany','Ramon',19350298,'Backend',10,'S','S','2013-12-22 06:00:00','2022-12-14 00:46:32'),
(2,'Yasmin','Cardoza',19350297,'Backend',10,'S','S','2013-12-22 06:00:00','2022-12-14 00:53:43'),
(3,'Jair','Perez',19350299,'Backend',11,'N','S','2022-12-14 17:36:59','2022-12-14 17:36:59'),
(4,'Amanda','Cardoza ',1935069,'Backend',7,'S','S','2022-12-14 20:29:19','2022-12-14 20:29:19'),
(5,'Lucia','Cardoza ',1935069,'fisica',7,'N','S','2022-12-15 02:10:19','2022-12-15 02:10:19'),
(6,'Sandra','Cardoza ',1935069,'fisica',7,'N','S','2022-12-15 02:19:28','2022-12-15 02:19:28');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docentes`
--

DROP TABLE IF EXISTS `docentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `docentes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellido` varchar(255) NOT NULL,
  `Matricula` int(10) NOT NULL,
  `Aula` int(5) DEFAULT NULL,
  `Asistencia` char(1) DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docentes`
--

LOCK TABLES `docentes` WRITE;
/*!40000 ALTER TABLE `docentes` DISABLE KEYS */;
INSERT INTO `docentes` VALUES
(1,'Jorge','Hernandez',123456789,4,'S','N','2013-12-22 06:00:00','2022-12-15 01:30:37'),
(2,'Jesus','Niño',19350264,10,'S','S','2014-12-22 06:00:00','2022-12-15 00:32:52'),
(3,'Maria','Angeles',183502697,7,'S','N','2014-12-22 06:00:00','2022-12-15 03:19:46'),
(4,'Angel','Santillan',19350283,6,'S','N','2014-12-22 06:00:00','2022-12-15 01:32:16'),
(5,'Ana','lopez ',19350232,9,'S','S','2022-12-15 02:22:32','2022-12-15 02:22:32');
/*!40000 ALTER TABLE `docentes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 22:40:58
