create database total_vendas;
use total_vendas;
create table vendas
(id_vendas INT PRIMARY KEY AUTO_INCREMENT ,
id_produtos INT ,
quantidade INT , 
preço_unitario DECIMAL (6,2),
id_categoria INT
);

insert into vendas (id_vendas,id_produtos,quantidade,preço_unitario,id_categoria) values (459,9865,978,89.90,09766);
insert into vendas (id_vendas,id_produtos,quantidade,preço_unitario,id_categoria) values (460,7443,100,299.99,05565);
insert into vendas (id_vendas,id_produtos,quantidade,preço_unitario,id_categoria) values (461,2939,398,384.98,02948);
insert into vendas (id_vendas,id_produtos,quantidade,preço_unitario,id_categoria) values (462,0562,050,24.99,15634);

SELECT id_categoria, SUM(quantidade * preço_unitario) AS total_vendas FROM vendas;

 -- 2
 
create table produtos(
	id_produto INT PRIMARY KEY NOT NULL,
    nome_produto VARCHAR(100),
    preco DECIMAL(5,2),
    estoque INT(100)
);

insert into produtos values(1,"Smartphone",2300,192);
insert into produtos values(2,"Smart TV",4000,59);
insert into produtos values(3,"Smart Watch",359.99,04);
insert into produtos values(4,"Tablet",990.99,10);

UPDATE produtos SET preco = 320.00 WHERE id_produto = 1;
UPDATE produtos SET preco = 999.99 WHERE id_produto = 2;
UPDATE produtos SET preco = 720.25 WHERE id_produto = 3;
UPDATE produtos SET preco = 400.00 WHERE id_produto = 4;

SELECT id_produto, nome_produto FROM produtos WHERE nome_produto LIKE "%smart%";

-- 3

create table clientes(
	id_cliente INT PRIMARY KEY NOT NULL,
    nome_cliente VARCHAR(100),
    estado VARCHAR(2)
);

insert into clientes values(1,"Arthur Fernandes Rodrigues", "GO");
insert into clientes values(2,"Wildiane Lucas da Silva", "DF");
insert into clientes values(3,"Giovanna Aguiar Vaz", "SP");
insert into clientes values(4,"Yasmin Farias Soares", "MG");
insert into clientes values(5,"Laura Bernandes Sonza", "MT");
insert into clientes values(6,"João Victor Oboé", "BH");

UPDATE clientes SET id_cliente = 7 WHERE id_cliente = 6;

insert into clientes values(6,"Gustavo Lima Silva", "RS");

SELECT * FROM clientes WHERE estado IN ("SP","RJ","MG");