create database total_vendas;
use total_vendas;
create table vendas(id_vendas DECIMAL (1000),id_produtos VARCHAR (1000),quantidade INT(1000),preço_unitario DECIMAL (6,2),id_categoria VARCHAR (1000));

insert into vendas(id_vendas,id_produtos,quantidade,preço_unitario,id_categoria) values (458,"cropped",978,89.90,"blusas");
 
