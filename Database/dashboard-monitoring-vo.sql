/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 5.7.25-google : Database - dashboard
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dashboard` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `dashboard`;

/*Table structure for table `monitoring_vo` */

DROP TABLE IF EXISTS `monitoring_vo`;

CREATE TABLE `monitoring_vo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `project_code` varchar(10) NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `contract_type` varchar(30) NOT NULL,
  `so_number` varchar(15) DEFAULT NULL,
  `amount_main_contract` bigint(20) DEFAULT '0',
  `bill_main_contract` bigint(20) DEFAULT '0',
  `percent_contract_payment` decimal(10,2) DEFAULT '0.00',
  `percent_work_progress` decimal(10,2) DEFAULT '0.00',
  `amount_contract_vo` bigint(20) DEFAULT '0',
  `bill_vo` bigint(20) DEFAULT '0',
  `percent_vo_payment` decimal(10,2) DEFAULT '0.00',
  `percent_vo_progress_work` decimal(10,2) DEFAULT '0.00',
  `total_contract` bigint(20) DEFAULT '0',
  `total_billing` bigint(20) DEFAULT '0',
  `percent_total_payment` decimal(10,2) DEFAULT '0.00',
  `potential_vo` bigint(20) DEFAULT '0',
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`project_code`,`so_number`,`contract_type`),
  KEY `KEY` (`project_code`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `monitoring_vo` */

insert  into `monitoring_vo`(`id`,`project_code`,`project_name`,`contract_type`,`so_number`,`amount_main_contract`,`bill_main_contract`,`percent_contract_payment`,`percent_work_progress`,`amount_contract_vo`,`bill_vo`,`percent_vo_payment`,`percent_vo_progress_work`,`total_contract`,`total_billing`,`percent_total_payment`,`potential_vo`,`created_date`) values 
(8,'F-1902','ACSET PONDASI INDONUSA','Kontrak Utama','3200000084',3241162198,324116220,10.00,14.50,0,0,0.00,0.00,48283162198,31648116220,65.55,0,'2020-08-03 14:29:01'),
(9,'F-1902','ACSET PONDASI INDONUSA','Kontrak Utama','3200000089',20000000000,6320000000,31.60,10.80,0,0,0.00,0.00,48283162198,31648116220,65.55,0,'2020-08-03 14:29:01'),
(10,'F-1902','ACSET PONDASI INDONUSA','Kontrak Utama','3200000090',25000000000,25000000000,100.00,100.00,0,0,0.00,0.00,48283162198,31648116220,65.55,0,'2020-08-03 14:29:01'),
(11,'F-1902','ACSET PONDASI INDONUSA','VO+','5200000012',0,0,0.00,0.00,42000000,4000000,9.52,0.00,48283162198,31648116220,65.55,0,'2020-08-03 14:29:01'),
(12,'K-1802','KSO - Arumaya','Kontrak Utama','3200000131',50000000000,6170000000,12.34,3.00,0,0,0.00,0.00,54977000000,11670000000,21.23,0,'2020-08-03 14:29:01'),
(13,'K-1802','KSO - Arumaya','VO-','3200000131',0,0,0.00,0.00,-23000000,0,0.00,0.00,54977000000,11670000000,21.23,0,'2020-08-03 14:29:01'),
(14,'K-1802','KSO - Arumaya','VO+','5200000023',0,0,0.00,0.00,5000000000,5500000000,110.00,0.00,54977000000,11670000000,21.23,0,'2020-08-03 14:29:01');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
