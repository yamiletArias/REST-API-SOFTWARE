CREATE DATABASE appstore;
USE appstore;

CREATE TABLE softwares
(
  id            INT AUTO_INCREMENT PRIMARY KEY,
  nombre        VARCHAR(40) NOT NULL,
  espaciomb     SMALLINT NOT NULL,
  versionsoft   VARCHAR(20) NOT NULL,
  precio        DECIMAL(7,2) NOT NULL
)ENGINE = INNODB;

INSERT INTO softwares
(nombre, espaciomb, versionsoft, precio)
VALUES
  ('MS office', 3000, '365', 120),
  ('Adobe Photoshop', 5000, '2025', 500),
  ('Corel Draw', 2500, '2024', 320);

SELECT * FROM softwares;