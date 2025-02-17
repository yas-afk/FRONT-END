create database LivrariaDB;
use LivrariaDB;

create table Autores(
id_autor INT PRIMARY KEY AUTO_INCREMENT ,
nome VARCHAR(100) NOT NULL ,
nacionalidade VARCHAR(100)
);

insert into Autores (id_autor,nome,nacionalidade) values (1,"Machado de Assis","Brasileiro");
insert into Autores (id_autor,nome,nacionalidade) values (2,"Fiódor Dostoiévski","Russo");
insert into Autores (id_autor,nome,nacionalidade) values (3,"Edgar Allan Poe","Estadunidense");

select * from Autores;


create table Livros(
id_livros INT PRIMARY KEY AUTO_INCREMENT ,
titulo VARCHAR(100) NOT NULL ,
ano_publicacao INT,
id_autor_do_livro INT NOT NULL,
FOREIGN KEY (id_autor_do_livro) REFERENCES Autores(id_autor)
);
 
insert into Livros (id_livros,titulo,ano_publicacao) values ("Dom Casmurro",1899,1);
insert into Livros (id_livros,titulo,ano_publicacao) values ("Memórias Póstumas de Brás Cubas ",1881,1);
insert into Livros (id_livros,titulo,ano_publicacao) values ("O Corvo",1845,2);
insert into Livros (id_livros,titulo,ano_publicacao) values ("O Gato Preto",1843,2);
insert into Livros (id_livros,titulo,ano_publicacao) values ("Crime e Castigo",1866,3);
insert into Livros (id_livros,titulo,ano_publicacao) values ("Noites Brancas",1848,3);

select * from Livros;

CREATE TABLE livros_autores(
   id_autor INT NOT NULL,
   id_livro INT NOT NULL,
   FOREIGN KEY (id_autor) REFERENCES Autores(id_autor),
   FOREIGN KEY (id_livro) REFERENCES Livros(id_livroS)
);

INSERT INTO livros_autores(id_autor,id_livro) VALUES (1,1);
INSERT INTO livros_autores(id_autor,id_livro) VALUES (2,2);
INSERT INTO livros_autores(id_autor,id_livro) VALUES (2,3);
INSERT INTO livros_autores(id_autor,id_livro) VALUES (2,4);
