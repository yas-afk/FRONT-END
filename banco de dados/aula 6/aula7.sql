CREATE DATABASE relacionamentos;

use relacionamentos;

-- one to one (um para um)
CREATE TABLE alunos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  turma VARCHAR(5)
  );
  
  SELECT * FROM alunos;
  
  CREATE TABLE contatos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  telefone VARCHAR(20),
  aluno_id INT NOT NULL,
  FOREIGN KEY (aluno_id) REFERENCES alunos(id)
  );
  
  insert into alunos(nome,turma) values ("Juan","002M");
  insert into alunos(nome,turma) values ("Raryson","003V");
  insert into alunos(nome,turma) values ("Giovanna","003V");
  
  
  INSERT INTO alunos(telefone,aluno_id) VALUES ("(61)99999999",1);
  INSERT INTO alunos(telefone,aluno_id) VALUES ("(61)8888888",2);
  INSERT INTO alunos(telefone,aluno_id) VALUES ("(61)777777",3);
  
  SELECT * FROM alunos;
  SELECT * FROM contatos;
  SELECT * FROM contatos WHERE aluno_id = 3;
  SELECT * alunos.nome , alunos.turma , contatos.telefone FROM alunos JOIN contatos ON contatos.aluno_id;
  
  -- ONE TO MANY
  CREATE TABLE clientes (
     id INT PRIMARY KEY AUTO_INCREMENT,
     nome VARCHAR(100)
  );
  
  -- QUEM E O ESTRANGEIRO E DE ONDE VEM (PROVA)
  CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  valorTotal FLOAT,
  cliente_id INT NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
  );
  
  INSERT INTO clientes(nome) values("George");