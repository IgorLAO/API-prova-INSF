CREATE DATABASE TAREFAS;
USE TAREFAS;

CREATE TABLE TB_TAREFA(
	ID_TAREFA			INT primary KEY auto_increment,
    DS_TAREFA			VARCHAR(100),
    NR_ORDEM			INT,
    BT_FINALIZADO		BOOL,
    DT_CADASTRO			DATETIME
);

insert into TB_TAREFA(DS_TAREFA, NR_ORDEM, BT)
