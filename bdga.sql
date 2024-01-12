CREATE DATABASE  IF NOT EXISTS `inventario` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inventario`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: inventario
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `caracteristicas`
--

DROP TABLE IF EXISTS `caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristicas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` tinyint(1) NOT NULL,
  `pulgadas` float DEFAULT NULL,
  `procesador` varchar(50) DEFAULT NULL,
  `modelo_procesador` varchar(20) DEFAULT NULL,
  `ram` varchar(20) DEFAULT NULL,
  `tipo_ram` varchar(20) DEFAULT NULL,
  `tipo_disco` char(3) DEFAULT NULL,
  `capacidad_disco` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
INSERT INTO `caracteristicas` VALUES (1,1,NULL,'Intel Core','I7','16GB','DDR4','SSD','512GB');
/*!40000 ALTER TABLE `caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipo`
--

DROP TABLE IF EXISTS `equipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `activo` int DEFAULT NULL,
  `f_adquisicion` date DEFAULT NULL,
  `depreciacion` varchar(50) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `serie` varchar(50) DEFAULT NULL,
  `ct_cargador` varchar(100) DEFAULT NULL,
  `etiqueta` varchar(50) DEFAULT NULL,
  `caracteristicas` int DEFAULT NULL,
  `operatividad` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `ubicacion` int DEFAULT NULL,
  `est_garantia` varchar(50) DEFAULT NULL,
  `pago_mensual` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ubicacion` (`ubicacion`),
  KEY `caracteristicas` (`caracteristicas`),
  CONSTRAINT `equipo_ibfk_1` FOREIGN KEY (`ubicacion`) REFERENCES `ubicacion` (`id`),
  CONSTRAINT `equipo_ibfk_2` FOREIGN KEY (`caracteristicas`) REFERENCES `caracteristicas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipo`
--

LOCK TABLES `equipo` WRITE;
/*!40000 ALTER TABLE `equipo` DISABLE KEYS */;
INSERT INTO `equipo` VALUES (1,73228,'2020-05-28','En Depreciacion','NOTEBOOK','LENOVO','THINKPAD L490','PF1X00QS','8SSA10R16867L1CZ1794XPZ','261348',1,'NO OPERATIVO','A DAR DE BAJA',1,'SIN DATOS',92.63),(2,71026,'2019-10-31','Totalmente Depreciado','DESKTOP','HP','PRODESK 600 G4 MINI','8CC9351BH9','WFZJU0EARA83DU','260200',1,'OPERATIVO','STOCK DISPONIBLE',2,'SIN DATOS',0),(3,72934,'2020-05-28','En Depreciacion','NOTEBOOK','LENOVO','THINKPAD L490','PF1WZ90J','8SSA10R16865D1SG06ROLV4','261018',1,'NO OPERATIVO','A DAR DE BAJA',3,'SIN DATOS',99.32);
/*!40000 ALTER TABLE `equipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(100) NOT NULL,
  `contraseña` varchar(15) NOT NULL,
  `superuser` tinyint(1) DEFAULT NULL,
  `nombres` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'rchacon@canvia.com','123456',1,'renzo chacon');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimiento`
--

DROP TABLE IF EXISTS `movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimiento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `usuario` int DEFAULT NULL,
  `ticket` varchar(100) DEFAULT NULL,
  `motivo` varchar(100) DEFAULT NULL,
  `observacion` text,
  `inconveniente` text,
  `accesorio` text,
  `activo` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario` (`usuario`),
  KEY `activo` (`activo`),
  CONSTRAINT `movimiento_ibfk_1` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `movimiento_ibfk_2` FOREIGN KEY (`activo`) REFERENCES `equipo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimiento`
--

LOCK TABLES `movimiento` WRITE;
/*!40000 ALTER TABLE `movimiento` DISABLE KEYS */;
INSERT INTO `movimiento` VALUES (1,'Ingreso','2022-10-13',1,'RITM0479687','DEVOLUCION','-','CARCASA ROTA','-',1),(2,'Ingreso','2023-06-16',3,'RITM0426940','ASIGNACION','-','-','TECLADO Y MOUSE',2),(3,'Salida','2022-04-07',2,'RITM0564821','DEVOLUCION','CABLE DE PODER DEL CARGADOR MORDIDO','-','TECLADO Y MOUSE',2),(4,'Salida','2023-06-14',4,'RITM0562820','DEVOLUCION','-','REMPLAZO CABLE DE PODER + PATA DEL TECLADO ROTA + PARPADEO CONSTANTE EN LA PANTALLA','TECLADO + MOUSE + MOCHILA',3);
/*!40000 ALTER TABLE `movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ubicacion`
--

DROP TABLE IF EXISTS `ubicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ubicacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empresa` varchar(50) NOT NULL,
  `sede` varchar(50) NOT NULL,
  `almacen` varchar(100) DEFAULT NULL,
  `sub_area` varchar(100) NOT NULL,
  `posicion` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubicacion`
