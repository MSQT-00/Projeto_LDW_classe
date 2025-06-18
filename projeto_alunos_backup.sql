-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: localhost    Database: projeto_alunos
-- ------------------------------------------------------
-- Server version	8.0.42-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Aluno`
--

DROP TABLE IF EXISTS `Aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Aluno` (
  `id_aluno` int NOT NULL AUTO_INCREMENT,
  `ra` varchar(200) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `instituicao` varchar(100) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `contato` varchar(20) DEFAULT NULL,
  `curso` varchar(100) DEFAULT NULL,
  `nivel` varchar(100) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  PRIMARY KEY (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Aluno`
--

LOCK TABLES `Aluno` WRITE;
/*!40000 ALTER TABLE `Aluno` DISABLE KEYS */;
/*!40000 ALTER TABLE `Aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Aluno_Disciplina`
--

DROP TABLE IF EXISTS `Aluno_Disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Aluno_Disciplina` (
  `id_alunodisc` int NOT NULL AUTO_INCREMENT,
  `id_aluno` int DEFAULT NULL,
  `id_disciplina` int DEFAULT NULL,
  PRIMARY KEY (`id_alunodisc`),
  KEY `id_aluno` (`id_aluno`),
  KEY `id_disciplina` (`id_disciplina`),
  CONSTRAINT `Aluno_Disciplina_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `Aluno` (`id_aluno`),
  CONSTRAINT `Aluno_Disciplina_ibfk_2` FOREIGN KEY (`id_disciplina`) REFERENCES `Disciplina` (`id_disciplina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Aluno_Disciplina`
--

LOCK TABLES `Aluno_Disciplina` WRITE;
/*!40000 ALTER TABLE `Aluno_Disciplina` DISABLE KEYS */;
/*!40000 ALTER TABLE `Aluno_Disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Anotacao`
--

DROP TABLE IF EXISTS `Anotacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Anotacao` (
  `id_anotacao` int NOT NULL AUTO_INCREMENT,
  `id_aluno` int DEFAULT NULL,
  `data_anotacao` date DEFAULT NULL,
  `anotacao` varchar(155) DEFAULT NULL,
  PRIMARY KEY (`id_anotacao`),
  KEY `id_aluno` (`id_aluno`),
  CONSTRAINT `Anotacao_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `Aluno` (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Anotacao`
--

LOCK TABLES `Anotacao` WRITE;
/*!40000 ALTER TABLE `Anotacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `Anotacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Aula`
--

DROP TABLE IF EXISTS `Aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Aula` (
  `id_aula` int NOT NULL AUTO_INCREMENT,
  `numero_aula` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_aula`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Aula`
--

LOCK TABLES `Aula` WRITE;
/*!40000 ALTER TABLE `Aula` DISABLE KEYS */;
INSERT INTO `Aula` VALUES (1,'1ª Aula'),(2,'2ª Aula'),(3,'3ª Aula'),(4,'4ª Aula');
/*!40000 ALTER TABLE `Aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Calendario`
--

DROP TABLE IF EXISTS `Calendario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Calendario` (
  `id_calendario` int NOT NULL AUTO_INCREMENT,
  `id_status` int DEFAULT NULL,
  `id_aluno` int DEFAULT NULL,
  `datas` date DEFAULT NULL,
  PRIMARY KEY (`id_calendario`),
  KEY `id_status` (`id_status`),
  KEY `id_aluno` (`id_aluno`),
  CONSTRAINT `Calendario_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `StatusDia` (`id_status`),
  CONSTRAINT `Calendario_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `Aluno` (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Calendario`
--

LOCK TABLES `Calendario` WRITE;
/*!40000 ALTER TABLE `Calendario` DISABLE KEYS */;
/*!40000 ALTER TABLE `Calendario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Colega`
--

DROP TABLE IF EXISTS `Colega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Colega` (
  `id_colega` int NOT NULL AUTO_INCREMENT,
  `id_aluno` int DEFAULT NULL,
  PRIMARY KEY (`id_colega`),
  KEY `id_aluno` (`id_aluno`),
  CONSTRAINT `Colega_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `Aluno` (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Colega`
--

LOCK TABLES `Colega` WRITE;
/*!40000 ALTER TABLE `Colega` DISABLE KEYS */;
/*!40000 ALTER TABLE `Colega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Dia`
--

DROP TABLE IF EXISTS `Dia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dia` (
  `id_dia` int NOT NULL AUTO_INCREMENT,
  `dia_semana` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_dia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dia`
--

LOCK TABLES `Dia` WRITE;
/*!40000 ALTER TABLE `Dia` DISABLE KEYS */;
INSERT INTO `Dia` VALUES (1,'Segunda-feira'),(2,'Terça-feira'),(3,'Quarta-feira'),(4,'Quinta-feira'),(5,'Sexta-feira');
/*!40000 ALTER TABLE `Dia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Disciplina`
--

DROP TABLE IF EXISTS `Disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Disciplina` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `id_professor` int DEFAULT NULL,
  `nome_disciplina` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_disciplina`),
  KEY `id_professor` (`id_professor`),
  CONSTRAINT `Disciplina_ibfk_1` FOREIGN KEY (`id_professor`) REFERENCES `Professor` (`id_professor`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Disciplina`
--

LOCK TABLES `Disciplina` WRITE;
/*!40000 ALTER TABLE `Disciplina` DISABLE KEYS */;
INSERT INTO `Disciplina` VALUES (1,1,'Cálculo I'),(2,1,'Cálculo II'),(3,1,'Álgebra Linear'),(4,1,'Equações Diferenciais'),(5,1,'Geometria Analítica'),(6,2,'Introdução à Literatura'),(7,2,'Literatura Brasileira'),(8,2,'Crítica Literária'),(9,2,'Teoria da Comunicação'),(10,3,'História Contemporânea'),(11,3,'História da América Latina'),(12,3,'História do Brasil'),(13,3,'História da Filosofia'),(14,4,'Geopolítica Mundial'),(15,4,'Sociologia'),(16,4,'Antropologia Cultural'),(17,4,'Ciência Política'),(18,1,'Cálculo Numérico'),(19,1,'Matemática Discreta'),(20,2,'Linguística'),(21,2,'Redação Acadêmica'),(22,3,'Filosofia'),(23,3,'Psicologia Social'),(24,4,'Direito Constitucional'),(25,4,'Economia'),(26,1,'Análise Matemática'),(27,1,'Probabilidade e Estatística'),(28,1,'Topologia'),(29,2,'Semântica'),(30,2,'Gramática Avançada'),(31,3,'Ética'),(32,3,'Lógica'),(33,4,'Administração Pública'),(34,4,'Marketing'),(35,4,'Gestão de Projetos');
/*!40000 ALTER TABLE `Disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Frequencia`
--

DROP TABLE IF EXISTS `Frequencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Frequencia` (
  `id_frequencia` int NOT NULL AUTO_INCREMENT,
  `frequencia` int DEFAULT NULL,
  `dataF` date DEFAULT NULL,
  `id_alunodisc` int DEFAULT NULL,
  PRIMARY KEY (`id_frequencia`),
  KEY `id_alunodisc` (`id_alunodisc`),
  CONSTRAINT `Frequencia_ibfk_1` FOREIGN KEY (`id_alunodisc`) REFERENCES `Aluno_Disciplina` (`id_alunodisc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Frequencia`
--

LOCK TABLES `Frequencia` WRITE;
/*!40000 ALTER TABLE `Frequencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `Frequencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Horario`
--

DROP TABLE IF EXISTS `Horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Horario` (
  `id_horario` int NOT NULL AUTO_INCREMENT,
  `id_alunodisc` int DEFAULT NULL,
  `id_dia` int DEFAULT NULL,
  `id_aula` int DEFAULT NULL,
  PRIMARY KEY (`id_horario`),
  KEY `id_alunodisc` (`id_alunodisc`),
  KEY `id_dia` (`id_dia`),
  KEY `id_aula` (`id_aula`),
  CONSTRAINT `Horario_ibfk_1` FOREIGN KEY (`id_alunodisc`) REFERENCES `Aluno_Disciplina` (`id_alunodisc`),
  CONSTRAINT `Horario_ibfk_2` FOREIGN KEY (`id_dia`) REFERENCES `Dia` (`id_dia`),
  CONSTRAINT `Horario_ibfk_3` FOREIGN KEY (`id_aula`) REFERENCES `Aula` (`id_aula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Horario`
--

LOCK TABLES `Horario` WRITE;
/*!40000 ALTER TABLE `Horario` DISABLE KEYS */;
/*!40000 ALTER TABLE `Horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Nota`
--

DROP TABLE IF EXISTS `Nota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Nota` (
  `id_nota` int NOT NULL AUTO_INCREMENT,
  `nota` int DEFAULT NULL,
  `id_alunodisc` int DEFAULT NULL,
  PRIMARY KEY (`id_nota`),
  KEY `id_alunodisc` (`id_alunodisc`),
  CONSTRAINT `Nota_ibfk_1` FOREIGN KEY (`id_alunodisc`) REFERENCES `Aluno_Disciplina` (`id_alunodisc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Nota`
--

LOCK TABLES `Nota` WRITE;
/*!40000 ALTER TABLE `Nota` DISABLE KEYS */;
/*!40000 ALTER TABLE `Nota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Professor`
--

DROP TABLE IF EXISTS `Professor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Professor` (
  `id_professor` int NOT NULL AUTO_INCREMENT,
  `nome_professor` varchar(100) DEFAULT NULL,
  `email_professor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_professor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Professor`
--

LOCK TABLES `Professor` WRITE;
/*!40000 ALTER TABLE `Professor` DISABLE KEYS */;
INSERT INTO `Professor` VALUES (1,'Carlos Souza','carlos.souza@escola.com'),(2,'Fernanda Lima','fernanda.lima@escola.com'),(3,'João Oliveira','joao.oliveira@escola.com'),(4,'Mariana Castro','mariana.castro@escola.com');
/*!40000 ALTER TABLE `Professor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StatusDia`
--

DROP TABLE IF EXISTS `StatusDia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StatusDia` (
  `id_status` int NOT NULL AUTO_INCREMENT,
  `status_dia` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_status`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StatusDia`
--

LOCK TABLES `StatusDia` WRITE;
/*!40000 ALTER TABLE `StatusDia` DISABLE KEYS */;
INSERT INTO `StatusDia` VALUES (6,'Letivo'),(7,'Não letivo'),(8,'Falta');
/*!40000 ALTER TABLE `StatusDia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-16  3:45:44
