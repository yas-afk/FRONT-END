create database LivrariaDB;
use LivrariaDB;

create table Autores(
id_autor INT PRIMARY KEY AUTO_INCREMENT ,
nome VARCHAR(100) NOT NULL ,
nacionalidade VARCHAR(100)
);

create table Livros(
id_livros INT PRIMARY KEY AUTO_INCREMENT ,
titulo VARCHAR(100) NOT NULL ,
ano_publicacao INT ,
FOREIGN KEY (id_livros) REFERENCES autor(id)
);