--

LOCK TABLES `ubicacion` WRITE;
/*!40000 ALTER TABLE `ubicacion` DISABLE KEYS */;
INSERT INTO `ubicacion` VALUES (1,'CANVIA','CHOTA','1','ZONA DEVOLUCION',8),(2,'CANVIA','CHOTA','1','ZONA DEVOLUCION',0),(3,'CANVIA','CHOTA','1','ZONA DEVOLUCION',3);
/*!40000 ALTER TABLE `ubicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` char(11) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `cod_proyecto` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'D44727995','BENITES CHUMPITAZ, VICTOR ERNESTO','101575'),(2,'D10309946','SALVATIERRA PACHAS, ALEXANDER','101575'),(3,'---------','sunat','101575'),(4,'D70905798','CASTILLA QUISPE, RONNY ALEXANDER','101576'),(5,'D00000001','prueba1','101575'),(6,'D00000001','prueba2','101575'),(7,'D00000001','prueba3','101575');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vista_equipo`
--

DROP TABLE IF EXISTS `vista_equipo`;
/*!50001 DROP VIEW IF EXISTS `vista_equipo`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vista_equipo` AS SELECT 
 1 AS `CODIGO`,
 1 AS `ACTIVO`,
 1 AS `fechaAdquisicion`,
 1 AS `DEPRECIACION`,
 1 AS `empresa`,
 1 AS `tipo`,
 1 AS `marca`,
 1 AS `modelo`,
 1 AS `serie`,
 1 AS `ct_cargador`,
 1 AS `etiqueta`,
 1 AS `caracteristicas_tipo`,
 1 AS `pulgadas`,
 1 AS `procesador`,
 1 AS `modelo_procesador`,
 1 AS `ram`,
 1 AS `tipo_ram`,
 1 AS `tipo_disco`,
 1 AS `capacidad_disco`,
 1 AS `sede`,
 1 AS `sub_area`,
 1 AS `almacen`,
 1 AS `posicion`,
 1 AS `estado`,
 1 AS `operatividad`,
 1 AS `fecha_ingreso`,
 1 AS `fecha_salida`,
 1 AS `usuario_anterior`,
 1 AS `usuario_asignado`,
 1 AS `ticket_anterior`,
 1 AS `ticket`,
 1 AS `proyecto`,
 1 AS `motivo_salida_ingreso`,
 1 AS `est_garantia`,
 1 AS `observacion`,
 1 AS `accesorio`,
 1 AS `inconveniente`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vista_equipo`
--

/*!50001 DROP VIEW IF EXISTS `vista_equipo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vista_equipo` AS select `e`.`id` AS `CODIGO`,`e`.`activo` AS `ACTIVO`,`e`.`f_adquisicion` AS `fechaAdquisicion`,`e`.`depreciacion` AS `DEPRECIACION`,`e`.`empresa` AS `empresa`,`e`.`tipo` AS `tipo`,`e`.`marca` AS `marca`,`e`.`modelo` AS `modelo`,`e`.`serie` AS `serie`,`e`.`ct_cargador` AS `ct_cargador`,`e`.`etiqueta` AS `etiqueta`,`e`.`caracteristicas_tipo` AS `caracteristicas_tipo`,`e`.`pulgadas` AS `pulgadas`,`e`.`procesador` AS `procesador`,`e`.`modelo_procesador` AS `modelo_procesador`,`e`.`ram` AS `ram`,`e`.`tipo_ram` AS `tipo_ram`,`e`.`tipo_disco` AS `tipo_disco`,`e`.`capacidad_disco` AS `capacidad_disco`,`e`.`sede` AS `sede`,`e`.`sub_area` AS `sub_area`,`e`.`almacen` AS `almacen`,`e`.`posicion` AS `posicion`,`e`.`estado` AS `estado`,`e`.`operatividad` AS `operatividad`,`e`.`fecha_ingreso` AS `fecha_ingreso`,`e`.`fecha_salida` AS `fecha_salida`,`e`.`usuario_anterior` AS `usuario_anterior`,`e`.`usuario_asignado` AS `usuario_asignado`,`e`.`ticket_anterior` AS `ticket_anterior`,`e`.`ticket` AS `ticket`,`e`.`proyecto` AS `proyecto`,`e`.`motivo_salida_ingreso` AS `motivo_salida_ingreso`,`e`.`est_garantia` AS `est_garantia`,`e`.`observacion` AS `observacion`,`e`.`accesorio` AS `accesorio`,`e`.`inconveniente` AS `inconveniente` from (select `eq`.`id` AS `id`,`eq`.`activo` AS `activo`,`eq`.`f_adquisicion` AS `f_adquisicion`,`eq`.`depreciacion` AS `depreciacion`,`eq`.`tipo` AS `tipo`,`eq`.`marca` AS `marca`,`eq`.`modelo` AS `modelo`,`eq`.`serie` AS `serie`,`eq`.`ct_cargador` AS `ct_cargador`,`eq`.`etiqueta` AS `etiqueta`,`c`.`tipo` AS `caracteristicas_tipo`,`c`.`pulgadas` AS `pulgadas`,`c`.`procesador` AS `procesador`,`c`.`modelo_procesador` AS `modelo_procesador`,`c`.`ram` AS `ram`,`c`.`tipo_ram` AS `tipo_ram`,`c`.`tipo_disco` AS `tipo_disco`,`c`.`capacidad_disco` AS `capacidad_disco`,`ub`.`empresa` AS `empresa`,`ub`.`sede` AS `sede`,`ub`.`sub_area` AS `sub_area`,`ub`.`almacen` AS `almacen`,`ub`.`posicion` AS `posicion`,`eq`.`estado` AS `estado`,`eq`.`operatividad` AS `operatividad`,`mov`.`fecha` AS `fecha_ingreso`,(select `movimiento`.`fecha` from `movimiento` where ((`movimiento`.`activo` = `eq`.`id`) and (`movimiento`.`tipo` = 'Salida')) order by `movimiento`.`fecha` desc limit 1) AS `fecha_salida`,(select group_concat(`u`.`nombres` separator '/') from (`movimiento` `m` join `usuario` `u` on((`m`.`usuario` = `u`.`id`))) where (`m`.`activo` = `eq`.`id`)) AS `usuario_anterior`,(select `u`.`nombres` from (`movimiento` `m` join `usuario` `u` on((`m`.`usuario` = `u`.`id`))) where (`m`.`activo` = `eq`.`id`) order by `m`.`fecha` limit 1) AS `usuario_asignado`,(select group_concat(`m`.`ticket` separator '/') from `movimiento` `m` where (`m`.`activo` = `eq`.`id`) limit 1) AS `ticket_anterior`,(select `m`.`ticket` from `movimiento` `m` where (`m`.`activo` = `eq`.`id`) order by `m`.`fecha` desc limit 1) AS `ticket`,(select `usr`.`cod_proyecto` from (`usuario` `usr` join `movimiento` `m` on((`usr`.`id` = `m`.`usuario`))) limit 1) AS `proyecto`,(select `m`.`motivo` from `movimiento` `m` where (`m`.`activo` = `eq`.`id`) order by `m`.`fecha` limit 1) AS `motivo_salida_ingreso`,(select `e`.`est_garantia` from `equipo` `e` where (`e`.`activo` = `eq`.`activo`) limit 1) AS `est_garantia`,(select `m`.`observacion` from `movimiento` `m` where (`m`.`activo` = `eq`.`id`) order by `m`.`fecha` desc limit 1) AS `observacion`,(select `m`.`accesorio` from `movimiento` `m` where (`m`.`activo` = `eq`.`id`) order by `m`.`fecha` desc limit 1) AS `accesorio`,(select `m`.`inconveniente` from `movimiento` `m` where (`m`.`activo` = `eq`.`id`) order by `m`.`fecha` desc limit 1) AS `inconveniente` from ((((`equipo` `eq` left join `ubicacion` `ub` on((`eq`.`ubicacion` = `ub`.`id`))) left join `movimiento` `mov` on(((`mov`.`activo` = `eq`.`id`) and (`mov`.`tipo` = 'Ingreso')))) left join `usuario` `usr` on((`mov`.`usuario` = `usr`.`id`))) left join `caracteristicas` `c` on((`eq`.`caracteristicas` = `c`.`id`)))) `e` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-11 21:34:38
