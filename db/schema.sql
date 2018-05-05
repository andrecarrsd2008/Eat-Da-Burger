DROP DATABASE if exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table actors.
CREATE TABLE burgers (
id int AUTO_INCREMENT not null,
burger_name VARCHAR (50) NOT NULL,
DEVOURED BOOLEAN,
PRIMARY key (id)
);