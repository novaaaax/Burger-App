DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

Drop TABLE IF EXISTS burgers;
CREATE TABLE burgers(
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(80) NOT NULL ,
	devoured BOOLEAN DEFAULT false
);
