/*
BASE DE DATOS DE PET SHOP
@AUTORES:
@ASIGNATURA: NUEVAS TENDENCIAS DE PROGRAMACIÓN

*/

CREATE DATABASE petshop CHARACTER SET utf8mb4;

CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(50) NOT NULL,
    descripcion TEXT
);

CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto VARCHAR(50),
    descripcion_prod TEXT,
    material VARCHAR(100),
    marca VARCHAR(20),
    uso text,
    precio DECIMAL(8,2),
    stock_inicial INT,
    stock INT,
    categoria_id INT
);

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rol VARCHAR(15) NOT NULL,
    descripcion_rol TEXT
);

CREATE TABLE usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(25),
    clave VARCHAR(100),
    rol_id INT
);

CREATE TABLE venta(
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    precioTotal DECIMAL(8,2),
    estado INT
);

CREATE TABLE detalleVenta(
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT,
    precioUnitario DECIMAL(8,2),
    venta_id INT
);